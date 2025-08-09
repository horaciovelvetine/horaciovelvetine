import { useCallback, useState } from 'react';
import type { ManagedWindow, NavBarMenuParent, WindowIDs } from '../../types';

export function useMainLandingWindow(): ManagedWindow {
	const windowID = 'main-landing-window';
	//? set as primary on top by default
	const [zIndex, setZIndex] = useState('1');
	const [isShown, setIsShown] = useState(true);

	const navBarMenuItems = useCallback(
		(openWindowByID: (windowID: WindowIDs) => void): NavBarMenuParent[] => {
			return [
				{
					key: 'velvet-dev',
					isAppTitledDisplayText: true,
					displayText: 'Velvet.dev',
					dropdownOptions: [
						{
							key: 'about-velvet-dev',
							parentWindowID: windowID,
							titleText: 'About',
							onClickAction: () => {
								openWindowByID('about-this-site-window');
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
								openWindowByID('solvedoku-window');
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
			];
		},
		[]
	);

	return {
		id: windowID,
		title: 'Velvet.dev',
		zIndex,
		setZIndex,
		navBarMenuItems,
		isShown,
		setIsShown,
	};
}
