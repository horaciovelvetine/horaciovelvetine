import { useState } from 'react';
import type { ManagedWindow } from '../../types';

export function useAboutSolvedokuWindow(
	parentWindow: ManagedWindow
): ManagedWindow {
	const windowID = 'about-solvedoku-window';
	const title = 'About Solvedoku';
	const [zIndex, setZIndex] = useState('0');
	const [isShown, setIsShown] = useState(false);

	return {
		id: windowID,
		title,
		zIndex,
		setZIndex,
		isShown,
		setIsShown,
		navBarMenuItems: parentWindow.navBarMenuItems,
	};
}
