import { useCallback, useState } from 'react';
import type { ManagedWindow, NavBarMenuParent, WindowIDs } from '../../types';

/**
 * Custom hook for managing the main landing window state and functionality
 *
 * Provides comprehensive window management for the main landing page of the application,
 * including window display state, navigation bar menu configuration, and navigation
 * controls for accessing different sections and projects of the site. Serves as the
 * primary entry point and navigation hub for the entire application.
 *
 * @returns {ManagedWindow} Complete window state object containing:
 *   - Basic window management (show/hide, z-index, title, etc.)
 *   - Navigation bar menu configuration with site navigation options
 *   - Project navigation controls (Solvedoku, etc.)
 *   - About and contact page access
 */
export function useMainLandingWindow(focusedWindowID: string): ManagedWindow {
	const windowID = 'main-landing-window';
	//? set as primary on top by default
	const [zIndex, setZIndex] = useState('1');
	const [isShown, setIsShown] = useState(() => {
		return windowID === focusedWindowID;
	});

	const closeWindowCallback = useCallback(() => {
		// no cleanup needed
	}, []);

	const navBarMenuItems = useCallback(
		(openWindowByID: (windowID: WindowIDs) => void): NavBarMenuParent[] => {
			return [
				{
					key: 'velvet-dev',
					isAppTitledDisplayText: true,
					displayText: 'Velvet.dev',
					dropdownOptions: [
						{
							key: 'about-velvet-dev',
							titleText: 'About',
							onClickAction: () => {
								openWindowByID('about-this-site-window');
							},
							displaySectionHeader: 'Pages',
						},
						{
							key: 'open-contact',
							titleText: 'Contact',
							onClickAction: () => {
								console.log({ tgt: 'velvet.dev => Contact' });
							},
							displayMenuBreakAfter: true,
						},
						{
							key: 'open-solvedoku',
							displaySectionHeader: 'Projects',
							titleText: 'Solvedoku',
							onClickAction: () => {
								openWindowByID('solvedoku-window');
							},
						},
					],
				},
				{
					key: 'velvet-help',
					displayText: 'Help',
					dropdownOptions: [
						{
							key: 'velvet-about-this-site',
							titleText: 'About this Site',
							onClickAction: () => {
								openWindowByID('about-this-site-window');
							},
						},
					],
				},
			];
		},
		[]
	);

	return {
		id: windowID,
		title: 'Velvet.dev',
		zIndex,
		setZIndex,
		navBarMenuItems,
		isShown,
		setIsShown,
		closeWindowCallback,
	};
}
