import React, { Dispatch, ReactEventHandler, SetStateAction } from 'react';

export interface DESKTOP_STATE {
	focusedWindow: number;
	setFocusedWindow: Dispatch<SetStateAction<number>>;
	visibleWindows: number[];
	setVisibleWindows: Dispatch<SetStateAction<number[]>>;
	focusedWindowName: string;
	setFocusedWindowName: React.Dispatch<React.SetStateAction<string>>;
	menuBarActions: {
		id: number;
		name: string;
	}[];
	setMenuBarActions: React.Dispatch<
		React.SetStateAction<
			{
				id: number;
				name: string;
			}[]
		>
	>;
}
