import type { Dispatch, SetStateAction } from 'react';
import type { NavBarMenuParent } from './nav-bar-menu-parent';
import type { WindowIDs } from './window-ids';

/**
 * Interface representing a managed window in the application
 *
 * Provides comprehensive window management functionality including visibility control,
 * z-index layering, navigation menu integration, and state management. Used throughout
 * the application to maintain consistent window behavior and UI interactions.
 *
 * @interface
 * @property {WindowIDs} id - Unique identifier for the window from the WindowIDs enum
 * @property {string} title - Display title for the window, shown in title bars and menus
 * @property {string} zIndex - CSS z-index value controlling window stacking order
 * @property {Dispatch<SetStateAction<string>>} setZIndex - Function to update the window's z-index
 * @property {(openWindowByID: (windowID: WindowIDs) => void) => NavBarMenuParent[]} navBarMenuItems - Function that returns navigation menu items for this window
 * @property {boolean} isShown - Boolean flag indicating if the window is currently visible
 * @property {Dispatch<SetStateAction<boolean>>} setIsShown - Function to toggle window visibility
 * @property {() => void;} closeWindowCallback - cleanup function for the window state called when a window is closed
 */
export interface ManagedWindow {
	id: WindowIDs;
	title: string;
	zIndex: string;
	setZIndex: Dispatch<SetStateAction<string>>;
	navBarMenuItems: (
		openWindowByID: (windowID: WindowIDs) => void
	) => NavBarMenuParent[];
	isShown: boolean;
	setIsShown: Dispatch<SetStateAction<boolean>>;
	closeWindowCallback: () => void;
}
