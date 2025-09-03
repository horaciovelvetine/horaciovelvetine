import { useState, useCallback, useMemo, useRef } from 'react';
import type {
	SolvedokuGameBoard,
	SolvedokuGameState,
	Move,
	PuzzleDifficulty,
	RowColumnSet,
} from '../../types';
import {
	parseFormattedCellIDString,
	createEmptyBoard,
	isValidSolvedokuGame,
	generateFilledSudokuPuzzle,
	emptyCellsForDifficulty,
} from '../../functions';

/**
 * Custom hook that manages the state and operations for a Solvedoku game
 *
 * Handles:
 * - Game board state and cell selection
 * - Move history for undo functionality
 * - Puzzle status tracking (validity, emptiness)
 * - Difficulty level selection
 * - Solution finding with configurable speed
 * - Cell value updates with history tracking
 * - Computed state for game status
 *
 * @returns {SolvedokuGameState} Object containing game state, computed values, and functions to manipulate the game
 */
export function useSolvedokuGameState(): SolvedokuGameState {
	//? Core game state
	const BOARD_SIZE = 9; // 9x9 grid size
	const [gameBoard, setGameBoard] = useState<SolvedokuGameBoard>(() =>
		createEmptyBoard(BOARD_SIZE)
	);
	const [solutionBoard, setSolutionBoard] = useState<SolvedokuGameBoard | null>(
		null
	);
	const [moveHistory, setMoveHistory] = useState<Move[]>([]);
	const [selectedCellID, setSelectedCellID] = useState<string | null>(null);
	const [selectedDifficulty, setSelectedDifficulty] =
		useState<PuzzleDifficulty>('easy');

	/**
	 * Solution Finder state, determine if the client has asked to find a solution, how long to wait between each cell solution is tried, and how many steps it takes to arrive at the solution once the solution is completed.
	 */
	const MIN_SOLVER_INTERVAL = 1;
	const MAX_SOLVER_INTERVAL = 300;
	const SOLVER_INTERVAL_STEP = 20;

	const [isFindingSolution, setIsFindingSolution] = useState(false);
	const [solutionFinderInterval, setSolutionFinderInterval] = useState(1); //? in ms...
	const [solutionStepCounter, setSolutionStepCounter] = useState(0);
	const [isUnsolveable, setIsUnsolveable] = useState(false);
	const [cellSolveTarget, setCellSolveTarget] = useState<RowColumnSet | null>(
		null
	);
	const [showStoredSolution, setShowStoredSolution] = useState(false);

	/**
	 * Ref values for expensive checks to see if they can be skipped
	 */
	const lastValidationRef = useRef<{
		board: SolvedokuGameBoard;
		isValid: boolean;
	} | null>(null);

	const lastEmptyCheckRef = useRef<{
		board: SolvedokuGameBoard;
		isEmpty: boolean;
	} | null>(null);

	/**
	 * Memoized boolean indicates if there are any moves to be undone
	 */
	const canUndo = useMemo(() => moveHistory.length > 0, [moveHistory]);

	/**
	 * Memoized boolean indicating if the current state of gameBoard is a valid Sudoku puzzle
	 *
	 * The function:
	 * 1. Checks if there is a cached result that can be used
	 * 2. If no cache hit, validates that:
	 *    - Each row contains no duplicate numbers
	 *    - Each column contains no duplicate numbers
	 *    - Each 3x3 box contains no duplicate numbers
	 * 3. Caches the new result before returning
	 *
	 * @returns {boolean} True if the current board state is valid, false if any duplicates are found
	 */
	const isValidGameBoard = useMemo(() => {
		// Check if we can use cached result
		if (
			lastValidationRef.current &&
			lastValidationRef.current.board === gameBoard
		) {
			return lastValidationRef.current.isValid;
		}

		const isValid = isValidSolvedokuGame(gameBoard);
		lastValidationRef.current = { board: gameBoard, isValid };
		return isValid;
	}, [gameBoard]);

	/**
	 * Memoized boolean indicating if the game board is completely empty
	 *
	 * The function:
	 * 1. Checks if there is a cached result that can be used
	 * 2. If no cache hit, checks if every cell in the board has a null value
	 * 3. Caches the new result before returning
	 *
	 * @returns {boolean} True if all cells are empty (null), false if any cell has a value
	 */
	const gameBoardEmpty = useMemo(() => {
		// Check if we can use cached result
		if (
			lastEmptyCheckRef.current &&
			lastEmptyCheckRef.current.board === gameBoard
		) {
			return lastEmptyCheckRef.current.isEmpty;
		}

		const isEmpty = gameBoard.every(row =>
			row.every(cell => cell.value === null)
		);
		lastEmptyCheckRef.current = { board: gameBoard, isEmpty };
		return isEmpty;
	}, [gameBoard]);

	/**
	 * Helper to check if the currently selected cell contains a value
	 *
	 * The function:
	 * 1. Returns false if no cell is selected
	 * 2. Parses the selected cell ID to get row/column indices
	 * 3. Checks if the cell at those indices has a non-null value
	 *
	 * @returns {boolean} True if the selected cell contains a value, false if empty or no selection
	 */
	const selectedCellHasValue = useMemo(() => {
		if (!selectedCellID) return false;
		const [row, col] = parseFormattedCellIDString(selectedCellID);
		return gameBoard[row][col].value !== null;
	}, [selectedCellID, gameBoard]);

	/**
	 * Memoized boolean indicating if the current game board represents a valid completed solution
	 *
	 * The function:
	 * 1. Returns false if the current board state is not valid (has duplicates)
	 * 2. Checks if every cell contains a non-null value
	 *
	 * @returns {boolean} True if board is both valid and complete, false otherwise
	 */
	const isValidSolution = useMemo(() => {
		if (!isValidGameBoard) return false;
		return gameBoard.every(row => row.every(cell => cell.value !== null));
	}, [gameBoard, isValidGameBoard]);

	/**
	 * Updates the value of a cell in the game board and records the move in history (for undo functionality)
	 * @param cellID - The ID of the cell to update in "row-col" format - expects 1 based ID
	 * @param value - The new value to set (string number 1-9 or null to clear)
	 */
	const updateCellValue = useCallback(
		(
			cellID: string,
			value: string | null,
			isUserInput: boolean,
			resetUnsolveable = true
		) => {
			const [row, col] = parseFormattedCellIDString(cellID);
			const cellReference = gameBoard[row][col];

			if (cellReference.value === value) return;

			// Reset unsolveable state when board changes (unless explicitly disabled)
			if (resetUnsolveable) {
				setIsUnsolveable(false);
			}

			const move: Move = {
				cellID,
				newValue: value,
				previousValue: cellReference.value,
				previouslyLocked: cellReference.locked,
				previouslyUserInputted: cellReference.userInputted,
			};
			setMoveHistory(prev => [...prev, move]);

			setGameBoard(prev => {
				const newGameData = [...prev];
				newGameData[row][col].value = value;
				newGameData[row][col].userInputted = isUserInput;
				newGameData[row][col].locked = false;
				return newGameData;
			});
		},
		[gameBoard, setIsUnsolveable]
	);

	/**
	 * Reverts the last move made on the game board
	 *
	 * The function:
	 * 1. Returns early if move history is empty
	 * 2. Gets the last move from history
	 * 3. Restores the previous value to that cell
	 * 4. Removes the move from history
	 */
	const undo = useCallback(() => {
		if (moveHistory.length === 0) return;

		// Reset unsolveable state when board changes
		setIsUnsolveable(false);

		const lastMove = moveHistory[moveHistory.length - 1];
		const [row, col] = parseFormattedCellIDString(lastMove.cellID);

		setGameBoard(prev => {
			const newGame = [...prev];
			newGame[row][col].value = lastMove.previousValue;
			newGame[row][col].userInputted = lastMove.previouslyUserInputted;
			newGame[row][col].locked = lastMove.previouslyLocked;
			return newGame;
		});

		setMoveHistory(prev => prev.slice(0, -1));
	}, [moveHistory, setIsUnsolveable]);

	/**
	 * Clears the game board by unlocking all cells and setting all values to null
	 *
	 * The function:
	 * 1. Resets the solution step counter to 0
	 * 2. Creates a new empty game board with all cells unlocked
	 * 3. Clears the move history
	 * 4. Clears any cached validation results
	 */
	const clearGameBoard = useCallback(() => {
		setSolutionStepCounter(0);
		setGameBoard(createEmptyBoard(BOARD_SIZE));
		setMoveHistory([]);
		setShowStoredSolution(false);
		setSolutionBoard(null);
		// Reset unsolveable state when board changes
		setIsUnsolveable(false);
		// Clear caches when board is reset
		lastValidationRef.current = null;
		lastEmptyCheckRef.current = null;
	}, [setIsUnsolveable]);

	/**
	 * Resets the game board by undoing all moves in history or creating a new empty board
	 *
	 * If there are moves in history:
	 * 1. Iterates through move history in reverse order and un-does each move
	 * 2. Clears the move history
	 *
	 * If no moves in history:
	 * - Creates a new empty game board
	 */
	const resetGameStepwise = useCallback(() => {
		if (moveHistory.length > 0) {
			// Reset unsolveable state when board changes
			setIsUnsolveable(false);

			const movesToUndo = [...moveHistory];

			for (let i = movesToUndo.length - 1; i >= 0; i--) {
				const move = movesToUndo[i];
				const [row, col] = parseFormattedCellIDString(move.cellID);

				setGameBoard(prev => {
					const newGame = [...prev];
					newGame[row][col].value = move.previousValue;
					newGame[row][col].locked = move.previouslyLocked;
					newGame[row][col].userInputted = move.previouslyUserInputted;
					return newGame;
				});
			}
			setSolutionStepCounter(0);
			setMoveHistory([]);

			// Clear caches when board is reset
			lastValidationRef.current = null;
			lastEmptyCheckRef.current = null;
			return;
		}
		clearGameBoard();
		setSolutionBoard(null);
		setShowStoredSolution(false);
	}, [setGameBoard, moveHistory, clearGameBoard, setIsUnsolveable]);

	/**
	 * Generates a new random Sudoku puzzle with the specified difficulty level
	 * @param difficulty - The desired difficulty level ('easy', 'medium', or 'hard')
	 *
	 * The function:
	 * 1. Creates a completely filled valid Sudoku board
	 * 2. Removes cells based on the difficulty level to create the puzzle
	 * 3. Resets the puzzle status and move history
	 */
	const generateRandomPuzzle = useCallback(() => {
		const filledBoard = generateFilledSudokuPuzzle(BOARD_SIZE);
		const solved = filledBoard.map(row => row.map(cell => ({ ...cell })));
		setSolutionBoard(solved);
		emptyCellsForDifficulty(filledBoard, selectedDifficulty);
		setSolutionStepCounter(0);
		setMoveHistory([]);
		setGameBoard(filledBoard);
		setShowStoredSolution(false);
		// Reset unsolveable state when board changes
		setIsUnsolveable(false);
		// Clear caches when new puzzle is generated
		lastValidationRef.current = null;
		lastEmptyCheckRef.current = null;
	}, [selectedDifficulty, setIsUnsolveable]);

	/**
	 * Toggles between showing the stored solution or the current game state
	 * @param showSolution - Boolean flag indicating whether to show the solution (true) or hide it (false)
	 *
	 * The function:
	 * 1. Checks if a solution board exists, returns early if not
	 * 2. Updates the game board to either show:
	 *    - The complete solution while preserving locked cell status
	 *    - The current game state with only locked cells visible
	 * 3. Resets move history and solution tracking when showing solution
	 */
	const toggleShowStoredPuzzleSolution = useCallback(
		(showSolution: boolean) => {
			if (!solutionBoard) return;

			// Reset unsolveable state when board changes
			setIsUnsolveable(false);

			setGameBoard(prev => {
				const newBoard = prev.map((row, rowIndex) =>
					row.map((cell, colIndex) => ({
						...cell,
						value:
							showSolution ? solutionBoard[rowIndex][colIndex].value
							: cell.locked ? cell.value
							: null,
						locked: cell.locked,
						userInputted: cell.userInputted,
					}))
				);
				return newBoard;
			});

			if (showSolution) {
				setMoveHistory([]);
				setSolutionStepCounter(0);
				lastValidationRef.current = null;
			}
		},
		[solutionBoard, setIsUnsolveable]
	);

	/**
	 * Decreases the solution finder interval by one step to slow down the solving animation
	 *
	 * The function:
	 * 1. Checks if the current interval is at or below the step size
	 * 2. If so, sets it to the minimum step size to prevent going below the step
	 * 3. Otherwise, decreases the interval by one step to slow down the solver
	 *
	 * This creates a smoother visual experience by making the solver take longer
	 * between each cell solution attempt, allowing users to better follow the solving process.
	 */
	const slowDownSolutionFinder = useCallback(() => {
		if (solutionFinderInterval <= SOLVER_INTERVAL_STEP) {
			setSolutionFinderInterval(SOLVER_INTERVAL_STEP);
		} else {
			setSolutionFinderInterval(prev => prev - SOLVER_INTERVAL_STEP);
		}
	}, [solutionFinderInterval]);

	/**
	 * Increases the solution finder interval by one step to speed up the solving animation
	 *
	 * The function:
	 * 1. Checks if the current interval is at the minimum (fastest) setting
	 * 2. If so, sets it to one step to begin incremental speed increases
	 * 3. If below maximum, increases the interval by one step to speed up the solver
	 * 4. Otherwise, ensures it doesn't exceed the maximum interval limit
	 *
	 * This creates a smoother visual experience by making the solver take less time
	 * between each cell solution attempt, allowing for faster puzzle solving visualization
	 * while maintaining controllable speed increments.
	 */
	const speedUpSolutionFinder = useCallback(() => {
		if (solutionFinderInterval === MIN_SOLVER_INTERVAL) {
			setSolutionFinderInterval(SOLVER_INTERVAL_STEP);
		} else if (solutionFinderInterval < MAX_SOLVER_INTERVAL) {
			setSolutionFinderInterval(prev =>
				Math.min(MAX_SOLVER_INTERVAL, prev + SOLVER_INTERVAL_STEP)
			);
		} else {
			setSolutionFinderInterval(MAX_SOLVER_INTERVAL);
		}
	}, [solutionFinderInterval]);

	return {
		gameBoard,
		setGameBoard,
		gameBoardEmpty,
		isValidGameBoard,
		isValidSolution,
		selectedDifficulty,
		setSelectedDifficulty,
		selectedCellID,
		setSelectedCellID,
		selectedCellHasValue,
		clearGameBoard,
		resetGameStepwise,
		updateCellValue,
		undo,
		canUndo,
		generateRandomPuzzle,
		isFindingSolution,
		setIsFindingSolution,
		solutionFinderInterval,
		setSolutionFinderInterval,
		solutionBoard,
		solutionStepCounter,
		setSolutionStepCounter,
		toggleShowStoredPuzzleSolution,
		isUnsolveable,
		setIsUnsolveable,
		cellSolveTarget,
		setCellSolveTarget,
		showStoredSolution,
		setShowStoredSolution,
		slowDownSolutionFinder,
		speedUpSolutionFinder,
		MIN_SOLVER_INTERVAL,
		MAX_SOLVER_INTERVAL,
	};
}
