import { useState } from 'react';
import type { ManagedWindow, SiteSettings } from '../../types';
import { useDevsktopLandingWindow } from './use-devsktop-landing-window';
import { useSolvedokuWindow } from '../solvedoku/use-solvedoku-window';

export function useWindowManager(props: SiteSettings) {
	const devsktopWindow = useDevsktopLandingWindow(props);
	const solvedokuWindow = useSolvedokuWindow(props);

	const ALL_WINDOWS: ManagedWindow[] = [devsktopWindow, solvedokuWindow];

	//? default state sets up which windows will be visible when page is loaded
	const [focusedWindow, setFocusedWindow] = useState<ManagedWindow>(devsktopWindow);
	const [visibleWindows, setVisibleWindows] = useState<ManagedWindow[]>([solvedokuWindow]);

	/**
	 * Focuses a window by its ID, changes { @see SiteNavigationMenuBar } to display relevant menu-ing and adjust its Z-Index state to be visible on top of the other windows. zIndex is '1' for the window on top, and 0 (sorted by the order rendered in {@see MainDevsktopLayout }) for all other visibleWindows.
	 * @param windowID - The unique ID of the window to focus
	 * @returns void
	 */
	function focusWindowByID(windowID: string): void {
		// Find the window to focus by ID
		const windowToFocus = ALL_WINDOWS.find(window => window.id === windowID) ?? devsktopWindow;
		// Set focused & update Z-Index to top
		setFocusedWindow(windowToFocus);
		windowToFocus.setZIndex('1');
		// Send all other windows to back
		ALL_WINDOWS.filter(window => window.id !== windowToFocus.id).forEach(window => {
			window.setZIndex('0');
		});
	}

	/**
	 * Closes a window by its ID, removing it from the visible windows array
	 * @param windowID - The unique ID of the window to close
	 * @returns void
	 */
	function closeWindowByID(windowID: string): void {
		setVisibleWindows(prevWindows => prevWindows.filter(window => window.id !== windowID));
	}

	/**
	 * Opens a window by its ID, adding it to the visible windows array
	 * @param windowID - The unique ID of the window to open
	 * @returns void
	 */
	function openWindowByID(windowID: string): void {
		const windowToOpen = ALL_WINDOWS.find(window => window.id === windowID)
		if (windowToOpen) {
			setVisibleWindows(prev => [...prev, windowToOpen]);
		}
	}

	return { devsktopWindow, solvedokuWindow, focusedWindow, focusWindowByID, visibleWindows, closeWindowByID, openWindowByID };
}
