import type { Dispatch, SetStateAction } from 'react';
import type { Dimensions } from './dimensions';
import type { NavBarMenuParent } from './nav-bar-menu-parent';
import type { Position } from './position';
import type { WindowIDs } from './window-ids';
import type { WindowRect } from './window-rect';

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
 * @property {number} stackOrder - Numeric stacking order used to keep focused windows on top
 * @property {Dispatch<SetStateAction<number>>} setStackOrder - Function to update the stacking order
 * @property {Position} preferredPosition - Preferred first-open position before collision-aware placement
 * @property {Position} position - Current x/y position of the window in desktop coordinates
 * @property {Dispatch<SetStateAction<Position>>} setPosition - Function to update the window position
 * @property {Dimensions} defaultSize - Default size used when first opening the window
 * @property {Dimensions} size - Current rendered size of the window
 * @property {Dispatch<SetStateAction<Dimensions>>} setSize - Function to update the window size
 * @property {Dimensions} minSize - Smallest allowed window size
 * @property {Dimensions | undefined} maxSize - Largest allowed window size, if constrained
 * @property {WindowRect | null} restoreRect - Stored rect used when restoring from zoomed state
 * @property {Dispatch<SetStateAction<WindowRect | null>>} setRestoreRect - Function to update the restore rect
 * @property {(openWindowByID: (windowID: WindowIDs) => void) => NavBarMenuParent[]} navBarMenuItems - Function that returns navigation menu items for this window
 * @property {boolean} isShown - Boolean flag indicating if the window is currently visible
 * @property {Dispatch<SetStateAction<boolean>>} setIsShown - Function to toggle window visibility
 * @property {boolean} isFocused - Boolean flag indicating if the window is the focused window
 * @property {Dispatch<SetStateAction<boolean>>} setIsFocused - Function to toggle window focus
 * @property {boolean} isMinimized - Flag indicating whether the window is minimized into the dock state
 * @property {Dispatch<SetStateAction<boolean>>} setIsMinimized - Function to toggle minimized state
 * @property {boolean} isZoomed - Flag indicating whether the window is in its zoomed/maximized state
 * @property {Dispatch<SetStateAction<boolean>>} setIsZoomed - Function to toggle zoom state
 * @property {boolean} hasBeenPlaced - Tracks whether first-open placement has already been resolved
 * @property {Dispatch<SetStateAction<boolean>>} setHasBeenPlaced - Function to toggle placement tracking
 * @property {() => void;} closeWindowCallback - cleanup function for the window state called when a window is closed
 */
export interface ManagedWindow {
	id: WindowIDs;
	title: string;
	stackOrder: number;
	setStackOrder: Dispatch<SetStateAction<number>>;
	preferredPosition: Position;
	position: Position;
	setPosition: Dispatch<SetStateAction<Position>>;
	defaultSize: Dimensions;
	size: Dimensions;
	setSize: Dispatch<SetStateAction<Dimensions>>;
	minSize: Dimensions;
	maxSize?: Dimensions;
	restoreRect: WindowRect | null;
	setRestoreRect: Dispatch<SetStateAction<WindowRect | null>>;
	navBarMenuItems: (
		openWindowByID: (windowID: WindowIDs) => void
	) => NavBarMenuParent[];
	isShown: boolean;
	setIsShown: Dispatch<SetStateAction<boolean>>;
	isFocused: boolean;
	setIsFocused: Dispatch<SetStateAction<boolean>>;
	isMinimized: boolean;
	setIsMinimized: Dispatch<SetStateAction<boolean>>;
	isZoomed: boolean;
	setIsZoomed: Dispatch<SetStateAction<boolean>>;
	hasBeenPlaced: boolean;
	setHasBeenPlaced: Dispatch<SetStateAction<boolean>>;
	closeWindowCallback: () => void;
}
