import { useCallback, useState } from 'react';
import type { ManagedWindow, NavBarMenuParent, WindowIDs } from '../../types';
import { GH_NEW_ISSUES, MAILTO } from '../../consts/urls';

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
export function useAboutThisSiteWindow(): ManagedWindow {
	const windowID = 'about-this-site-window';
	const title = 'About This Site';
	const [zIndex, setZIndex] = useState('0');
	const [isFocused, setIsFocused] = useState(false);
	const [isShown, setIsShown] = useState(false);

	const navBarMenuItems = useCallback(
		(openWindowByID: (windowID: WindowIDs) => void): NavBarMenuParent[] => {
			return [
				{
					key: 'velvet-dev',
					isAppTitledDisplayText: true,
					displayText: 'horaciovelvetine',
					dropdownOptions: [
						{
							key: 'about-velvet-dev',
							titleText: 'About',
							hoverExplainer: 'About site owner @horaciovelvetine',
							isDisabled: isFocused,
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
							displayMenuBreakAfter: true,
						},
						{
							key: 'submit-issue',
							titleText: 'Submit Github Issue',
							hoverExplainer: 'Let me know about any issues on the site',
							onClickAction: () => {
								window.open(GH_NEW_ISSUES, '_blank');
							},
						},
					],
				},
			];
		},
		[isFocused]
	);

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
		isFocused,
		setIsFocused,
		closeWindowCallback,
		navBarMenuItems,
	};
}
