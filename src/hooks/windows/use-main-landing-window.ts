import { useCallback, useState } from 'react';
import type { ManagedWindow, NavBarMenuParent, WindowIDs } from '../../types';
import { GH_NEW_ISSUES, MAILTO } from '../../consts/urls';

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
export function useMainLandingWindow(): ManagedWindow {
	const windowID = 'main-landing-window';
	//? set as primary on top by default
	const [zIndex, setZIndex] = useState('1');
	const [isFocused, setIsFocused] = useState(true);
	const [isShown, setIsShown] = useState(true);

	const closeWindowCallback = useCallback(() => {
		// no cleanup needed
	}, []);

	const navBarMenuItems = useCallback(
		(openWindowByID: (windowID: WindowIDs) => void): NavBarMenuParent[] => {
			return [
				{
					key: 'velvet-dev',
					isAppTitledDisplayText: true,
					displayText: '@horaciovelvetine',
					dropdownOptions: [
						{
							key: 'about-velvet-dev',
							titleText: 'About',
							hoverExplainer: 'About site owner @horaciovelvetine',
							onClickAction: () => {
								openWindowByID('about-this-site-window');
							},
						},
					],
				},
				{
					key: 'velvet.dev-work',
					displayText: 'Work',
					dropdownOptions: [
						{
							displaySectionHeader: 'Projects',
							key: 'open-solvedoku',
							titleText: 'Solvedoku',
							hoverExplainer: 'Open the Solvedoku application',
							onClickAction: () => {
								openWindowByID('solvedoku-window');
							},
						},
						{
							key: 'open-rock-paper-scissors',
							titleText: 'Rock, Paper, Scissors',
							hoverExplainer: 'Open the Rock, Paper, Scissors application',
							onClickAction: () => {
								openWindowByID('rps-sketch-window');
							},
						},
					],
				},
				{
					key: 'velvet-help',
					displayText: 'Help',
					dropdownOptions: [
						{
							key: 'contact',
							titleText: 'Contact',
							hoverExplainer: 'Send @horaciovelvetine an email',
							onClickAction: () => {
								window.open(MAILTO);
							},
							displayMenuBreakAfter: true
						},
						{
							key: 'submit-issue',
							titleText: 'Submit Github Issue',
							hoverExplainer:
								'Let me know about any issues on the site',
							onClickAction: () => {
								window.open(GH_NEW_ISSUES, '_blank');
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
		isFocused,
		setIsFocused,
		closeWindowCallback,
	};
}
