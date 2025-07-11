import type { RowColumnSet } from '../../types';

/**
 * Creates a cell ID string from row/column coordinates (for use with the {@see updateCellValue })
 * @param cellTarget - Tuple of [row, column] coordinates
 * @returns String in format "row-column" with 1-based indices (e.g. "1-1" for [0,0])
 */

export function createCellIDFromTarget(cellTarget: RowColumnSet): string {
	const [row, col] = cellTarget;
	return (row + 1).toString() + '-' + (col + 1).toString();
}
