// Disable any warnings for React Draggable ref per:
// https://github.com/react-grid-layout/react-draggable/issues/779
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useRef } from 'react';
import Draggable, {
	type DraggableData,
	type DraggableEvent,
} from 'react-draggable';
import { TitleBar } from './title-bar';
import type { WindowFrameProps } from '../../../types';

export function WindowFrame({
	window,
	siteSettings,
	windowManager,
	Component,
}: WindowFrameProps) {
	const windowRef = useRef<any>(null);

	const controlledDrag = (_e: DraggableEvent, ui: DraggableData) => {
		windowManager.focusWindowByID(window.id);
		const { x, y } = window.position;
		window.setPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
	};

	const showWindow = (id: string) => {
		return windowManager.openWindowIDs.some(openWindowID => openWindowID === id);
	};

	const handleFocusWindow = () => {
		windowManager.focusWindowByID(window.id);
	};

	return (
		<>
			{showWindow(window.id) && (
				<Draggable
					nodeRef={windowRef}
					position={window.position}
					bounds='#devsktop-bounds'
					cancel={`.window-content`}
					onDrag={controlledDrag}>
					<div
						id={window.id}
						ref={windowRef}
						className='absolute'
						style={{ zIndex: window.zIndex }}
						onClick={handleFocusWindow}
						onTouchStart={handleFocusWindow}>
						<div className='w-[760px] h-fit bg-zinc-900/80 backdrop-blur-2xl border border-stone-300/30 rounded-md z'>
							<TitleBar
								window={window}
								manager={windowManager}
							/>
							<div className='w-[760px] h-fit window-content p-3'>
								<Component
									siteSettings={siteSettings}
									windowState={window}
								/>
							</div>
						</div>
					</div>
				</Draggable>
			)}
		</>
	);
}
