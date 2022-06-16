import { useState } from 'react';
import { XIcon, MinusIcon, SelectorIcon } from '@heroicons/react/solid';
import Draggable from 'react-draggable';

interface WindowCardInt {
	style: string; //==> sets sizing details for the card, and any surplust styling
	title: string; //==> sets the title of the card
	contents: JSX.Element[];
}

let statusIconStyle = 'text-black p-0.5 stroke-2 h-full';
let statusButtonStyle = 'inline-flex items-center rounded-full shadow-sm w-3.5 h-3.5 mx-1';

export const WindowCard = ({ style, title, contents }: WindowCardInt) => {
	const [isFocused, setIsFocused] = useState(false);
	const [isShowing, setIsShowing] = useState(false);

	return (
		<Draggable cancel='.window-contents'>
			<div className={`flex flex-col card backdrop-blur-sm bg-bg-primary-900/70 shadow-xl text-white ${style}`}>
				{/* Status Bar */}
				<div className={`flex flex-row h-50 w-full pt-1.5 pb-0.5 mx-0.5 hover:cursor-grab bg-bg-primary-900/75`}>
					<ul className=''>
						<button className={`${statusButtonStyle} bg-tomato`} onClick={() => console.log('closeme!')}>
							<XIcon className={statusIconStyle} />
						</button>
						<button className={`${statusButtonStyle} bg-gold`} onClick={() => console.log('minime!')}>
							<MinusIcon className={statusIconStyle} />
						</button>
						<button className={`${statusButtonStyle} bg-limegreen`} onClick={() => console.log('maxme!')}>
							<SelectorIcon className={`${statusIconStyle} -rotate-45`} />
						</button>
					</ul>
					<div className='text-center text-ui-text font-lighter text-sm translate-x-14 ml-1'>{title}</div>
				</div>
				{/* Window Content */}
				<div className='window-contents'>
					{contents.length > 0 && contents.map((e) => e)}

					<div className='flex justify-center text-ui-text text-2xs tracking-tight bg-bg-primary-900/75 py-1'>
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
