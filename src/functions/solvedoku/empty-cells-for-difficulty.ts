import {
  PUZZLE_DIFFICULTY,
  type PuzzleDifficulty,
  type SolvedokuGameBoard,
} from '../../types';

/**
 * Removes numbers from a completed Sudoku board to create a puzzle of specified difficulty
 * @param board - The completed Sudoku board to remove numbers from
 * @param difficulty - The desired difficulty level ('easy', 'medium', or 'hard')
 * @returns void - Modifies the board in place by setting cells to null
 *
 * The number of cells that remain filled depends on the difficulty:
 * - Easy: 35 cells remain filled
 * - Medium: 30 cells remain filled
 * - Hard: 25 cells remain filled
 */

export function emptyCellsForDifficulty(
  board: SolvedokuGameBoard,
  difficulty: PuzzleDifficulty
): void {
  const cellsToKeep = PUZZLE_DIFFICULTY[difficulty].cellCount;
  let cellsRemaining = board.length * board.length;

  while (cellsRemaining > cellsToKeep) {
    const row = Math.floor(Math.random() * board.length);
    const col = Math.floor(Math.random() * board.length);

    if (board[row][col].value !== null) {
      const cell = board[row][col];
      cell.value = null;
      cell.locked = false;
      cell.userInputted = false;
      cellsRemaining--;
    }
  }
}
