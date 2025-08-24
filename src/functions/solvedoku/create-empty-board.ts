import type { SolvedokuGameBoard } from '../../types';

/**
 * Creates an empty { @var boardSize } Sudoku game board initialized with null values
 * @param boardSize: the size of the game board to be initialized
 * @returns A 9x9 2D array representing an empty Sudoku board where each cell contains null
 */

export function createEmptyBoard(boardSize: number): SolvedokuGameBoard {
	return Array.from({ length: boardSize }, () =>
		Array.from({ length: boardSize }, () => ({
			value: null,
			locked: false,
			userInputted: false,
		}))
	);
}
