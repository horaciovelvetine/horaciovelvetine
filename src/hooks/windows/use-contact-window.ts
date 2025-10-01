import { useCallback, useState } from 'react';
import type { ManagedWindow, NavBarMenuParent, WindowIDs } from '../../types';
import { GH_NEW_ISSUES, MAILTO } from '../../consts/urls';

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
	const windowID = 'contact-window';
	const title = 'Contact';
	const [zIndex, setZIndex] = useState('0');
	const [isFocused, setIsFocused] = useState(false);
	const [isShown, setIsShown] = useState(false);

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
		id: windowID,
		title,
		zIndex,
		setZIndex,
		isFocused,
		setIsFocused,
		isShown,
		setIsShown,
		closeWindowCallback,
		navBarMenuItems,
	};
}
