
import { useState, useCallback, useMemo } from 'react';
import type {
	SolvedokuGameBoard,
	SolvedokuGameState,
	Move,
	PuzzleDifficulty,
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
	// Core game state
	const BOARD_SIZE = 9; // 9x9 grid size
	const [gameBoard, setGameBoard] = useState<SolvedokuGameBoard>(() =>
		createEmptyBoard(BOARD_SIZE)
	);
	const [solutionBoard, setSolutionBoard] = useState<SolvedokuGameBoard | null>(
		null
	);
	const [selectedCellID, setSelectedCellID] = useState<string | null>(null);
	const [moveHistory, setMoveHistory] = useState<Move[]>([]);
	const [selectedDifficulty, setSelectedDifficulty] =
		useState<PuzzleDifficulty>('easy');

	// Solution finder state
	const [isFindingSolution, setIsFindingSolution] = useState(false);
	const [solutionFinderInterval, setSolutionFinderInterval] = useState(1); //? in ms...
	const [solutionStepCounter, setSolutionStepCounter] = useState(0);

	// Computed values
	const canUndo = useMemo(() => moveHistory.length > 0, [moveHistory]);
	const isValidGameBoard = useMemo(
		() => isValidSolvedokuGame(gameBoard),
		[gameBoard]
	);
	const gameBoardEmpty = useMemo(
		() => gameBoard.every(row => row.every(cell => cell.value === null)),
		[gameBoard]
	);
	const selectedCellHasValue = useMemo(() => {
		if (!selectedCellID) return false;
		const [row, col] = parseFormattedCellIDString(selectedCellID);
		return gameBoard[row][col].value !== null;
	}, [selectedCellID, gameBoard]);
	const isValidSolution = useMemo(() => {
		if (!isValidGameBoard) return false;
		return gameBoard.every(row => row.every(cell => cell.value !== null));
	}, [gameBoard, isValidGameBoard])

	/**
	 * Updates the value of a cell in the game board and records the move in history (for undo functionality)
	 * @param cellID - The ID of the cell to update in "row-col" format - expects 1 based ID
	 * @param value - The new value to set (string number 1-9 or null to clear)
	 */
	const updateCellValue = useCallback(
		(cellID: string, value: string | null) => {
			const [row, col] = parseFormattedCellIDString(cellID);
			const previousValue = gameBoard[row][col].value;

			if (previousValue === value) return;

			const move: Move = {
				cellID,
				previousValue,
				newValue: value,
			};
			setMoveHistory(prev => [...prev, move]);

			setGameBoard(prev => {
				const newGameData = [...prev];
				newGameData[row][col].value = value
				return newGameData;
			});
		},
		[gameBoard]
	);

	/**
	 * Reverts the last move made on the game board
	 * Retrieves the last move from moveHistory, restores the previous value to that cell,
	 * and removes the move from history. Does nothing if moveHistory is empty.
	 */
	const undo = useCallback(() => {
		if (moveHistory.length === 0) return;

		const lastMove = moveHistory[moveHistory.length - 1];
		const [row, col] = parseFormattedCellIDString(lastMove.cellID);

		setGameBoard(prev => {
			const newGame = [...prev];
			newGame[row][col].value = lastMove.previousValue;
			return newGame;
		});

		setMoveHistory(prev => prev.slice(0, -1));
	}, [moveHistory]);

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
			const movesToUndo = [...moveHistory];

			for (let i = movesToUndo.length - 1; i >= 0; i--) {
				const move = movesToUndo[i];
				const [row, col] = parseFormattedCellIDString(move.cellID);

				setGameBoard(prev => {
					const newGame = [...prev];
					newGame[row][col].value = move.previousValue;
					newGame[row][col].locked = move.previousValue !== null;
					return newGame;
				});
			}
			setSolutionStepCounter(0);
			setMoveHistory([]);
		} else {
			setSolutionStepCounter(0);
			setGameBoard(createEmptyBoard(BOARD_SIZE));
		}
	}, [setGameBoard, moveHistory]);

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
		const solved = filledBoard.map(row => (row.map(cell => ({ ...cell }))))
		setSolutionBoard(solved);
		emptyCellsForDifficulty(filledBoard, selectedDifficulty);
		setSolutionStepCounter(0);
		setMoveHistory([]);
		setGameBoard(filledBoard);
	}, [selectedDifficulty]);

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
		setSolutionStepCounter
	};
}
