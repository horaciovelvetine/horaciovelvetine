
import type { SolvedokuGameBoard } from '../../types';
import { checkCanPlaceNumber } from './check-can-place-number';
import { createEmptyBoard } from './create-empty-board';
import { findEmptyCell } from './find-empty-cell';
import { getRandomNumbersArray } from './get-random-numbers-array';

/**
 * Generates a completely filled valid Sudoku puzzle board
 * @param board - The initial empty Sudoku board to fill
 * @returns A completely filled valid Sudoku board, or null if no valid solution exists
 * 
 * The function:
 * 1. Creates a new empty working board
 * 2. Gets a randomized array of numbers 1-9
 * 3. Recursively fills the board using backtracking:
 *    - Finds first empty cell
 *    - Tries placing each random number
 *    - Continues recursively until board is filled or backtracks if stuck
 * 4. Returns the filled board if successful, null if no solution found
 */

export function generateFilledSudokuPuzzle(boardSize: number): SolvedokuGameBoard {
  const workingBoard = createEmptyBoard(boardSize);
  const rndNumbers = getRandomNumbersArray();

  const fillBoardRecurseive = (board: SolvedokuGameBoard): boolean => {
    const emptyCell = findEmptyCell(board);
    if (!emptyCell) return true;

    const [rowTgt, colTgt] = emptyCell;
    for (const num of rndNumbers) {
      if (checkCanPlaceNumber(board, rowTgt, colTgt, num)) {
        // initialize values...
        const cell = board[rowTgt][colTgt];
        cell.value = num.toString();
        cell.locked = true;
        cell.userInputted = false;

        // continue filling board recursively
        if (fillBoardRecurseive(board)) return true;
      }

      // reset values to backtrack
      const cell = board[rowTgt][colTgt]
      cell.value = null;
      cell.locked = false;
      cell.userInputted = false;
    }
    return false;
  }

  fillBoardRecurseive(workingBoard)
  return workingBoard;
}
