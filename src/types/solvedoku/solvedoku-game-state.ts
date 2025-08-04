import type { Dispatch, SetStateAction } from "react";
import type { PuzzleDifficulty } from "./puzzle-difficulty";
import type { SolvedokuGameBoard } from "./solvedoku-game-board";

export interface SolvedokuGameState {
  /**
 * Game Board state displayed on-screen fot the client
 */
  gameBoard: SolvedokuGameBoard;

  setGameBoard: Dispatch<SetStateAction<SolvedokuGameBoard>>;

  /**
   * Memoized boolean indicating if the game board is completely empty
   * 
   * The function:
   * 1. Checks if there is a cached result that can be used
   * 2. If no cache hit, checks if every cell in the board has a null value
   * 3. Caches the new result before returning
   * 
   * @returns {boolean} True if all cells are empty (null), false if any cell has a value
   */
  gameBoardEmpty: boolean;

  /**
   * Memoized boolean indicating if the current state of gameBoard is a valid Sudoku puzzle
   * 
   * The function:
   * 1. Checks if there is a cached result that can be used
   * 2. If no cache hit, validates that:
   *    - Each row contains no duplicate numbers
   *    - Each column contains no duplicate numbers  
   *    - Each 3x3 box contains no duplicate numbers
   * 3. Caches the new result before returning
   * 
   * @returns {boolean} True if the current board state is valid, false if any duplicates are found
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
   * Clears the game board by unlocking all cells and setting all values to null
   * 
   * The function:
   * 1. Resets the solution step counter to 0
   * 2. Creates a new empty game board with all cells unlocked
   * 3. Clears the move history
   * 4. Clears any cached validation results
   */
  clearGameBoard: () => void;

  /**
   * Resets the game board by undoing all moves in history or creating a new empty board
   *
   * If there are moves in history:
   * 1. Iterates through move history in reverse order and un-does each move
   * 2. Clears the move history
   *
   * If no moves in history:
   * - Creates a new empty game board
   */
  resetGameStepwise: () => void;

  /**
   * Helper to check if the currently selected cell contains a value
   * 
   * The function:
   * 1. Returns false if no cell is selected
   * 2. Parses the selected cell ID to get row/column indices
   * 3. Checks if the cell at those indices has a non-null value
   * 
   * @returns {boolean} True if the selected cell contains a value, false if empty or no selection
   */
  selectedCellHasValue: boolean;

  /**
   * Updates the value of a cell in the game board and records the move in history (for undo functionality)
   * @param cellID - The ID of the cell to update in "row-col" format - expects 1 based ID
   * @param value - The new value to set (string number 1-9 or null to clear)
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
   * Reverts the last move made on the game board
   * Retrieves the last move from moveHistory, restores the previous value to that cell,
   * and removes the move from history. Does nothing if moveHistory is empty.
   */
  undo: () => void;

  /**
   * Memoized boolean indicating if there are any moves that can be undone
   */
  canUndo: boolean;

  /**
   * Generates a new random Sudoku puzzle with the specified difficulty level
   * @param difficulty - The desired difficulty level ('easy', 'medium', or 'hard')
   *
   * The function:
   * 1. Creates a completely filled valid Sudoku board
   * 2. Removes cells based on the difficulty level to create the puzzle
   * 3. Resets the puzzle status and move history
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
   * Memoized boolean indicating if the current game board represents a valid completed solution
   * 
   * The function:
   * 1. Returns false if the current board state is not valid (has duplicates)
   * 2. Checks if every cell contains a non-null value
   * 
   * @returns {boolean} True if board is both valid and complete, false otherwise
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

  /**
   * Toggles between showing the stored solution or the current game state
   * @param showSolution - Boolean flag indicating whether to show the solution (true) or hide it (false)
   * 
   * The function:
   * 1. Checks if a solution board exists, returns early if not
   * 2. Updates the game board to either show:
   *    - The complete solution while preserving locked cell status
   *    - The current game state with only locked cells visible
   * 3. Resets move history and solution tracking when showing solution
   */
  toggleShowStoredPuzzleSolution: (showSolution: boolean) => void;
}