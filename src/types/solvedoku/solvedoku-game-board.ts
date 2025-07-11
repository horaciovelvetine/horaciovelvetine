import type { Cell } from './cell';
/**
 * Represents a 9x9 Sudoku game board
 * Each cell is an object containing:
 * - value: A string representing a number from 1-9, or null for empty cells
 * - locked: A boolean indicating if the cell value can be changed
 *
 * The board is structured as a 2D array where:
 * - The outer array represents the 9 rows
 * - Each inner array represents the 9 columns in that row
 *
 * @example
 * [
 *   [{value: null, locked: false}, {value: "1", locked: true}, {value: "2", locked: true}, ...], // Row 0
 *   [{value: "4", locked: true}, {value: null, locked: false}, {value: null, locked: false}, ...], // Row 1
 *   ...                          // Rows 2-8
 * ]
 */

export type SolvedokuGameBoard = Cell[][];
