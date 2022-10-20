import { useMemo, useState } from 'react';
import { CodeIcon } from '@heroicons/react/solid';
import { SiteDetails, About } from './screens';
import { DESKTOP_STATE } from '../interfaces/DesktopState';
import { DesktopMenuBar } from './app/DesktopMenuBar';

export const Desktop = () => {
	const [focusedWindow, setFocusedWindow] = useState(0);
	const [visibleWindows, setVisibleWindows] = useState<number[]>([]);

	const desktopState: DESKTOP_STATE = { focusedWindow, setFocusedWindow, visibleWindows, setVisibleWindows };
	const ALL_WINDOWS = [
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
	];

	const curWinDetails = useMemo(() => {
		return ALL_WINDOWS.find(win => win.id === focusedWindow) || ALL_WINDOWS[0];
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
				{/*  MENU BAR START */}
				<div>
					<DesktopMenuBar
						setFocusedWindow={setFocusedWindow}
						setVisibleWindows={setVisibleWindows}
						windowDetails={curWinDetails}
					/>
				</div>

				{/* DESKTOP START */}
				<div className='w-screen h-screen relative' id='homepage-desktop-container'>
					{/* //! POSSIBLE TO ATTEMPT MAPPING AGAIN NOW WITH STATE? STATE MAY OVERRIDE ON REWRITE?? */}
					{visibleWindows.includes(1) && <SiteDetails {...desktopState} />}
					{visibleWindows.includes(2) && <About {...desktopState} />}
				</div>

				{/* DOCK BAR START */}
				<div
					id='dock-container'
					className='absolute w-fit inset-x-0 bottom-0 bg-bg-primary-900/90 transition-all mx-auto my-2 px-4 pt-2 pb-3 rounded-xl shadow-2xl border-[0.25px] border-white/[0.27] '>
					<div className='flex flex-row justify-center gap-3 items-center'>
						<div className='relative'>
							<img
								src='src/assets/icons/Finder.webp'
								className='h-16 hover:scale-110 hover:-translate-y-4 transition-all duration-200 rounded'
							/>
							{/* if window is visible render... */}
							{visibleWindows.includes(0) && (
								<div className='absolute h-[5px] w-[5px] inset-x-[29px] -bottom-[10px] rounded-full bg-white/[0.85]'></div>
							)}
						</div>
						<div
							className='relative bg-window h-14 w-14 rounded p-1 shadow-lg border hover:scale-110 hover:-translate-y-4 transition-all duration-200'
							onClick={() => {
								setVisibleWindows(prev => {
									return [...prev, 2];
								});
								setFocusedWindow(2);
							}}>
							<span className='inline-flex text-white'>
								<CodeIcon className='h-5 stroke-white stroke-0 pr-[1px]' />_
							</span>
							{/* if window is visible render... */}
							{visibleWindows.includes(2) && (
								<div className='absolute h-[5px] w-[5px] inset-x-[23px] -bottom-[14px] rounded-full bg-white/[0.85]'></div>
							)}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};
