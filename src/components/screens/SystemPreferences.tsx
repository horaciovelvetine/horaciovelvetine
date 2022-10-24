import { useState } from 'react';
import { WINDOW_DETAILS } from '../../interfaces';
import { DESKTOP_STATE } from '../../interfaces/DesktopState';
import { WindowWrapper } from '../app/WindowWrapper';

export const SystemPreferences = (props: DESKTOP_STATE) => {
	const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
	const [isFocused, setIsFocused] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	const windowDetails: WINDOW_DETAILS = {
		id: 4,
		name: 'System Preferences',
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

const content = <div className='relative flex flex-row h-fit w-fit'>This is gonna set up some sort of preference</div>;

export const SystemPreferencesDockIcon = (desktopState: DESKTOP_STATE) => {
	return (
		<div
			className='relative'
			onClick={() => {
				desktopState.setVisibleWindows(prev => {
					return [...prev, 4];
				});
				desktopState.setFocusedWindow(4);
			}}>
			<img
				src='src/assets/icons/SystemPref.webp'
				className='h-[72px] hover:scale-110 hover:-translate-y-6 transition-all duration-200 rounded'
			/>
			{/* if window is visible render... */}
			{desktopState.visibleWindows.includes(4) && (
				<div className='absolute h-[5px] w-[5px] inset-x-[33px] -bottom-[5px] rounded-full bg-white/[0.85]'></div>
			)}
		</div>
	);
};
