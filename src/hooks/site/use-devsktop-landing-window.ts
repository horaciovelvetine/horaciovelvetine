import { useState } from 'react';
import type { Position, ManagedWindow, SiteSettings, NavBarMenuParent } from '../../types';
import { setInitialWindowPosition } from '../../functions/site/set-initial-window-position';

export function useDevsktopLandingWindow(props: SiteSettings): ManagedWindow {
	const windowID = 'devsktop-landing-window';
	//? set as primary on top by default
	const [zIndex, setZIndex] = useState('1');
	const [position, setPosition] = useState<Position>(() =>
		setInitialWindowPosition(props)
	);

	const navBarMenuItems: NavBarMenuParent[] = [
		{
			key: crypto.randomUUID(),
			isAppTitledDisplayText: true,
			navbarDisplayText: 'Velvet.dev',
			dropdownOptions: [
				{
					key: crypto.randomUUID(),
					parentWindowID: windowID,
					titleText: 'Site Settings...',
					onClickAction: () => {
						console.log({ tgt: 'velvet.dev => Site Settings...' })
					},
					displayMenuBreakAfter: true
				},
				{
					key: crypto.randomUUID(),
					parentWindowID: windowID,
					titleText: 'About',
					onClickAction: () => {
						console.log({ tgt: 'velvet.dev => About @horaciovelvetine' })
					},
					displaySectionHeader: 'Pages'
				},
				{
					key: crypto.randomUUID(),
					parentWindowID: windowID,
					titleText: 'Contact',
					onClickAction: () => {
						console.log({ tgt: 'velvet.dev => Contact' })
					},
					displayMenuBreakAfter: true
				},
				{
					key: crypto.randomUUID(),
					parentWindowID: windowID,
					displaySectionHeader: 'Projects',
					titleText: 'Solvedoku',
					onClickAction: () => {
						console.log({ tgt: 'Velvet.dev => Projects => Solvedoku' })
					}
				}
			]
		},
		{
			key: crypto.randomUUID(),
			navbarDisplayText: 'Help',
			dropdownOptions: [
				{
					key: crypto.randomUUID(),
					parentWindowID: windowID,
					titleText: 'About this Site',
					onClickAction: () => {
						console.log({ tgt: 'Help => About this Site' })
					}
				}
			]
		}
	]

	return {
		id: windowID,
		title: 'Velvet.dev',
		position,
		setPosition,
		zIndex,
		setZIndex,
		navBarMenuItems
	};
}
