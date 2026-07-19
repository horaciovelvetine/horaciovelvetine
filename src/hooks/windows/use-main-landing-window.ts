import { useCallback } from 'react';
import type { ManagedWindow, NavBarMenuParent, WindowIDs } from '../../types';
import { GH_NEW_ISSUES } from '../../consts/urls';
import { useManagedWindowState } from './use-managed-window-state';

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
	const windowID: WindowIDs = 'landing-page-window';
	const managedWindow = useManagedWindowState({
		id: windowID,
		title: 'Velvet.dev',
		defaultSize: { width: 860, height: 620 },
		minSize: { width: 520, height: 420 },
		preferredPosition: { x: 72, y: 52 },
		isShownInitially: true,
		isFocusedInitially: true,
		initialStackOrder: 1,
	});
	const { isFocused, isShown } = managedWindow;

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
							key: 'show-landing-home',
							titleText: 'Show Landing Window',
							isDisabled: isFocused && isShown,
							hoverExplainer:
								'Show or focus the landing window on top of the devsktop',
							onClickAction: () => {
								openWindowByID('landing-page-window');
							},
							displayMenuBreakAfter: true,
						},
						{
							key: 'about-velvet-dev',
							titleText: 'About @horaciovelvetine',
							hoverExplainer: 'About site owner @horaciovelvetine',
							onClickAction: () => {
								openWindowByID('about-window');
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
							displayMenuBreakAfter: true,
						},
						{
							key: 'open-writing',
							titleText: 'Blog Posts',
							displaySectionHeader: 'Writing',
							hoverExplainer: 'Open the writing window to read some posts',
							onClickAction: () => {
								openWindowByID('writing-window');
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
								openWindowByID('contact-window');
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
		[]
	);

	return {
		...managedWindow,
		navBarMenuItems,
		closeWindowCallback,
	};
}
