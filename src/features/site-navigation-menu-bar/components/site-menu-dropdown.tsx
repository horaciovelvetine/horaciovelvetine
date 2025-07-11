import { useEffect, useRef, useState } from 'react';
import { CodeBlockIcon } from '../../../assets';
import { unfocusedClickHandler } from '../../../functions/site/unfocused-click-handler';
import { DropdownMenuOptionsContainer } from './dropdown-menu-options-container';
import type { DropdownMenuOption } from '../../../types/site/dropdown-menu-option';

export function SiteMenuDropdown() {
	const [showDropdownMenu, setShowDropdownMenu] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	//? Closes dropdown unfocused click
	useEffect(() => {
		const handler = (event: MouseEvent) => {
			unfocusedClickHandler(event, dropdownRef, setShowDropdownMenu, showDropdownMenu);
		};
		document.addEventListener('mousedown', handler);
		return () => {
			document.removeEventListener('mousedown', handler);
		};
	}, [showDropdownMenu]);

	return (
		<div
			ref={dropdownRef}
			className='relative'>
			<button
				type='button'
				className='hover:bg-white/30 rounded-sm px-1 flex'
				onClick={() => {
					setShowDropdownMenu(!showDropdownMenu);
				}}>
				<img
					src={CodeBlockIcon}
					className='h-6.5'
				/>
			</button>
			{showDropdownMenu &&
				<DropdownMenuOptionsContainer options={SiteMenuDropdowns} />}
		</div>
	);
}

//==> Uniquely and consistently displayed by only this component...
const SiteMenuDropdowns: DropdownMenuOption[] = [
	{
		id: crypto.randomUUID(),
		title: 'About Velvet.dev',

		hasHorizontalBreak: true
	},
	{
		id: crypto.randomUUID(),
		title: 'Site Settings...',

		hasHorizontalBreak: true
	},
	{
		id: crypto.randomUUID(),
		title: 'Rock Paper Scissors',
		sectionHeader: 'Applications'
	},
	{
		id: crypto.randomUUID(),
		title: 'Solvedoku',
	},
	{
		id: crypto.randomUUID(),
		title: 'Finding Centroids',
		hasHorizontalBreak: true
	},
	{
		id: crypto.randomUUID(),
		title: 'J.Tillman Resume',
		sectionHeader: 'Documents'
	},
]