import { Dispatch, SetStateAction } from 'react';

export interface DESKTOP_STATE {
	focusedWindow: number;
	setFocusedWindow: Dispatch<SetStateAction<number>>;
	visibleWindows: number[];
	setVisibleWindows: Dispatch<SetStateAction<number[]>>;
}
