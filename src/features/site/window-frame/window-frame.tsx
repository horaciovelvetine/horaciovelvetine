/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, type ReactNode } from 'react';
import Draggable, {
	type DraggableData,
	type DraggableEvent,
} from 'react-draggable';
import { TitleBar } from './title-bar';
import type { ManagedWindow } from '../../../types';

interface WindowFrameProps {
	window: ManagedWindow;
	Component: (args: any) => ReactNode;
	openWindowIDs: string[];
	focusWindowByID: (windowID: string) => void;
	closeWindowByID: (windowID: string) => void;
}

export function WindowFrame({
	window,
	Component,
	openWindowIDs,
	focusWindowByID,
	closeWindowByID,
}: WindowFrameProps) {
	const windowRef = useRef<any>(null);

	const controlledDrag = (_e: DraggableEvent, ui: DraggableData) => {
		//adjust dragged window to the '1' zIndex in case it isnt currently focused...
		if (window.zIndex !== '1') {
			focusWindowByID(window.id);
		}
		const { x, y } = window.position;
		window.setPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
	};

	// display the window on screen?
	const showWindow = (id: string) => {
		return openWindowIDs.some(openWindowID => openWindowID === id);
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
						className={`absolute`}
						style={{ zIndex: window.zIndex }}
						onClick={() => {
							focusWindowByID(window.id);
						}}>
						<div className='w-[760px] h-fit bg-zinc-900/80 backdrop-blur-2xl border border-white/40 rounded-md z'>
							<TitleBar {...{ ...window, closeWindowByID }} />
							<div className='w-[760px] h-fit window-content p-3'>
								<Component {...window} />
							</div>
						</div>
					</div>
				</Draggable>
			)}
		</>
	);
}
