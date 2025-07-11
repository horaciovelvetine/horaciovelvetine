import type { Dispatch, SetStateAction } from 'react';
import type { SolvedokuGameBoard } from './solvedoku-game-board';
import type { PuzzleDifficulty } from './puzzle-difficulty';

export interface SolvedokuGameState {
  /**
   * Game Board state displayed on-screen fot the client
   */
  gameBoard: SolvedokuGameBoard;

  setGameBoard: Dispatch<SetStateAction<SolvedokuGameBoard>>;

  /**
   * Memoized boolean if there are any values in the gameBoard
   */
  gameBoardEmpty: boolean;

  /**
   * Memoized boolean if the current state of gameBoard is a valid puzzle
   */
  isValidGameBoard: boolean;

  /**
   * { @see PuzzleDifficulty } which determines the difficulty of any generated puzzle
   */
  selectedDifficulty: PuzzleDifficulty;

  /**
   * Setter for { @see PuzzleDifficulty } state
   */
  setSelectedDifficulty: Dispatch<SetStateAction<PuzzleDifficulty>>;

  /**
   * Steps the game all the back to clear the undo history first, then clears all the values in the puzzle
   */
  resetGameStepwise: () => void;

  /**
   * Helper to check if the currently selected cell contains a value
   * @returns boolean indicating if the selected cell has a value
   */
  selectedCellHasValue: boolean;

  /**
   * Helper to set the value of the provided cell 
   * 
   * @param cellID - 1 based `${row-column}` ID for the target cell to be updated
   * @param value - new value to set the target cell to
   * @returns void
   */
  updateCellValue: (cellID: string, value: string | null) => void;

  /**
   * The ID for whichever cell is currently selected or null if none are selected. 
   * { @var selectedCellID } is stored in 1 based in the format of `${row-column}`
   */
  selectedCellID: string | null;

  /**
   * Setter for selectedCellID state
   */
  setSelectedCellID: Dispatch<SetStateAction<string | null>>;

  /**
   * Helper to undo the last move made, reverting the affected cell to its previous value
   */
  undo: () => void;

  /**
   * Memoized boolean indicating if there are any moves that can be undone
   */
  canUndo: boolean;

  /**
   * Generates a new random Sudoku puzzle with the specified difficulty
   * @param difficulty - The difficulty level to generate the puzzle at
   */
  generateRandomPuzzle: () => void;

  /**
   * State determines if the { @see useSolutionFinder } algorithim should be running or not
   */
  isFindingSolution: boolean;

  /**
   * Setter for the isFindingSolution state
   */
  setIsFindingSolution: Dispatch<SetStateAction<boolean>>;

  /**
   * State which determines the time in milliseconds waited between each call to the algorithim which solves the current puzzle
   */
  solutionFinderInterval: number

  /**
   * Setter for the solutionFinderInterval
   */
  setSolutionFinderInterval: Dispatch<SetStateAction<number>>;

  /**
   * The completed solution board created during the generate process
   */
  solutionBoard: SolvedokuGameBoard | null;

  /**
   * Memoized boolean to indicate the board is full and the solution is valid...
   */
  isValidSolution: boolean;

  /**
   * State to count the number of steps taken to arrive at a solution (number of calls to the { @see findCellSolution() method })
   */
  solutionStepCounter: number;

  /**
   * Setter to update solutionStepCounter state.
   */
  setSolutionStepCounter: Dispatch<SetStateAction<number>>;
}
