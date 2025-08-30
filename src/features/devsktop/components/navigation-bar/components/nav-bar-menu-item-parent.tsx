import { useRef, useState } from 'react';
import { NavBarDropdownMenu } from './nav-bar-dropdown-menu';
import type { NavBarMenuParent } from '../../../../../types';
import { useUnfocusedClickListener } from '../../../../../hooks/site';

/**
 * NavBarMenuItemParent component that renders a clickable menu item with dropdown functionality on the Devsktop
 * 
 * This component creates a navigation bar menu item that can display either an icon or text,
 * and shows a dropdown menu when clicked. It handles click-away behavior to close the dropdown
 * when the user clicks outside of the menu area.
 * 
 * Features:
 * - Toggleable dropdown menu on click
 * - Click-away listener to close dropdown when clicking outside
 * - Support for both icon and text display modes
 * - Special styling for app-titled display text
 * - Visual feedback with background highlight when dropdown is open
 * 
 * @param {NavBarMenuParent} props - Component properties
 * @param {({ size, classes }: IconProps) => ReactNode} [props.DisplayIcon] - Optional icon component to display
 * @param {string} [props.displayText] - Optional text to display in the menu item
 * @param {NavBarDropdownOption[]} props.dropdownOptions - Array of options to display in the dropdown menu
 * @param {boolean} [props.isAppTitledDisplayText] - Whether the display text should be styled as an app title (bold)
 * @returns JSX element containing a clickable menu item with optional dropdown
 */

export function NavBarMenuItemParent({
	DisplayIcon,
	displayText,
	dropdownOptions,
	isAppTitledDisplayText,
}: NavBarMenuParent) {
	const menuBarRef = useRef<HTMLLIElement>(null);
	const [showDropdownMenu, setShowDropdownMenu] = useState(false);

	useUnfocusedClickListener(menuBarRef, setShowDropdownMenu, showDropdownMenu);

	return (
		<li
			ref={menuBarRef}
			onClick={() => {
				setShowDropdownMenu(prev => !prev);
			}}
			className={`relative flex first:mr-1 px-2 rounded ${showDropdownMenu ? 'bg-stone-300/50' : ''}`}>
			<button type='button'>
				{DisplayIcon && (
					<DisplayIcon
						size='size-7'
						classes='text-stone-300'
					/>
				)}
				{displayText && (
					<p className={isAppTitledDisplayText ? 'font-extrabold' : ''}>
						{displayText}
					</p>
				)}
			</button>
			{showDropdownMenu && (
				<NavBarDropdownMenu dropdownOptions={dropdownOptions} />
			)}
		</li>
	);
}
