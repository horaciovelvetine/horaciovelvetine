import type { SolvedokuGameBoard, RowColumnSet } from '../../types';

/**
 * Finds the first empty cell in a Sudoku board
 * @param board - The Sudoku game board to search
 * @returns A tuple containing [row, column] coordinates of the first empty cell, or null if no empty cells exist
 */

export function findEmptyCell(board: SolvedokuGameBoard): RowColumnSet | null {
	for (let row = 0; row < board.length; row++) {
		for (let col = 0; col < board.length; col++) {
			if (board[row][col].value === null) {
				return [row, col];
			}
		}
	}
	return null;
}
