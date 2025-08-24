import type { SolvedokuGameBoard } from '../../types';

/**
 * Validates if a Sudoku game board is in a valid state according to Sudoku rules
 *
 * The function checks three constraints simultaneously:
 * 1. Each row must contain unique numbers 1-9
 * 2. Each column must contain unique numbers 1-9
 * 3. Each 3x3 block must contain unique numbers 1-9
 *
 * Uses a single array of Sets to efficiently track seen values:
 * - Indices 0-8: Row sets
 * - Indices 9-17: Column sets
 * - Indices 18-26: Block sets
 *
 * @param gameBoard - The 9x9 Sudoku game board to validate
 * @returns {boolean} True if the board is valid, false if any constraint is violated
 */

export function isValidSolvedokuGame(gameBoard: SolvedokuGameBoard): boolean {
  // Use a single array to track seen values for all checks
  const seen = new Array(27).fill(null).map(() => new Set<string>());

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const value = gameBoard[row][col].value;
      if (value !== null) {
        // Calculate indices for row, column and block sets
        const rowSetIndex = row;
        const colSetIndex = 9 + col;
        const blockSetIndex =
          18 + (Math.floor(row / 3) * 3 + Math.floor(col / 3));

        // Check all three constraints at once
        if (
          seen[rowSetIndex].has(value) ||
          seen[colSetIndex].has(value) ||
          seen[blockSetIndex].has(value)
        ) {
          return false;
        }

        // Add value to all three sets
        seen[rowSetIndex].add(value);
        seen[colSetIndex].add(value);
        seen[blockSetIndex].add(value);
      }
    }
  }

  return true;
}
