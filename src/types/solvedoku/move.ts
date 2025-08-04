/**
 * Used to keep track of Solvedoku game moves to allow undo history & CMD+Z undo feature.
 */
export interface Move {
	cellID: string;
	newValue: string | null;
	previouslyLocked: boolean;
	previouslyUserInputted: boolean;
	previousValue: string | null;
}
