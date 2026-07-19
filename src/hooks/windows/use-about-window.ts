import { useCallback } from 'react';
import type { ManagedWindow, NavBarMenuParent, WindowIDs } from '../../types';
import { GH_NEW_ISSUES } from '../../consts/urls';
import { useManagedWindowState } from './use-managed-window-state';

/**
 * Custom hook for managing the About window state and functionality.
 *
 * Provides window management for the About section, including:
 * - Window display state (show/hide, z-index, focus)
 * - Navigation bar menu configuration for About and related project/work links
 * - Callback for window close/cleanup (no-op in this case)
 *
 * @returns {ManagedWindow} Complete window state object containing:
 *   - Basic window management (show/hide, z-index, title, etc.)
 *   - Navigation bar menu configuration for About and project navigation
 */

export function useAboutWindow(): ManagedWindow {
	const windowID: WindowIDs = 'about-window';
	const managedWindow = useManagedWindowState({
		id: windowID,
		title: 'About',
		defaultSize: { width: 900, height: 700 },
		minSize: { width: 620, height: 480 },
		preferredPosition: { x: 104, y: 92 },
	});
	const { isFocused, isShown } = managedWindow;

	const closeWindowCallback = useCallback(() => {
		// no cleanup needed
	}, []);

	const navBarMenuItems = useCallback(
		(openWindowByID: (windowID: WindowIDs) => void): NavBarMenuParent[] => {
			return [
				{
					key: 'about',
					isAppTitledDisplayText: true,
					displayText: '@horaciovelvetine',
					dropdownOptions: [
						{
							key: 'show-about-home',
							titleText: 'Show About Window',
							isDisabled: isFocused && isShown,
							hoverExplainer:
								'Show or focus the about window on top of the devsktop',
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
							key: 'open-solvedoku',
							displaySectionHeader: 'Projects',
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
					key: 'about-help',
					displayText: 'Help',
					dropdownOptions: [
						{
							key: 'contact',
							titleText: 'Contact',
							hoverExplainer: 'Get in touch with @horaciovelvetine',
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
		closeWindowCallback,
		navBarMenuItems,
	};
}
