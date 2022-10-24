import { useState } from 'react';
import { WINDOW_DETAILS } from '../../interfaces';
import { DESKTOP_STATE } from '../../interfaces/DesktopState';
import { WindowWrapper } from '../app/WindowWrapper';

export const Trash = (props: DESKTOP_STATE) => {
	const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
	const [isFocused, setIsFocused] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	const windowDetails: WINDOW_DETAILS = {
		id: 5,
		name: 'Trash',
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

const content = <>This is gonna be a trash window</>;

export const TrashDockIcon = (desktopState: DESKTOP_STATE) => {
	return (
		<div
			className='relative'
			onClick={() => {
				desktopState.setVisibleWindows(prev => {
					return [...prev, 5];
				});
				desktopState.setFocusedWindow(5);
			}}>
			<img
				// https://www.veryicon.com/icons/system/ivista-mac/recycle-bin-empty-12.html for future ref
				src='src/assets/icons/TrashEmpty.png'
				className='h-[70px] hover:scale-110 hover:-translate-y-6 transition-all duration-200 rounded'
			/>
			{/* if window is visible render... */}
			{desktopState.visibleWindows.includes(3) && (
				<div className='absolute h-[5px] w-[5px] inset-x-[29px] -bottom-[10px] rounded-full bg-white/[0.85]'></div>
			)}
		</div>
	);
};
