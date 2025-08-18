/**
 * Interface representing a single move/action in a Solvedoku game for undo functionality
 * 
 * Tracks complete state changes when a cell value is modified, enabling full restoration
 * of previous cell states when undoing moves. Used by the game's undo history system
 * to support CMD+Z/Ctrl+Z undo operations.
 * 
 * @interface
 * @property {string} cellID - Unique identifier for the cell that was modified
 * @property {string | null} newValue - The new value placed in the cell (1-9) or null if cleared
 * @property {boolean} previouslyLocked - Whether the cell was locked before this move
 * @property {boolean} previouslyUserInputted - Whether the cell was user-inputted before this move
 * @property {string | null} previousValue - The cell's value before this move (1-9) or null if empty
 */
export interface Move {
	cellID: string;
	newValue: string | null;
	previouslyLocked: boolean;
	previouslyUserInputted: boolean;
	previousValue: string | null;
}
