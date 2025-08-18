/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import type { IconProps, ManagedWindow, SiteSettings } from '../../../../types';

/**
 * Props interface for the WindowMenuWrapper component.
 * Defines the properties needed to render a menu overlay for window components.
 */

export interface WindowMenuWrapperProps {
	siteSettings: SiteSettings;
	windowState: ManagedWindow;
	showMenu: boolean;
	setShowMenu: Dispatch<SetStateAction<boolean>>;
	menuMainTitle: string;
	Content: (props: any) => ReactNode;
	Icon: (props: IconProps) => ReactNode;
}
