import type { RowColumnSet } from '../../types/solvedoku/row-column-set';

/**
 * Parses a cell ID string into row and column indices
 * @param cellId - String in the format "row-column" (e.g. "1-1" for top left cell)
 * @returns Tuple containing [row, column] as zero-based indices
 */

export function parseFormattedCellIDString(
	cellID: string | null
): RowColumnSet {
	if (!cellID) return [-1, -1];
	const [row, col] = cellID.split('-').map(n => parseInt(n) - 1);
	return [row, col];
}
