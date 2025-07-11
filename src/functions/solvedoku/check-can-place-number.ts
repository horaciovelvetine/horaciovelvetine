import type { SolvedokuGameBoard } from '../../types';

/**
 * Checks if a number can be placed in a specific cell on the Sudoku board
 * @param board - The Sudoku game board to check
 * @param row - The row index (0-8) to check
 * @param col - The column index (0-8) to check
 * @param num - The number (1-9) to check if it can be placed
 * @returns True if the number can be placed in the specified cell, false otherwise
 */

export function checkCanPlaceNumber(
	board: SolvedokuGameBoard,
	row: number,
	col: number,
	num: number
): boolean {
	const numStr = num.toString();

	// Check row
	for (let x = 0; x < board.length; x++) {
		if (board[row][x].value === numStr) return false;
	}
	// Check column
	for (const row of board) {
		if (row[col].value === numStr) return false;
	}

	// Check 3x3 box
	const startRow = Math.floor(row / 3) * 3;
	const startCol = Math.floor(col / 3) * 3;
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (board[startRow + i][startCol + j].value === numStr) return false;
		}
	}

	return true;
}
