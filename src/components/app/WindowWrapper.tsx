import { MinusIcon, SelectorIcon, XIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import Draggable from 'react-draggable';
import { WINDOW_DETAILS } from '../../interfaces';
import { DESKTOP_STATE } from '../../interfaces/DesktopState';

export interface WINDOW_WRAPPER_PROPS {
	details: WINDOW_DETAILS;
	desktopState: DESKTOP_STATE;
}

const windowBaseStyle = 'flex flex-row pt-1 pb-0.5 px-1 hover:cursor-grab bg-bg-primary-700 border-black border-b';
const statusIconStyle = 'text-black stroke-2 h-full transition duration-200 ease-in-out opacity-0 hover:opacity-100';
const statusButtonStyle =
	'inline-flex items-center rounded-full shadow-sm w-3.5 h-3.5 mx-1 border-[0.01px] border-bg-primary-900/25';
const titleTextStyle = 'text-sm text-center text-white font-lighter mx-auto';

export const WindowWrapper = ({ details, desktopState }: WINDOW_WRAPPER_PROPS) => {
	//wraps the window contents with a card element that has buttons to minimize and close windows.
	const [isMinimized, setisMinimized] = useState(false);
	//COMPONENT

	const controlledDrag = (e: any, position: any) => {
		const { x, y } = position;
		details.setWindowPosition!({ x: x, y: y });
	};

	return (
		<Draggable
			bounds='#homepage-desktop-container'
			cancel={`#window-${details.id}-content`}
			onDrag={controlledDrag}
			position={details.windowPosition}>
			<div
				id={`window-${details.id}`}
				className='card backdrop-blur-sm bg-bg-primary-800/80 drop-shadow-xl text-white w-fit border-bg-primary-900 absolute'
				onClick={e => {
					if (!e.target.id) return;
					if (e.target.id === `window-${details.id}`) {
						// STATE
						desktopState.setFocusedWindow(details.id);
					}
				}}>
				{/* Status Bar */}
				<div
					id={`window-${details.id}-status-bar`}
					className={windowBaseStyle}
					onClick={e => {
						if (!e.target.id) return;
						if (e.target.id === `window-${details.id}-status-bar`) {
							// STATE
							desktopState.setFocusedWindow(details.id);
						}
					}}>
					<div>
						<button
							className={`${statusButtonStyle} bg-tomato`}
							onClick={() => {
								//STATE
								desktopState.setVisibleWindows(prev => {
									return prev.filter(n => n !== details.id);
								});
								desktopState.setFocusedWindow(0);
							}}
							key={`window-${details.id}-close`}>
							<XIcon className={statusIconStyle} />
						</button>
						<button
							className={`${statusButtonStyle} bg-gold`}
							key={`window-${details.id}-minimize`}
							onClick={() => {
								setisMinimized(true);
							}}>
							<MinusIcon className={statusIconStyle} />
						</button>
						<button
							className={`${statusButtonStyle} bg-limegreen`}
							key={`window-${details.id}-expand`}
							onClick={() => {
								setisMinimized(false);
							}}>
							<SelectorIcon className={`${statusIconStyle} -rotate-45`} />
						</button>
					</div>
					<div className={titleTextStyle + ' pr-12'}>{details.name}</div>
				</div>
				{/* Window Content */}
				<div
					className={(isMinimized ? 'hidden ' : 'showing ') + 'transition-all duration-1000 ease-in-out'}
					id={`window-${details.id}-content`}
					onClick={() => {
						// STATE
						desktopState.setFocusedWindow(details.id);
					}}>
					{details.content}
					{details.footerContent && (
						<div className='flex justify-center py-1 tracking-tight text-ui-text text-2xs bg-bg-primary-900 h-5'>
							{/* {Footer content option} */}
							{details.footerContent}
						</div>
					)}
				</div>
			</div>
		</Draggable>
	);
};
