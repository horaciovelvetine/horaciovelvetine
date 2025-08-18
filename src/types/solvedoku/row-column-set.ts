/**
 * Type representing a coordinate pair for a cell position in a Sudoku grid
 *
 * A tuple containing row and column indices used to identify specific cells
 * within the 9x9 Sudoku board. Both values are zero-indexed, ranging from 0-8.
 *
 * @type {[number, number]}
 * @example
 * // Top-left corner cell
 * const topLeft: RowColumnSet = [0, 0];
 *
 * // Bottom-right corner cell
 * const bottomRight: RowColumnSet = [8, 8];
 *
 * // Center cell
 * const center: RowColumnSet = [4, 4];
 */

export type RowColumnSet = [number, number];
