import { useState } from 'react';
import type { Position, ManagedWindow, SiteSettings } from '../../types';
import { setInitialWindowPosition } from '../../functions/site/set-initial-window-position';

export function useDevsktopLandingWindow(props: SiteSettings): ManagedWindow {
	const windowID = 'devsktop-landing-window';
	//? set as primary on top by default
	const [zIndex, setZIndex] = useState('1');
	const [position, setPosition] = useState<Position>(() => setInitialWindowPosition(props));

	return {
		id: windowID,
		title: 'Velvet.dev',
		position,
		setPosition,
		zIndex,
		setZIndex
	};
}
