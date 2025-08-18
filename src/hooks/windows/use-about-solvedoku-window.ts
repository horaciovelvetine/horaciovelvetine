import { useState } from 'react';
import type { ManagedWindow } from '../../types';

/**
 * Custom hook for managing the "About Solvedoku" window state and functionality
 *
 * Provides window management for the about page that displays information about the Solvedoku
 * application and its features. This window inherits navigation bar menu items from its parent
 * window to maintain consistent navigation context while providing its own independent window
 * state management including visibility, z-index positioning, and window identification.
 *
 * @param {ManagedWindow} parentWindow - The parent window object whose navigation menu items will be inherited
 * @returns {ManagedWindow} Complete window state object containing:
 *   - Basic window management (show/hide, z-index, title, etc.)
 *   - Inherited navigation bar menu configuration from parent window
 *   - Window identification and display properties
 */
export function useAboutSolvedokuWindow(
	parentWindow: ManagedWindow
): ManagedWindow {
	const windowID = 'about-solvedoku-window';
	const title = 'About Solvedoku';
	const [zIndex, setZIndex] = useState('0');
	const [isShown, setIsShown] = useState(false);

	return {
		id: windowID,
		title,
		zIndex,
		setZIndex,
		isShown,
		setIsShown,
		navBarMenuItems: parentWindow.navBarMenuItems,
	};
}
