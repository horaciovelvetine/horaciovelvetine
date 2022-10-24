import { useState } from 'react';
import { WINDOW_DETAILS } from '../../interfaces';
import { DESKTOP_STATE } from '../../interfaces/DesktopState';
import { browserName } from '../../utils';
import { WindowWrapper } from '../app/WindowWrapper';

export const SiteDetails = (props: DESKTOP_STATE) => {
	const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
	const [isFocused, setIsFocused] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	const windowDetails: WINDOW_DETAILS = {
		id: 1,
		name: 'Site Details',
		content,
		windowPosition,
		setWindowPosition,
		isFocused,
		setIsFocused,
		isVisible,
		setIsVisible,
	};

	return <WindowWrapper details={windowDetails} desktopState={props} />;
};

const content = (
	<div className='relative flex flex-row h-[225px] w-[505px]'>
		<div className='mx-auto w-40 self-center'>
			<img src='src/assets/StillHeadshot.png' className='rounded-full border-white border-8 shadow-lg' />
		</div>
		<div className='mx-auto self-center'>
			<h2 className='text-2xl pb-2'>
				horaciovelvetine<span className='font-bold'>.DEV</span>
				<p className='text-xs text-ui-text'>Version 1.0.0</p>
			</h2>
			<div className='text-sm'>
				<p className='font-bold'>Copyright © 2022 James Tillman</p>
				<div className='text-ui-text'>
					<p>
						Built with:{' '}
						<a className='text-dodger-blue/70' href='https://www.typescriptlang.org/'>
							TypeScript
						</a>
						,{' '}
						<a className='text-dodger-blue/70' href='https://reactjs.org/'>
							React
						</a>
						, &{' '}
						<a className='text-dodger-blue/70' href='https://tailwindcss.com/'>
							TailwindCSS
						</a>
					</p>
					<p>Browser: {browserName(window)}</p>
				</div>
				<div className='flex flex-row my-4'>
					<button
						type='button'
						className='bg-icon-fill/90 rounded-md border-acc-gray border-[1px] shadow-sm px-2 mx-2'
						onClick={() => {
							window.open('https://github.com/horaciovelvetine/horaciovelvetine', '_blank');
						}}>
						GitHub Repository
					</button>
					<button
						type='button'
						className='bg-icon-fill/90 rounded-md border-black border-1 shadow-sm px-2 mx-2'
						onClick={() => {
							window.open('https://twitter.com/HoraceVelvetine', '_blank');
						}}>
						Updates...
					</button>
				</div>
			</div>
		</div>
	</div>
);
