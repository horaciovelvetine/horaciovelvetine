import type { ManagedWindow } from '../site/managed-window';
import type { SolvedokuGameState } from './solvedoku-game-state';
import type { Dispatch, SetStateAction } from 'react';
import type { PuzzleDifficulty } from './puzzle-difficulty';

export interface SolvedokuWindowState
	extends ManagedWindow,
	SolvedokuGameState {
	/**
	 * Interface that extends both ManagedWindow and SolvedokuGameState to create a window
	 * that contains and manages a Solvedoku game instance.
	 */

	// Mobile menu state
	showSettingsMenu: boolean;
	setShowSettingsMenu: Dispatch<SetStateAction<boolean>>;
	showAboutMenu: boolean;
	setShowAboutMenu: Dispatch<SetStateAction<boolean>>;
	showGameMenu: boolean;
	setShowGameMenu: Dispatch<SetStateAction<boolean>>;
	currentPuzzleDifficultyDisplay: PuzzleDifficulty;
	setCurrentPuzzleDifficultyDisplay: Dispatch<SetStateAction<PuzzleDifficulty>>;
}
