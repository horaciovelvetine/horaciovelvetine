import Draggable from 'react-draggable';
import { useState } from 'react';
import { XIcon, MinusSmIcon, SelectorIcon } from '@heroicons/react/solid';
import { WindowDetailsInterface } from '../../interfaces';

interface StatusButton {
	color: string;
	icon: JSX.Element;
}

const statusButtonClass = 'invisible hover:visible transition duration-100';
const windowStatusButtons: StatusButton[] = [
	{ color: 'tomato', icon: <XIcon className={statusButtonClass} /> },
	{ color: 'goldenrod', icon: <MinusSmIcon className={statusButtonClass} /> },
	{ color: 'limegreen', icon: <SelectorIcon className={statusButtonClass} /> },
];

const windowStatusButton = ({ color, icon }: StatusButton) => {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<button type='button' className={`inline-flex items-center rounded-full shadow-sm bg-${color} w-4 h-4 mx-1`}>
			{icon}
		</button>
	);
};

const Window = ({ style, title, content }: WindowDetailsInterface) => {
	return (
		<div className={`flex ${style} card backdrop-blur-sm bg-bg-primary-900/80 shadow-xl text-white`}>
			{/*  //* Window top controls */}
			<div className='flex flex-row h-50 w-full pt-1.5 pb-1'>
				{windowStatusButtons.map((statusButton) => {
					return windowStatusButton(statusButton);
				})}
				<div className='text-center text-ui-text font-lighter text-sm translate-x-14 ml-1'>{title}</div>
			</div>
			{/* //* Window Content Starts */}
			{content.map((element) => element)}
		</div>
	);
};

export const WindowContainer = (props: WindowDetailsInterface) => {
	return <Draggable>{Window(props)}</Draggable>;
};
