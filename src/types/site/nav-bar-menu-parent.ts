import type { ReactNode } from 'react';
import type { NavBarMenuChild } from './nav-bar-menu-child';
import type { IconProps } from './icon-props';

/**
 * Interface representing a parent menu item in the navigation bar menu structure
 *
 * Defines the top-level menu items that contain dropdown menus with child items.
 * These parent items serve as containers and triggers for hierarchical navigation
 * menus, providing organization and grouping for related functionality.
 *
 * @interface
 * @property {string} key - Unique React key identifier for the menu parent
 * @property {string} [displayText] - Optional display text shown for the menu parent
 * @property {boolean} [isAppTitledDisplayText] - Optional flag indicating if display text represents the app title
 * @property {({ size, classes }: IconProps) => ReactNode} [DisplayIcon] - Optional icon component to render alongside or instead of text
 * @property {NavBarMenuChild[]} dropdownOptions - Array of child menu items that appear in the dropdown menu
 */
export interface NavBarMenuParent {
	key: string;
	displayText?: string;
	isAppTitledDisplayText?: boolean;
	DisplayIcon?: ({ size, classes }: IconProps) => ReactNode;
	dropdownOptions: NavBarMenuChild[];
}
