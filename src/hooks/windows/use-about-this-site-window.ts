import { useCallback, useState } from 'react';
import type { ManagedWindow } from '../../types';

/**
 * Custom hook for managing the "About This Site" window state and functionality
 *
 * Provides window management for the about page that displays information about the site.
 * This window inherits navigation bar menu items from its parent window to maintain
 * consistent navigation context while providing its own independent window state
 * management including visibility, z-index positioning, and window identification.
 *
 * @param {ManagedWindow} parentWindow - The parent window object whose navigation menu items will be inherited
 * @returns {ManagedWindow} Complete window state object containing:
 *   - Basic window management (show/hide, z-index, title, etc.)
 *   - Inherited navigation bar menu configuration from parent window
 *   - Window identification and display properties
 */
export function useAboutThisSiteWindow(
	parentWindow: ManagedWindow,
	focusedWindowID: string
): ManagedWindow {
	const windowID = 'about-this-site-window';
	const title = 'About This Site';
	const [zIndex, setZIndex] = useState('0');
	const [isShown, setIsShown] = useState(() => {
		return windowID === focusedWindowID;
	});

	const closeWindowCallback = useCallback(() => {
		// no cleanup needed
	}, []);

	return {
		id: windowID,
		title,
		zIndex,
		setZIndex,
		isShown,
		setIsShown,
		closeWindowCallback,
		navBarMenuItems: parentWindow.navBarMenuItems,
	};
}
