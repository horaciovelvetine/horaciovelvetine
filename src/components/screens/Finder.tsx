import { useRef, useState } from 'react';
import { WINDOW_DETAILS } from '../../interfaces';
import { DESKTOP_STATE } from '../../interfaces/DesktopState';
import { WindowWrapper } from '../app/WindowWrapper';

export const Finder = (props: DESKTOP_STATE) => {
	const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
	const [isFocused, setIsFocused] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	const windowDetails: WINDOW_DETAILS = {
		id: 3,
		name: 'Finder',
		content,
		sideBarContent,
		windowPosition,
		setWindowPosition,
		isFocused,
		setIsFocused,
		isVisible,
		setIsVisible,
	};

	return <WindowWrapper details={windowDetails} desktopState={props} />;
};

const sideBarContent = <>Some sidebar content</>

const content = <div className='relative flex flex-row h-96 w-96'>This is going to be a finder window</div>;

export const FinderDockIcon = (desktopState: DESKTOP_STATE) => {
	return (
		<div
			className='relative'
			onClick={() => {
				desktopState.setVisibleWindows(prev => {
					return [...prev, 3];
				});
				desktopState.setFocusedWindow(3);
				desktopState.setFocusedWindowName('Finder');
			}}>
			<img
				src='src/assets/icons/Finder.webp'
				className='h-[70px] hover:scale-110 hover:-translate-y-6 transition-all duration-200 rounded'
			/>
			{/* if window is visible render... */}
			{desktopState.visibleWindows.includes(3) && (
				<div className='absolute h-[5px] w-[5px] inset-x-[33px] -bottom-[7px] rounded-full bg-white/[0.85]'></div>
			)}
		</div>
	);
};
