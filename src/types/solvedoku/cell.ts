/**
 * Represents a single cell in a Sudoku game board
 * @property {string | null} value - The current value in the cell (1-9) or null if empty
 * @property {boolean} locked - Whether the cell value can be modified by the solution finder
 */
export interface Cell {
	value: string | null;
	locked: boolean;
	userInputted: boolean;
}
