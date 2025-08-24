import type { RowColumnSet } from '../../types';

/**
 * Steps a target cell's coordinates back one position in the puzzle grid
 * @param targetCell - Tuple of [row, column] coordinates for the current target cell
 * @returns New [row, column] coordinates for the previous cell, or null if already at start
 *
 * The function handles two cases:
 * 1. If at start of a row (col === 0), moves to end of previous row
 * 2. Otherwise moves back one column in current row
 * Returns null if already at puzzle start (0,0)
 */

export function stepTargetCellIndecesBack(
	targetCell: RowColumnSet
): RowColumnSet | null {
	const [currentRow, currentCol] = targetCell;
	const isAtPuzzleStart = currentRow === 0 && currentCol === 0;
	const isAtRowStart = currentCol === 0;

	if (isAtPuzzleStart) return null;

	if (isAtRowStart) {
		//? move to the end of the previous row
		return [currentRow - 1, 8];
	}

	//? move back one column in currentRow
	return [currentRow, currentCol - 1];
}
