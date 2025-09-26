import { useCallback, useMemo } from 'react';
import { HomeIcon } from '../../assets';
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
	useWritingWindow,
	useAboutWindow,
} from '../windows';
import { GITHUB, LINKEDIN } from '../../consts/urls';

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
	//? INITIALIZE ALL WINDOWS
	// SITE WINDOWS
	const mainLandingWindow = useMainLandingWindow();
	const aboutWindow = useAboutWindow();
	const aboutThisSiteWindow = useAboutThisSiteWindow();
	// SOLVEDOKU WINDOWS
	const solvedokuWindow = useSolvedokuWindow();
	// RPS WINDOWS
	const rpsSketchWindow = useRPSSketchWindow();
	const writingWindow = useWritingWindow();

	const ALL_WINDOWS: ManagedWindow[] = useMemo(
		() => [
			mainLandingWindow,
			aboutThisSiteWindow,
			solvedokuWindow,
			rpsSketchWindow,
			writingWindow,
			aboutWindow,
		],
		[
			aboutThisSiteWindow,
			mainLandingWindow,
			solvedokuWindow,
			rpsSketchWindow,
			writingWindow,
			aboutWindow,
		]
	);

	/**
	 * The current {@see ManagedWindow } which the user is currently (clicked) focused on.
	 */
	const focusedWindow = useMemo(() => {
		return ALL_WINDOWS.find(window => window.isFocused) ?? mainLandingWindow;
	}, [ALL_WINDOWS, mainLandingWindow]);

	/**
	 * Focuses a window by its ID, changes { @see SiteNavigationMenuBar } to display relevant menu-ing and adjust its Z-Index state to be visible on top of the other windows. zIndex is '1' for the window on top, and 0 (sorted by the order rendered in {@see MainDevsktopLayout }) for all other visibleWindows.
	 * @param windowID - The unique ID of the window to focus
	 * @returns void
	 */
	const focusWindowByID = useCallback(
		(windowID: WindowIDs): void => {
			const windowToFocus = ALL_WINDOWS.find(window => window.id === windowID);
			if (!windowToFocus) return;

			windowToFocus.setIsFocused(true);
			windowToFocus.setZIndex('1');
			//? Send all other windows to back
			ALL_WINDOWS.filter(window => window.id !== windowToFocus.id).forEach(
				window => {
					window.setIsFocused(false);
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
					window.setIsFocused(false);
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
				if (window.id === windowID) {
					window.setIsFocused(true);
					window.setIsShown(true);
				}
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
			DisplayIcon: HomeIcon,
			dropdownOptions: [
				{
					key: 'landing-page',
					titleText: 'Home',
					hoverExplainer: 'Open the Home page window',
					onClickAction: () => {
						openWindowByID('main-landing-window');
					},
					displayMenuBreakAfter: true,
				},
				{
					key: 'about-this-site',
					titleText: 'About This Site',
					hoverExplainer:
						'Open a quick explainer about this site and how it was built',
					onClickAction: () => {
						openWindowByID('about-this-site-window');
					},
					displayMenuBreakAfter: true,
				},
				{
					key: 'github-socials',
					titleText: 'Github',
					hoverExplainer: 'Find me on Github',
					displaySectionHeader: 'Socials',
					onClickAction: () => {
						window.open(GITHUB, '_blank');
					},
				},
				{
					key: 'linkedin-socials',
					hoverExplainer: 'Find me on LinkedIn',
					titleText: 'LinkedIn',
					onClickAction: () => {
						window.open(LINKEDIN, '_blank');
					},
				},
			],
		}),
		[openWindowByID]
	);

	const navBarMenuItems: NavBarMenuParent[] =
		useMemo((): NavBarMenuParent[] => {
			return [siteMenu, ...focusedWindow.navBarMenuItems(openWindowByID)];
		}, [siteMenu, focusedWindow, openWindowByID]);

	return {
		mainLandingWindow,
		aboutThisSiteWindow,
		solvedokuWindow,
		rpsSketchWindow,
		writingWindow,
		aboutWindow,
		focusedWindow,
		navBarMenuItems,
		focusWindowByID,
		closeWindowByID,
		openWindowByID,
	};
}
