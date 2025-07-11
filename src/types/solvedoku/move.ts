/**
 * Used to keep track of Solvedoku game moves to allow undo history & CMD+Z undo feature.
 */
export interface Move {
	cellID: string;
	previousValue: string | null;
	newValue: string | null;
}
