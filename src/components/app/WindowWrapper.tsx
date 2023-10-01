import { useState } from 'react';
import Draggable from 'react-draggable';

import { WINDOW_DETAILS, DESKTOP_STATE } from '../../interfaces';
import { ContentContainer, FooterContainer, StatusBarVisibilityButtons } from './window';
import { SidebarContainer } from './window/SidebarContainter';

export interface WINDOW_WRAPPER_PROPS {
	details: WINDOW_DETAILS;
	desktopState: DESKTOP_STATE;
}

export interface WINDOW_COMPONENT_PROPS {
	details: WINDOW_DETAILS;
	desktopState: DESKTOP_STATE;
	isMinimized: boolean;
	setIsMinimized: React.Dispatch<React.SetStateAction<boolean>>;
}

const windowCSS =
	'absolute card backdrop-blur-sm bg-bg-primary-800/80 drop-shadow-xl w-fit border-bg-primary-900 text-white';

export const WindowWrapper = ({ details, desktopState }: WINDOW_WRAPPER_PROPS) => {
	//wraps the window contents with a card element that has buttons to minimize and close windows.
	const [isMinimized, setIsMinimized] = useState(false);

	const controlledDrag = (e: any, position: any) => {
		const { x, y } = position;
		details.setWindowPosition!({ x: x, y: y });
	};

	const windowComponentProps = { desktopState, details, isMinimized, setIsMinimized };

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
						desktopState.setFocusedWindowName(details.name);
					}
				}}>
				{/* //! STATUS BAR */}
				{!details.sideBarContent && <StatusBarVisibilityButtons {...windowComponentProps} />}
				{/* //! SIDEBAR CONTENT */}
				{details.sideBarContent && <SidebarContainer {...windowComponentProps} />}

				{/* //! WINDOW CONTENT */}
				{details.content && <ContentContainer {...windowComponentProps} />}
				{/* //! FOOTER CONTENT */}
				{details.footerContent && <FooterContainer {...windowComponentProps} />}
			</div>
		</Draggable>
	);
};
