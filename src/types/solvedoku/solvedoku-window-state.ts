import type { ManagedWindow } from '../site/managed-window';
import type { SolvedokuGameState } from './solvedoku-game-state';
import type { Dispatch, SetStateAction } from 'react';
import type { PuzzleDifficulty } from './puzzle-difficulty';

/**
 * Interface representing the complete window state for a Solvedoku game window
 *
 * This interface extends both ManagedWindow and SolvedokuGameState to create a comprehensive
 * window management system that contains and manages a Solvedoku game instance. It combines
 * window-level functionality (positioning, visibility, focus) with game-specific state
 * (board state, difficulty, solving logic) and adds mobile menu management capabilities.
 *
 * @interface
 * @extends {ManagedWindow} - Provides window management functionality (position, size, focus, etc.)
 * @extends {SolvedokuGameState} - Provides complete Solvedoku game state and functionality
 * @property {boolean} showSettingsMenu - Controls visibility of the mobile settings menu overlay
 * @property {Dispatch<SetStateAction<boolean>>} setShowSettingsMenu - React state setter for settings menu visibility
 * @property {boolean} showAboutMenu - Controls visibility of the mobile about/info menu overlay
 * @property {Dispatch<SetStateAction<boolean>>} setShowAboutMenu - React state setter for about menu visibility
 * @property {boolean} showGameMenu - Controls visibility of the mobile game actions menu overlay
 * @property {Dispatch<SetStateAction<boolean>>} setShowGameMenu - React state setter for game menu visibility
 * @property {PuzzleDifficulty} currentPuzzleDifficultyDisplay - The difficulty level displayed to the user for the current puzzle
 * @property {Dispatch<SetStateAction<PuzzleDifficulty>>} setCurrentPuzzleDifficultyDisplay - React state setter for updating the displayed difficulty level
 */

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
