import { useState } from 'react';
import { SiteDetails, About, Finder, SystemPreferences, Trash } from './screens';
import { DESKTOP_STATE } from '../interfaces/DesktopState';
import { Dock, MenuBar } from './app/desktop';

const defaultWindowState = {
	focused: 0,
	visible: [2],
	name: 'horaciovelvetine.dev',
	menuBarActions: [
		{ id: 1, name: 'About' },
		{ id: 2, name: 'Contact' },
		{ id: 3, name: 'Blog' },
		{ id: 4, name: 'Work' },
	],
};

export const Desktop = () => {
	const [focusedWindow, setFocusedWindow] = useState(defaultWindowState.focused);
	const [visibleWindows, setVisibleWindows] = useState<number[]>(defaultWindowState.visible);
	const [focusedWindowName, setFocusedWindowName] = useState(defaultWindowState.name);
	const [menuBarActions, setMenuBarActions] = useState(defaultWindowState.menuBarActions);

	const desktopState: DESKTOP_STATE = {
		focusedWindow,
		setFocusedWindow,
		visibleWindows,
		setVisibleWindows,
		focusedWindowName,
		setFocusedWindowName,
		menuBarActions,
		setMenuBarActions,
	};

	return (
		<div
			className='bg-cover saturate-[1.25] overflow-hidden'
			style={{ backgroundImage: `url('/HomePageGradient.png')` }}>
			<main
				id='desktop-main-container'
				className='h-screen w-screen backdrop-blur-xl bg-bg-primary-900/5'
				onClick={e => {
					// sets focused window to default when desktop is clicked
					if (e.target.id === 'homepage-desktop-container') {
						setFocusedWindow(0);
					}
				}}>
				{/*  //! MENU BAR START */}
				<div>
					<MenuBar {...desktopState} />
				</div>

				{/* //! DESKTOP START */}
				<div className='w-screen h-screen relative' id='homepage-desktop-container'>
					{visibleWindows.includes(1) && <SiteDetails {...desktopState} />}
					{visibleWindows.includes(2) && <About {...desktopState} />}
					{visibleWindows.includes(3) && <Finder {...desktopState} />}
					{visibleWindows.includes(4) && <SystemPreferences {...desktopState} />}
					{visibleWindows.includes(5) && <Trash {...desktopState} />}
				</div>

				{/* //! DOCK BAR START */}
				<Dock {...desktopState} />
			</main>
		</div>
	);
};
