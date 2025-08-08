import type { JSX } from 'react';
import type { NavBarMenuChild } from './nav-bar-menu-child';
import type { IconProps } from './icon-props';

export interface NavBarMenuParent {
	key: string;
	displayText?: string;
	isAppTitledDisplayText?: boolean;
  DisplayIcon?: ({ size, classes }: IconProps) => JSX.Element;
	dropdownOptions: NavBarMenuChild[];
}
