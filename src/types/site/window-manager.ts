import type { RPSWindowState } from '../rps/rps-window-state';
import type { SolvedokuWindowState } from '../solvedoku/solvedoku-window-state';
import type { ManagedWindow } from './managed-window';
import type { NavBarMenuParent } from './nav-bar-menu-parent';
import type { WindowIDs } from './window-ids';

/**
 * Interface representing the central window management system for the desktop environment
 *
 * Provides comprehensive window management functionality including state tracking,
 * navigation, and lifecycle management for all application windows. Acts as the
 * primary controller for the desktop windowing system, handling window focus,
 * opening, closing, and menu navigation.
 *
 * @interface
 * @property {ManagedWindow} devsktopWindow - Main desktop/landing window state and controls
 * @property {ManagedWindow} aboutThisSiteWindow - About page window for site information
 * @property {SolvedokuWindowState} solvedokuWindow - Solvedoku game window with extended game state
 * @property {ManagedWindow} aboutSolvedokuWindow - About page window for Solvedoku information
 * @property {RPSWindowState} rpsSketchWindow - Rock Paper Scissors game window with extended game state
 * @property {ManagedWindow} aboutRPSSketchWindow - About page window for RPS game information
 * @property {ManagedWindow} focusedWindow - Reference to the currently focused/active window
 * @property {NavBarMenuParent[]} navBarMenuItems - Navigation menu items for the currently focused window
 * @property {function} focusWindowByID - Function to bring a specific window to focus by its ID
 * @property {function} closeWindowByID - Function to close a specific window by its ID
 * @property {function} openWindowByID - Function to open a specific window by its ID
 */
export interface WindowManager {
	// WINDOWS
	devsktopWindow: ManagedWindow;
	aboutThisSiteWindow: ManagedWindow;
	solvedokuWindow: SolvedokuWindowState;
	rpsSketchWindow: RPSWindowState;
	// WINDOW MANAGEMENT FUNC
	focusedWindow: ManagedWindow;
	navBarMenuItems: NavBarMenuParent[];
	focusWindowByID: (windowID: WindowIDs) => void;
	closeWindowByID: (windowID: WindowIDs) => void;
	openWindowByID: (windowID: WindowIDs) => void;
}
