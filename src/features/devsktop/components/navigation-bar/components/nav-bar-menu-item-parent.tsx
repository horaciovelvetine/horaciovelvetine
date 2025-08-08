import { useRef, useState, useEffect } from 'react';
import { NavBarDropdownMenu } from './nav-bar-dropdown-menu';
import type { NavBarMenuParent } from '../../../../../types';
import { unfocusedClickHandler } from '../../../../../functions';

export function NavBarMenuItemParent({
	DisplayIcon,
	displayText,
	dropdownOptions,
	isAppTitledDisplayText,
}: NavBarMenuParent) {
	const menuBarRef = useRef<HTMLLIElement>(null);
	const [showDropdownMenu, setShowDropdownMenu] = useState(false);

	useEffect(() => {
		const clickHandler = (event: MouseEvent) => {
			unfocusedClickHandler(
				event,
				menuBarRef,
				setShowDropdownMenu,
				showDropdownMenu
			);
		};
		document.addEventListener('mousedown', clickHandler);
		return () => {
			document.removeEventListener('mousedown', clickHandler);
		};
	}, [showDropdownMenu]);

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
