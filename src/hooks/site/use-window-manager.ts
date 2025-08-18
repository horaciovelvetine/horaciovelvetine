import { useCallback, useMemo, useState } from 'react';
import { CodeBlockIcon } from '../../assets';
import type {
	WindowManager,
	ManagedWindow,
	NavBarMenuParent,
	WindowIDs,
} from '../../types';

import {
	useMainLandingWindow,
	useSolvedokuWindow,
	useAboutThisSiteWindow,
	useRPSSketchWindow,
} from '../windows';

/**
 * Custom hook that manages window state and focus for the Devsktop application
 *
 * Handles:
 * - Window initialization for all application windows (site, Solvedoku, RPS)
 * - Window focus management and z-index ordering
 * - Focused window state tracking
 * - Window switching and navigation
 *
 * @returns {WindowManager} Object containing:
 *   - focusedWindow: Currently focused window object
 *   - focusedWindowID: ID of the currently focused window
 *   - setFocusedWindowID: Function to change the focused window
 *   - ALL_WINDOWS: Array of all managed window objects
 *   - Window control functions and state
 */
export function useWindowManager(): WindowManager {
	const [focusedWindowID, setFocusedWindowID] = useState<WindowIDs>(
		'main-landing-window'
	);

	//? INITIALIZE ALL WINDOWS
	// SITE WINDOWS
	const devsktopWindow = useMainLandingWindow(focusedWindowID);
	const aboutThisSiteWindow = useAboutThisSiteWindow(
		devsktopWindow,
		focusedWindowID
	);
	// SOLVEDOKU WINDOWS
	const solvedokuWindow = useSolvedokuWindow(focusedWindowID);
	// RPS WINDOWS
	const rpsSketchWindow = useRPSSketchWindow(focusedWindowID);

	const ALL_WINDOWS: ManagedWindow[] = useMemo(
		() => [
			devsktopWindow,
			aboutThisSiteWindow,
			solvedokuWindow,
			rpsSketchWindow,
		],
		[aboutThisSiteWindow, devsktopWindow, solvedokuWindow, rpsSketchWindow]
	);

	/**
	 * The current {@see ManagedWindow } which the user is currently (clicked) focused on.
	 */
	const focusedWindow = useMemo(() => {
		return (
			ALL_WINDOWS.find(window => window.id === focusedWindowID) ??
			devsktopWindow
		);
	}, [ALL_WINDOWS, focusedWindowID, devsktopWindow]);

	/**
	 * Focuses a window by its ID, changes { @see SiteNavigationMenuBar } to display relevant menu-ing and adjust its Z-Index state to be visible on top of the other windows. zIndex is '1' for the window on top, and 0 (sorted by the order rendered in {@see MainDevsktopLayout }) for all other visibleWindows.
	 * @param windowID - The unique ID of the window to focus
	 * @returns void
	 */
	const focusWindowByID = useCallback(
		(windowID: WindowIDs): void => {
			const windowToFocus = ALL_WINDOWS.find(window => window.id === windowID);
			if (!windowToFocus) return;

			setFocusedWindowID(windowID);
			windowToFocus.setZIndex('1');
			//? Send all other windows to back
			ALL_WINDOWS.filter(window => window.id !== windowToFocus.id).forEach(
				window => {
					window.setZIndex('0');
				}
			);
		},
		[ALL_WINDOWS]
	);

	/**
	 * Closes a window by its ID, removing it from the visible windows array
	 * @param windowID - The unique ID of the window to close
	 * @returns void
	 */
	const closeWindowByID = useCallback(
		(id: WindowIDs): void => {
			ALL_WINDOWS.forEach(window => {
				if (window.id === id) {
					window.setIsShown(false);
					window.closeWindowCallback(); // clean up window state...
				}
			});
		},
		[ALL_WINDOWS]
	);

	/**
	 * Opens a window by its ID, adding it to the visible windows array and focusing it
	 * @param windowID - The unique ID of the window to open
	 * @returns void
	 */
	const openWindowByID = useCallback(
		(windowID: WindowIDs): void => {
			focusWindowByID(windowID);
			ALL_WINDOWS.forEach(window => {
				if (window.id === windowID) window.setIsShown(true);
			});
		},
		[focusWindowByID, ALL_WINDOWS]
	);

	/**
	 * The navBarMenu which is included with every menu as the first icon in the upper left hand of the 'devsktop'
	 */
	const siteMenu: NavBarMenuParent = useMemo(
		() => ({
			key: 'site-menu',
			DisplayIcon: CodeBlockIcon,
			dropdownOptions: [
				{
					key: 'landing-page',
					titleText: 'Home',
					isDisabled:
						devsktopWindow.isShown && focusedWindowID === 'main-landing-window',
					onClickAction: () => {
						openWindowByID('main-landing-window');
					},
				},
				{
					key: 'about-this-site',
					titleText: 'About This Site',
					isDisabled:
						aboutThisSiteWindow.isShown &&
						focusedWindowID === 'about-this-site-window',
					onClickAction: () => {
						openWindowByID('about-this-site-window');
					},
					displayMenuBreakAfter: true,
				},
				{
					key: 'solvedoku-project',
					titleText: 'Solvedoku',
					isDisabled:
						solvedokuWindow.isShown && focusedWindowID === 'solvedoku-window',
					onClickAction: () => {
						openWindowByID('solvedoku-window');
					},
					displaySectionHeader: 'Projects',
				},
				{
					key: 'rps-project',
					titleText: 'Rock, Paper, Scissors',
					isDisabled:
						rpsSketchWindow.isShown && focusedWindowID === 'rps-sketch-window',
					onClickAction: () => {
						openWindowByID('rps-sketch-window');
					},
					displaySectionHeader: 'Projects',
				},
			],
		}),
		[
			openWindowByID,
			focusedWindowID,
			devsktopWindow.isShown,
			aboutThisSiteWindow.isShown,
			solvedokuWindow.isShown,
			rpsSketchWindow.isShown,
		]
	);

	const navBarMenuItems: NavBarMenuParent[] =
		useMemo((): NavBarMenuParent[] => {
			return [siteMenu, ...focusedWindow.navBarMenuItems(openWindowByID)];
		}, [siteMenu, focusedWindow, openWindowByID]);

	return {
		devsktopWindow,
		aboutThisSiteWindow,
		solvedokuWindow,
		rpsSketchWindow,
		focusedWindow,
		navBarMenuItems,
		focusWindowByID,
		closeWindowByID,
		openWindowByID,
	};
}
