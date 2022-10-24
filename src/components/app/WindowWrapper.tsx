import { MinusIcon, SelectorIcon, XIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import Draggable from 'react-draggable';
import { WINDOW_DETAILS } from '../../interfaces';
import { DESKTOP_STATE } from '../../interfaces/DesktopState';

export interface WINDOW_WRAPPER_PROPS {
	details: WINDOW_DETAILS;
	desktopState: DESKTOP_STATE;
}

const windowCSS =
	'absolute card backdrop-blur-sm bg-bg-primary-800/80 drop-shadow-xl w-fit border-bg-primary-900 text-white';
const simpleStatusBarCSS = 'flex flex-row pt-1 pb-0.5 px-1 hover:cursor-grab bg-bg-primary-700 border-black border-b';
const statusButtonCSS =
	'inline-flex items-center rounded-full shadow-sm w-3.5 h-3.5 mx-1 border-[0.01px] border-bg-primary-900/25';
const statusIconCSS = 'text-black stroke-2 h-full transition duration-200 ease-in-out opacity-0 hover:opacity-100';
const titleTextCSS = 'text-sm text-center text-white font-lighter mx-auto pr-12';
const footerCSS = 'flex justify-center py-1 tracking-tight text-ui-text text-2xs bg-bg-primary-900 h-5';

export const WindowWrapper = ({ details, desktopState }: WINDOW_WRAPPER_PROPS) => {
	//wraps the window contents with a card element that has buttons to minimize and close windows.
	const [isMinimized, setisMinimized] = useState(false);

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
				className={windowCSS}
				onClick={e => {
					if (!e.target.id) return;
					if (e.target.id === `window-${details.id}`) {
						desktopState.setFocusedWindow(details.id);
					}
				}}>
				{/* //! STATUS BAR */}
				<div
					id={`window-${details.id}-status-bar`}
					className={simpleStatusBarCSS}
					onClick={e => {
						if (!e.target.id) return;
						if (e.target.id === `window-${details.id}-status-bar`) {
							// STATE
							desktopState.setFocusedWindow(details.id);
						}
					}}>
					<div>
						{/* //! CLOSE WINDOW */}
						<button
							className={`${statusButtonCSS} bg-tomato`}
							onClick={() => {
								desktopState.setVisibleWindows(prev => {
									return prev.filter(n => n !== details.id);
								});
								desktopState.setFocusedWindow(0);
							}}
							key={`window-${details.id}-close`}>
							<XIcon className={statusIconCSS} />
						</button>
						{/* //! MINIMIZE WINDOW */}
						<button
							className={`${statusButtonCSS} bg-gold`}
							key={`window-${details.id}-minimize`}
							onClick={() => {
								setisMinimized(true);
							}}>
							<MinusIcon className={statusIconCSS} />
						</button>
						{/* //! MAXIMIZE WINDOW */}
						<button
							className={`${statusButtonCSS} bg-limegreen`}
							key={`window-${details.id}-expand`}
							onClick={() => {
								setisMinimized(false);
							}}>
							<SelectorIcon className={`${statusIconCSS} -rotate-45`} />
						</button>
					</div>
					<div className={titleTextCSS}>{details.name}</div>
				</div>

				{/* //! WINDOW CONTENT */}
				<div
					className={(isMinimized ? 'hidden ' : 'showing ') + 'transition-all duration-1000 ease-in-out'}
					id={`window-${details.id}-content`}
					onClick={() => {
						// STATE
						desktopState.setFocusedWindow(details.id);
					}}>
					{details.content}

					{/* //! FOOTER CONTENT */}
					{details.footerContent && (
						<div className={footerCSS}>
							{/* {Footer content option} */}
							{details.footerContent}
						</div>
					)}
				</div>
			</div>
		</Draggable>
	);
};
