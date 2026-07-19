import { useCallback } from 'react';
import type { ManagedWindow, NavBarMenuParent, WindowIDs } from '../../types';
import { GH_NEW_ISSUES, MAILTO } from '../../consts/urls';
import { useManagedWindowState } from './use-managed-window-state';

/**
 * Custom hook for managing the Contact window state and functionality.
 *
 * Provides window management for the Contact section, including:
 * - Window display state (show/hide, z-index, focus)
 * - Navigation bar menu configuration for contact actions
 * - Integration with email and GitHub issue reporting
 *
 * @returns {ManagedWindow} Complete window state object containing:
 *   - Basic window management (show/hide, z-index, title, etc.)
 *   - Navigation bar menu configuration for contact and help actions
 */

export function useContactWindow(): ManagedWindow {
	const windowID: WindowIDs = 'contact-window';
	const managedWindow = useManagedWindowState({
		id: windowID,
		title: 'Contact',
		defaultSize: { width: 700, height: 560 },
		minSize: { width: 520, height: 420 },
		preferredPosition: { x: 168, y: 110 },
	});
	const { isFocused, isShown } = managedWindow;

	const closeWindowCallback = useCallback(() => {
		// no cleanup needed...
	}, []);

	const navBarMenuItems = useCallback(
		(openWindowByID: (windowID: WindowIDs) => void): NavBarMenuParent[] => {
			return [
				{
					key: 'about',
					isAppTitledDisplayText: true,
					displayText: 'Contact',
					dropdownOptions: [
						{
							key: 'show-contact-window',
							titleText: 'Show Contact Window',
							isDisabled: isFocused && isShown,
							hoverExplainer:
								'Show or focus the contact window on top of the devsktop',
							onClickAction: () => {
								openWindowByID('contact-window');
							},
							displayMenuBreakAfter: true,
						},
						{
							key: 'send-email',
							titleText: 'Send Email',
							hoverExplainer: 'Send an email directly to @horaciovelvetine',
							onClickAction: () => {
								window.open(MAILTO, '_blank');
							},
						},
					],
				},
				{
					key: 'velvet-help',
					displayText: 'Help',
					dropdownOptions: [
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
