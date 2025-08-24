import type { Cell } from './cell';

/**
 * Type representing a complete 9x9 Sudoku game board
 *
 * A two-dimensional array structure where each Cell contains game state information
 * including the current value, whether it's locked from editing, and if it was
 * user-inputted. The board maintains the traditional Sudoku grid layout with
 * 9 rows and 9 columns.
 *
 * @type {Cell[][]}
 *
 * Board structure:
 * - Outer array: 9 rows (indices 0-8)
 * - Inner arrays: 9 columns per row (indices 0-8)
 * - Each Cell contains: value, locked, and userInputted properties
 *
 * @example
 * ```typescript
 * const gameBoard: SolvedokuGameBoard = [
 *   [
 *     { value: null, locked: false, userInputted: false },
 *     { value: "5", locked: true, userInputted: false },
 *     { value: "3", locked: false, userInputted: true },
 *     // ... 6 more cells in row 0
 *   ],
 *   [
 *     { value: "8", locked: true, userInputted: false },
 *     { value: null, locked: false, userInputted: false },
 *     // ... 7 more cells in row 1
 *   ],
 *   // ... 7 more rows
 * ];
 * ```
 */
export type SolvedokuGameBoard = Cell[][];
