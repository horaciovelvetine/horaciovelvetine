import type { Dispatch, SetStateAction } from 'react';
import type { NavBarMenuParent } from './nav-bar-menu-parent';
import type { WindowIDs } from './window-ids';

export interface ManagedWindow {
	id: WindowIDs;
	title: string;
	zIndex: string;
	setZIndex: Dispatch<SetStateAction<string>>;
	navBarMenuItems: (
		openWindowByID: (windowID: WindowIDs) => void
	) => NavBarMenuParent[];
	isShown: boolean;
	setIsShown: Dispatch<SetStateAction<boolean>>;
}
