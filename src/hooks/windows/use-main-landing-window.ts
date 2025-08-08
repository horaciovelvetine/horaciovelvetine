import { useCallback, useState } from 'react';
import type {
	Position,
	ManagedWindow,
	SiteSettings,
	NavBarMenuParent,
	WindowIDs,
} from '../../types';
import { setInitialWindowPosition } from '../../functions/site/set-initial-window-position';

export function useMainLandingWindow(
	props: SiteSettings
): ManagedWindow {
	const windowID = 'main-landing-window';
	//? set as primary on top by default
	const [zIndex, setZIndex] = useState('1');
	const [position, setPosition] = useState<Position>(() =>
		setInitialWindowPosition(props)
	);

	const navBarMenuItems = useCallback((openWindowByID: (windowID: WindowIDs) => void): NavBarMenuParent[] => {
		return [
			{
				key: 'velvet-dev',
				isAppTitledDisplayText: true,
				displayText: 'Velvet.dev',
				dropdownOptions: [
					{
						key: 'open-site-settings',
						parentWindowID: windowID,
						titleText: 'Site Settings...',
						onClickAction: () => {
							console.log({ tgt: 'velvet.dev => Site Settings...' });
						},
						displayMenuBreakAfter: true,
					},
					{
						key: 'about-velvet-dev',
						parentWindowID: windowID,
						titleText: 'About',
						onClickAction: () => {
							console.log({ tgt: 'velvet.dev => About @horaciovelvetine' });
						},
						displaySectionHeader: 'Pages',
					},
					{
						key: 'open-contact',
						parentWindowID: windowID,
						titleText: 'Contact',
						onClickAction: () => {
							console.log({ tgt: 'velvet.dev => Contact' });
						},
						displayMenuBreakAfter: true,
					},
					{
						key: 'open-solvedoku',
						parentWindowID: windowID,
						displaySectionHeader: 'Projects',
						titleText: 'Solvedoku',
						onClickAction: () => {
							openWindowByID('solvedoku-window')
						},
					},
				],
			},
			{
				key: 'velvet-help',
				displayText: 'Help',
				dropdownOptions: [
					{
						key: 'velvet-about-this-site',
						parentWindowID: windowID,
						titleText: 'About this Site',
						onClickAction: () => {
							openWindowByID('about-this-site-window');
						},
					},
				],
			},
		]
	}, [])

	return {
		id: windowID,
		title: 'Velvet.dev',
		position,
		setPosition,
		zIndex,
		setZIndex,
		navBarMenuItems,
	};
}
