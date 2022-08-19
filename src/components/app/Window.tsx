import { useState } from 'react';
import { XIcon, MinusIcon, SelectorIcon } from '@heroicons/react/solid';
import Draggable from 'react-draggable';

interface WindowCardInt {
	style: string; //==> sets sizing details for the card, and any surplust styling
	title: string; //==> sets the title of the card
	contents: JSX.Element;
}

let statusIconStyle = 'text-black p-0.5 h-full transition duration-200 ease-in-out opacity-0 hover:opacity-100';
let statusButtonStyle = 'inline-flex items-center rounded-full shadow-sm w-3.5 h-3.5 mx-1';

export const WindowCard = ({ style, title, contents }: WindowCardInt) => {
	const [isShowing, setIsShowing] = useState(true);

	return (
		<Draggable bounds='#homepage-desktop-contain'>
			<div className={`flex flex-col card backdrop-blur-sm bg-bg-primary-900/70 shadow-xl text-white ${style}`}>
				{/* Status Bar */}
				<div className={`flex flex-row pt-1 pb-0.5 px-1 hover:cursor-grab bg-bg-primary-900/75`}>
					<ul className=''>
						<button className={`${statusButtonStyle} bg-tomato`} onClick={() => console.log('closeme!')}>
							{/* Remove Icon to show hide, simple workaround until X needs to function */}
							{/* <XIcon className={statusIconStyle} /> */}
						</button>
						<button
							className={`${statusButtonStyle} bg-gold`}
							onClick={() => {
								setIsShowing(false);
							}}>
							<MinusIcon className={statusIconStyle} />
						</button>
						<button
							className={`${statusButtonStyle} bg-limegreen`}
							onClick={() => {
								setIsShowing(true);
							}}>
							<SelectorIcon className={`${statusIconStyle} -rotate-45`} />
						</button>
					</ul>
					<div className='text-sm text-center text-ui-text font-lighter translate-x-10'>{title}</div>
				</div>
				{/* Window Content */}
				<div className={(isShowing ? 'showing ' : 'hidden ') + 'transition-all duration-1000 ease-in-out'}>
					{contents}

					<div className='flex justify-center py-1 tracking-tight text-ui-text text-2xs bg-bg-primary-900/75'>
						©2022 By James Tillman.
						<a href='https://github.com/horaciovelvetine/horaciovelvetine' className='pl-1 text-dodger-blue/70'>
							@horaciovelvetine
						</a>
					</div>
				</div>
			</div>
		</Draggable>
	);
};
