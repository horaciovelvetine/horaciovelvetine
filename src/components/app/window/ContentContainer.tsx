import { WINDOW_COMPONENT_PROPS } from '../WindowWrapper';

export const ContentContainer = ({ details, desktopState, isMinimized }: WINDOW_COMPONENT_PROPS) => {
	return (
		<div
			className={(isMinimized ? 'hidden ' : 'showing ') + 'transition-all duration-1000 ease-in-out'}
			id={`window-${details.id}-content`}
			onClick={() => {
				// STATE
				desktopState.setFocusedWindow(details.id);
			}}>
			{details.content}
		</div>
	);
};
