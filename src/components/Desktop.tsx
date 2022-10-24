import { useMemo, useState } from 'react';
import { CodeIcon } from '@heroicons/react/solid';
import { SiteDetails, About, Finder, SystemPreferences, Trash } from './screens';
import { DESKTOP_STATE } from '../interfaces/DesktopState';
import { DesktopMenuBar } from './app/DesktopMenuBar';
import { Dock } from './app/desktop/Dock';

export const Desktop = () => {
	const [focusedWindow, setFocusedWindow] = useState(0);
	const [visibleWindows, setVisibleWindows] = useState<number[]>([3]);

	const desktopState: DESKTOP_STATE = { focusedWindow, setFocusedWindow, visibleWindows, setVisibleWindows };
	const WINDOWS_DETAILS = [
		// id: 0 is default or empty
		{
			id: 0,
			name: 'horaciovelvetine.dev',
			menuBarActions: [
				{ id: 1, name: 'About' },
				{ id: 2, name: 'Contact' },
				{ id: 3, name: 'Blog' },
				{ id: 4, name: 'Work' },
			],
		},
		{
			id: 1,
			name: 'Site Details',
			menuBarActions: [
				{ id: 1, name: 'Source Repository' },
				{ id: 2, name: 'Contact' },
			],
		},
		{
			id: 2,
			name: 'About',
			menuBarActions: [
				{ id: 1, name: 'Resume' },
				{ id: 2, name: 'Contact' },
				{ id: 3, name: 'Blog' },
				{ id: 4, name: 'Work' },
			],
		},
		{
			id: 3,
			name: 'Finder',
			menuBarActions: [
				{ id: 1, name: 'File' },
				{ id: 2, name: 'Edit' },
				{ id: 3, name: 'View' },
				{ id: 4, name: 'Go' },
				{ id: 5, name: 'Window' },
				{ id: 6, name: 'Help' },
			],
		},
	];

	const curWinDetails = useMemo(() => {
		return WINDOWS_DETAILS.find(win => win.id === focusedWindow) || WINDOWS_DETAILS[0];
	}, [focusedWindow]);

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
					<DesktopMenuBar
						setFocusedWindow={setFocusedWindow}
						setVisibleWindows={setVisibleWindows}
						windowDetails={curWinDetails}
					/>
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
