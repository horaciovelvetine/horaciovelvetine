import { useCallback, useState } from 'react';
import type { ManagedWindow, NavBarMenuParent } from '../../types';
import { MAILTO } from '../../consts/urls';

export function useContactWindow(): ManagedWindow {
	const windowID = 'contact-window';
	const title = 'Contact';
	const [zIndex, setZIndex] = useState('0');
	const [isFocused, setIsFocused] = useState(false);
	const [isShown, setIsShown] = useState(false);

	const closeWindowCallback = useCallback(() => {
		// no cleanup needed...
	}, []);

	const navBarMenuItems = useCallback((): NavBarMenuParent[] => {
		return [
			{
				key: 'about',
				isAppTitledDisplayText: true,
				displayText: 'Contact',
				dropdownOptions: [
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
		];
	}, []);

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
