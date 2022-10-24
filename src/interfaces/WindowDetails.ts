export interface WINDOW_DETAILS {
	id: number;
	name: string;
	content?: JSX.Element;
	footerContent?: JSX.Element;
	sideBarContent?: JSX.Element;
	isFocused?: boolean;
	setIsFocused?: React.Dispatch<React.SetStateAction<boolean>>;
	setIsVisible?: React.Dispatch<React.SetStateAction<boolean>>;
	isVisible?: boolean;
	menuBarActions?: MENU_BAR_ACTION[];
	windowPosition?: { x: number; y: number };
	setWindowPosition?: React.Dispatch<
		React.SetStateAction<{
			x: number;
			y: number;
		}>
	>;
}

export interface MENU_BAR_ACTION {
	id: number;
	name: string;
}
