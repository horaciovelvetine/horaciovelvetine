import { MinusIcon, SelectorIcon, XIcon } from '@heroicons/react/solid';
import { WINDOW_COMPONENT_PROPS } from '../WindowWrapper';

const simpleStatusBarCSS = 'flex flex-row pt-1 pb-0.5 px-1 hover:cursor-grab bg-bg-primary-700 border-black border-b';
const statusButtonCSS =
	'inline-flex items-center rounded-full shadow-sm w-3.5 h-3.5 mx-1 border-[0.01px] border-bg-primary-900/25';
const statusIconCSS = 'text-black stroke-2 h-full transition duration-200 ease-in-out opacity-0 hover:opacity-100';

export const StatusBarVisibilityButtons = ({ desktopState, details, setIsMinimized }: WINDOW_COMPONENT_PROPS) => {
	return (
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
						setIsMinimized(true);
					}}>
					<MinusIcon className={statusIconCSS} />
				</button>
				{/* //! MAXIMIZE WINDOW */}
				<button
					className={`${statusButtonCSS} bg-limegreen`}
					key={`window-${details.id}-expand`}
					onClick={() => {
						setIsMinimized(false);
					}}>
					<SelectorIcon className={`${statusIconCSS} -rotate-45`} />
				</button>
			</div>
		</div>
	);
};
