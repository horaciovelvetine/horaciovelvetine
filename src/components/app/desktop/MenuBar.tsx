import { CodeIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { DESKTOP_STATE } from '../../../interfaces';

export const MenuBar = (desktopState: DESKTOP_STATE) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='flex flex-row inset-x-0 w-screen bg-bg-primary-900/40 px-4 h-6 shadow-md items-center'>
			<div id='menu-bar-actions' className='flex flex-row gap-5 text-white list-none text-sm basis-1/2 items-center'>
				<div className='relative'>
					<button
						onClick={e => {
							e.preventDefault();
							setIsOpen(prev => {
								return !prev;
							});
						}}>
						<CodeIcon className='h-6' />
					</button>
					<div
						className={`${
							isOpen ? 'showing z-40' : 'hidden'
						} absolute transition-all duration-1000 ease-linear display`}>
						<div className='rounded-md backdrop-blur-xl bg-bg-primary-900/75 px-3 py-1 -mt-[3px] list-none grid gap-1 w-64'>
							<a
								className='border-b border-bg-primary-50/25 transition-all hover:bg-dodger-blue rounded-sm p-0.5'
								onClick={() => {
									desktopState.setFocusedWindow(1);
									desktopState.setVisibleWindows(prev => {
										return [...prev, 1];
									});
									setIsOpen(false);
								}}>
								About This Website
							</a>
							<a className='border-b border-bg-primary-50/25 transition-all hover:bg-dodger-blue rounded-sm p-0.5'>
								Site Preferences
							</a>
							<a className='transition-all hover:bg-dodger-blue rounded-sm p-0.5'>Close</a>
						</div>
					</div>
				</div>
				<li className='font-bold px-0.5' key={`window-name`}>
					{desktopState.focusedWindowName}
				</li>
				{/* Menu Options Start */}
				{desktopState.menuBarActions?.map(opt => {
					return <li key={`${opt.name}-${opt.id}`}>{opt.name}</li>;
				})}
			</div>
			{/* System items start */}
			<div id='menu-bar-system-items' className='flex flex-row-reverse basis-1/2'>
				<div className='flex flex-row text-white text-sm items-center'>
					<span className='text-white'>Thu Oct 20 4:01 PM</span>
				</div>
			</div>
		</div>
	);
};
