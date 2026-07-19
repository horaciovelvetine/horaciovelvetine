import { useCallback, useEffect, useMemo, useRef } from 'react';
import { HomeIcon } from '../../assets';
import type {
	WindowManager,
	ManagedWindow,
	NavBarMenuParent,
	WindowIDs,
} from '../../types';
import {
	clampWindowPosition,
	clampWindowSize,
	createWindowRect,
	getDesktopBounds,
	getZoomedWindowRect,
} from '../../functions';

import {
	useMainLandingWindow,
	useSolvedokuWindow,
	useAboutThisSiteWindow,
	useRPSSketchWindow,
	useWritingWindow,
	useAboutWindow,
	useContactWindow,
} from '../windows';
import { GITHUB, LINKEDIN } from '../../consts/urls';
import { useClientDimensionsUpdates } from './use-client-dimensions-updates';
import { resolveInitialWindowPlacement } from '../../functions/site/window-layout';

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
	const clientDimensions = useClientDimensionsUpdates();
	const desktopBounds = useMemo(
		() => getDesktopBounds(clientDimensions),
		[clientDimensions]
	);
	const nextStackOrderRef = useRef(16);

	// SITE WINDOWS
	const mainLandingWindow = useMainLandingWindow();
	const aboutWindow = useAboutWindow();
	const aboutThisSiteWindow = useAboutThisSiteWindow();
	const contactWindow = useContactWindow();
	// SOLVEDOKU
	const solvedokuWindow = useSolvedokuWindow();
	// ROCK, PAPER, SCISSORS
	const rpsSketchWindow = useRPSSketchWindow();
	// WRITING
	const writingWindow = useWritingWindow();

	const ALL_WINDOWS: ManagedWindow[] = useMemo(
		() => [
			contactWindow,
			mainLandingWindow,
			aboutThisSiteWindow,
			solvedokuWindow,
			rpsSketchWindow,
			writingWindow,
			aboutWindow,
		],
		[
			contactWindow,
			mainLandingWindow,
			aboutThisSiteWindow,
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
		return (
			ALL_WINDOWS.filter(window => window.isShown && !window.isMinimized).sort(
				(a, b) => b.stackOrder - a.stackOrder
			)[0] ?? mainLandingWindow
		);
	}, [ALL_WINDOWS, mainLandingWindow]);

	const focusTopVisibleWindow = useCallback(
		(excludedWindowID?: WindowIDs) => {
			const nextWindow =
				ALL_WINDOWS.filter(
					window =>
						window.id !== excludedWindowID &&
						window.isShown &&
						!window.isMinimized
				).sort((a, b) => b.stackOrder - a.stackOrder)[0] ?? null;

			ALL_WINDOWS.forEach(window => {
				window.setIsFocused(nextWindow?.id === window.id);
			});
		},
		[ALL_WINDOWS]
	);

	/**
	 * Focuses a window by its ID, changes { @see SiteNavigationMenuBar } to display relevant menu-ing and adjust its Z-Index state to be visible on top of the other windows. zIndex is '1' for the window on top, and 0 (sorted by the order rendered in {@see MainDevsktopLayout }) for all other visibleWindows.
	 * @param windowID - The unique ID of the window to focus
	 * @returns void
	 */
	const focusWindowByID = useCallback(
		(windowID: WindowIDs): void => {
			const windowToFocus = ALL_WINDOWS.find(window => window.id === windowID);
			if (!windowToFocus) return;

			nextStackOrderRef.current += 1;
			windowToFocus.setIsMinimized(false);
			windowToFocus.setIsFocused(true);
			windowToFocus.setStackOrder(nextStackOrderRef.current);
			ALL_WINDOWS.filter(window => window.id !== windowToFocus.id).forEach(
				window => {
					window.setIsFocused(false);
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
			const windowToClose = ALL_WINDOWS.find(window => window.id === id);
			if (!windowToClose) return;

			if (windowToClose.isZoomed && windowToClose.restoreRect) {
				windowToClose.setPosition({
					x: windowToClose.restoreRect.x,
					y: windowToClose.restoreRect.y,
				});
				windowToClose.setSize({
					width: windowToClose.restoreRect.width,
					height: windowToClose.restoreRect.height,
				});
			}

			windowToClose.setRestoreRect(null);
			windowToClose.setIsZoomed(false);
			windowToClose.setIsMinimized(false);
			windowToClose.setIsFocused(false);
			windowToClose.setIsShown(false);
			windowToClose.closeWindowCallback();

			if (windowToClose.isFocused) {
				focusTopVisibleWindow(id);
			}
		},
		[ALL_WINDOWS, focusTopVisibleWindow]
	);

	/**
	 * Opens a window by its ID, adding it to the visible windows array and focusing it
	 * @param windowID - The unique ID of the window to open
	 * @returns void
	 */
	const openWindowByID = useCallback(
		(windowID: WindowIDs): void => {
			const windowToOpen = ALL_WINDOWS.find(window => window.id === windowID);
			if (!windowToOpen) return;

			const safeSize = clampWindowSize(
				windowToOpen.size,
				desktopBounds,
				windowToOpen.minSize,
				windowToOpen.maxSize
			);

			const visibleWindowRects = ALL_WINDOWS.filter(
				window =>
					window.id !== windowID && window.isShown && !window.isMinimized
			).map(window => createWindowRect(window.position, window.size));

			const safePosition =
				windowToOpen.hasBeenPlaced ?
					clampWindowPosition(windowToOpen.position, safeSize, desktopBounds)
				:	resolveInitialWindowPlacement({
						size: safeSize,
						bounds: desktopBounds,
						preferredPosition: windowToOpen.preferredPosition,
						visibleWindows: visibleWindowRects,
					});

			windowToOpen.setSize(safeSize);
			windowToOpen.setPosition(safePosition);
			windowToOpen.setHasBeenPlaced(true);
			windowToOpen.setIsShown(true);
			windowToOpen.setIsMinimized(false);
			focusWindowByID(windowID);
		},
		[ALL_WINDOWS, desktopBounds, focusWindowByID]
	);

	const minimizeWindowByID = useCallback(
		(windowID: WindowIDs): void => {
			const windowToMinimize = ALL_WINDOWS.find(window => window.id === windowID);
			if (!windowToMinimize?.isShown) return;

			windowToMinimize.setIsMinimized(true);
			windowToMinimize.setIsFocused(false);

			if (windowToMinimize.isFocused) {
				focusTopVisibleWindow(windowID);
			}
		},
		[ALL_WINDOWS, focusTopVisibleWindow]
	);

	const toggleZoomWindowByID = useCallback(
		(windowID: WindowIDs): void => {
			const windowToToggle = ALL_WINDOWS.find(window => window.id === windowID);
			if (!windowToToggle?.isShown) return;

			if (windowToToggle.isZoomed && windowToToggle.restoreRect) {
				const restoredSize = clampWindowSize(
					{
						width: windowToToggle.restoreRect.width,
						height: windowToToggle.restoreRect.height,
					},
					desktopBounds,
					windowToToggle.minSize,
					windowToToggle.maxSize
				);
				const restoredPosition = clampWindowPosition(
					{
						x: windowToToggle.restoreRect.x,
						y: windowToToggle.restoreRect.y,
					},
					restoredSize,
					desktopBounds
				);

				windowToToggle.setSize(restoredSize);
				windowToToggle.setPosition(restoredPosition);
				windowToToggle.setRestoreRect(null);
				windowToToggle.setIsZoomed(false);
				focusWindowByID(windowID);
				return;
			}

			windowToToggle.setRestoreRect(
				createWindowRect(windowToToggle.position, windowToToggle.size)
			);

			const zoomedRect = getZoomedWindowRect(
				desktopBounds,
				windowToToggle.minSize,
				windowToToggle.maxSize
			);

			windowToToggle.setPosition({ x: zoomedRect.x, y: zoomedRect.y });
			windowToToggle.setSize({
				width: zoomedRect.width,
				height: zoomedRect.height,
			});
			windowToToggle.setIsZoomed(true);
			windowToToggle.setHasBeenPlaced(true);
			focusWindowByID(windowID);
		},
		[ALL_WINDOWS, desktopBounds, focusWindowByID]
	);

	useEffect(() => {
		ALL_WINDOWS.forEach(window => {
			if (!window.isShown) return;

			if (window.isZoomed) {
				const zoomedRect = getZoomedWindowRect(
					desktopBounds,
					window.minSize,
					window.maxSize
				);
				if (
					window.position.x !== zoomedRect.x ||
					window.position.y !== zoomedRect.y
				) {
					window.setPosition({ x: zoomedRect.x, y: zoomedRect.y });
				}
				if (
					window.size.width !== zoomedRect.width ||
					window.size.height !== zoomedRect.height
				) {
					window.setSize({
						width: zoomedRect.width,
						height: zoomedRect.height,
					});
				}
				return;
			}

			const safeSize = clampWindowSize(
				window.size,
				desktopBounds,
				window.minSize,
				window.maxSize
			);
			const safePosition = clampWindowPosition(
				window.position,
				safeSize,
				desktopBounds
			);

			if (
				window.size.width !== safeSize.width ||
				window.size.height !== safeSize.height
			) {
				window.setSize(safeSize);
			}

			if (
				window.position.x !== safePosition.x ||
				window.position.y !== safePosition.y
			) {
				window.setPosition(safePosition);
			}
		});
	}, [ALL_WINDOWS, desktopBounds]);

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
						openWindowByID('landing-page-window');
					},
					displayMenuBreakAfter: true,
				},
				{
					key: 'about-this-site',
					titleText: 'About This Site',
					hoverExplainer:
						'Open a quick explainer about this site and how it was built',
					onClickAction: () => {
						openWindowByID('site-info-window');
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
		contactWindow,
		solvedokuWindow,
		rpsSketchWindow,
		writingWindow,
		aboutWindow,
		focusedWindow,
		navBarMenuItems,
		focusWindowByID,
		closeWindowByID,
		openWindowByID,
		minimizeWindowByID,
		toggleZoomWindowByID,
	};
}
