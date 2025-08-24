import { useCallback, useEffect } from 'react';
import type {
	RowColumnSet,
	SolvedokuGameBoard,
	SolvedokuGameState,
} from '../../types';
import {
	checkCanPlaceNumber,
	clearBoardPastTarget,
	findEmptyCell,
	stepTargetCellIndecesBack,
} from '../../functions';

/**
 * Custom hook that implements a backtracking algorithm to find valid solutions for the Sudoku puzzle
 * Handles solution finding state, step counting, and board updates
 * Can be paused/resumed via the solution finder interval
 * @param state - The game state containing board data and control functions
 */

export function useSolutionFinder(state: SolvedokuGameState) {
	const {
		solutionFinderInterval,
		isFindingSolution,
		setIsFindingSolution,
		gameBoard,
		setGameBoard,
		isValidSolution,
		setSolutionStepCounter,
		solutionStepCounter,
		solutionBoard,
		setIsUnsolveable,
		cellSolveTarget,
		setCellSolveTarget,
	} = state;
	// const [cellTarget, setCellTarget] = useState<RowColumnSet | null>();

	const findCellSolution = useCallback(
		(
			workingBoard: SolvedokuGameBoard,
			targetCellStart: RowColumnSet | null
		): RowColumnSet | null => {
			if (!targetCellStart) return null; //? no empty cells found...
			setSolutionStepCounter(prev => prev + 1);

			const [rowTgt, colTgt] = targetCellStart;
			const currentValue = workingBoard[rowTgt][colTgt].value;
			const startingGuess = currentValue ? parseInt(currentValue) + 1 : 1;

			// Try numbers from startingGuess to 9
			for (let num = startingGuess; num <= 9; num++) {
				const validSolutionPlaced = checkCanPlaceNumber(
					workingBoard,
					rowTgt,
					colTgt,
					num
				);

				if (validSolutionPlaced) {
					//? Place the number and move to next empty cell
					workingBoard[rowTgt][colTgt].value = num.toString();

					//? Batch the cell update with the board update to prevent excessive re-renders
					setGameBoard(prev => {
						const newBoard = prev.map((row, rowIndex) =>
							row.map((cell, colIndex) => ({
								...cell,
								value: workingBoard[rowIndex][colIndex].value,
							}))
						);
						return newBoard;
					});

					return findEmptyCell(workingBoard);
				}
			}

			//? No valid solution found, need to backtrack
			let foundBTTarget = false;
			let btTargetCell = stepTargetCellIndecesBack(targetCellStart);

			while (!foundBTTarget) {
				//? bt'd all the way, exit with null
				if (!btTargetCell) return btTargetCell;

				const [btRowTgt, btColTgt] = btTargetCell;
				const newBTTgtCell = workingBoard[btRowTgt][btColTgt];

				//? skip cell if it was input by the user or locked by puzzle generation
				if (newBTTgtCell.locked || newBTTgtCell.userInputted) {
					btTargetCell = stepTargetCellIndecesBack(btTargetCell);
					continue;
				}
				foundBTTarget = true;
			}

			//? Clear the current cell and all cells after the backtrack target
			workingBoard[rowTgt][colTgt].value = null;
			clearBoardPastTarget(btTargetCell, workingBoard);

			//? Batch all cell updates into a single board update to prevent excessive re-renders
			setGameBoard(prev => {
				const newBoard = prev.map((row, rowIndex) =>
					row.map((cell, colIndex) => ({
						...cell,
						value: workingBoard[rowIndex][colIndex].value,
					}))
				);
				return newBoard;
			});

			//? Return the backtrack target so it can try the next number
			return btTargetCell;
		},
		[setGameBoard, setSolutionStepCounter]
	);

	useEffect(() => {
		if (!isFindingSolution || isValidSolution) return;

		const timeoutSolver = setTimeout(() => {
			const workingBoard: SolvedokuGameBoard = gameBoard.map(row =>
				row.map(cell => ({ ...cell }))
			);

			const targetCellStart = cellSolveTarget ?? findEmptyCell(workingBoard);
			const nextCellTarget = findCellSolution(workingBoard, targetCellStart);

			if (nextCellTarget === null) {
				const boardIncomplete = workingBoard.some(row =>
					row.some(cell => cell.value === null)
				);
				if (boardIncomplete) setIsUnsolveable(true);
				setIsFindingSolution(false);
				setCellSolveTarget(null);
				return;
			}
			setCellSolveTarget(nextCellTarget);
		}, solutionFinderInterval);

		return () => {
			clearTimeout(timeoutSolver);
		};
	}, [
		solutionStepCounter,
		isFindingSolution,
		solutionFinderInterval,
		setIsFindingSolution,
		findCellSolution,
		isValidSolution,
		gameBoard,
		solutionBoard,
		setIsUnsolveable,
		cellSolveTarget,
		setCellSolveTarget,
	]);
}
