import type { RowColumnSet, SolvedokuGameBoard } from '../../types';

/**
 * Clears all unlocked cell values in the game board that come after the target cell position
 * @param cellTarget - Tuple of [row, column] coordinates for the target cell, or null
 * @param workingBoard - The current game board state to modify
 * @returns void
 *
 * The function clears values from:
 * 1. All cells in rows after the target row
 * 2. All cells after the target column in the target row
 * Only clears unlocked cells, preserving locked cell values
 * Does nothing if cellTarget is null
 */
export function clearBoardPastTarget(
	cellTarget: RowColumnSet | null,
	workingBoard: SolvedokuGameBoard
) {
	// Return early if no target cell provided
	if (cellTarget === null) return;

	const [targetRow, targetCol] = cellTarget;
	const boardSize = workingBoard.length;

	for (let currentRow = targetRow; currentRow < boardSize; currentRow++) {
		const rowLength = workingBoard[currentRow].length;
		const startCol = currentRow === targetRow ? targetCol + 1 : 0;

		for (let currentCol = startCol; currentCol < rowLength; currentCol++) {
			const cell = workingBoard[currentRow][currentCol];
			//? Only clear unlocked, non-user-inputted cells
			if (!cell.locked && !cell.userInputted) {
				cell.value = null;
			}
		}
	}
}
