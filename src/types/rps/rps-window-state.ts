import type { Dispatch, SetStateAction } from 'react';
import type { ManagedWindow } from '../site/managed-window';
import type { RPSSketchState } from './rps-sketch-state';

/**
 * Interface representing the complete window state for the Rock Paper Scissors sketch application
 *
 * Combines window management capabilities with sketch-specific state to provide a comprehensive
 * window controller for the RPS game. Extends both ManagedWindow for basic window operations
 * and RPSSketchState for game-specific functionality, while adding menu management for
 * settings and about dialogs.
 *
 * @interface
 * @extends ManagedWindow - Provides basic window management functionality (focus, close, resize, etc.)
 * @extends RPSSketchState - Provides Rock Paper Scissors game state and controls
 * @property {boolean} showAboutMenu - Flag indicating whether the about menu dialog is currently visible
 * @property {Dispatch<SetStateAction<boolean>>} setShowAboutMenu - Function to toggle about menu visibility
 * @property {boolean} showSettingsMenu - Flag indicating whether the settings menu dialog is currently visible
 * @property {Dispatch<SetStateAction<boolean>>} setShowSettingsMenu - Function to toggle settings menu visibility
 * @property {boolean} showGameMenu - Flag indicating whether the game menu dialog is currently visible
 * @property {Dispatch<SetStateAction<boolean>>} setShowGameMenu - Function to toggle the game menu visibility
 */

export interface RPSWindowState extends ManagedWindow, RPSSketchState {
	/**
	 * Flag indicating whether the about menu dialog is currently visible
	 */
	showAboutMenu: boolean;
	/**
	 * Setter to toggle the about menu visibility
	 */
	setShowAboutMenu: Dispatch<SetStateAction<boolean>>;
	/**
	 * Flag indicating whether the about settings menu dialog is currently visible
	 */
	showSettingsMenu: boolean;
	/**
	 * Setter to toggle the settings menu visibility
	 */
	setShowSettingsMenu: Dispatch<SetStateAction<boolean>>;

	/**
	 * Flag indicating whether the game menu dialog is currently visible
	 */
	showGameMenu: boolean;
	/**
	 * Setter to toggle the game menu visibility
	 */
	setShowGameMenu: Dispatch<SetStateAction<boolean>>;
}
