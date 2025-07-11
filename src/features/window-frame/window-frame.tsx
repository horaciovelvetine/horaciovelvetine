/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, type ReactNode } from 'react';
import Draggable, { type DraggableData, type DraggableEvent } from 'react-draggable';
import { TitleBar } from './title-bar';
import type { ManagedWindow } from '../../types';

interface WindowFrameProps extends ManagedWindow {
	component: ReactNode;
	visibleWindows: ManagedWindow[]
	focusWindowByID: (windowID: string) => void;
	closeWindowByID: (windowID: string) => void;
}

export function WindowFrame({ id, position, title, component, zIndex, visibleWindows, setPosition, focusWindowByID, closeWindowByID }: WindowFrameProps) {
	const windowRef = useRef<any>(null);

	const controlledDrag = (_e: DraggableEvent, ui: DraggableData) => {
		//adjust dragged window to the '1' zIndex in case it isnt currently focused...
		if (zIndex !== '1') {
			focusWindowByID(id);
		}
		const { x, y } = position;
		setPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
	};

	// display the window on screen?
	const showWindow = (windowID: string) => {
		return visibleWindows.some(window => window.id === windowID);
	}

	return (
		<>
			{showWindow(id) &&
				<Draggable
					nodeRef={windowRef}
					position={position}
					bounds='#devsktop-bounds'
					cancel={`.window-content`}
					onDrag={controlledDrag}>
					<div
						id={id}
						ref={windowRef}
						className={`absolute`}
						style={{ zIndex: zIndex }}
						onClick={() => { focusWindowByID(id); }}>
						<div className='w-[760px] h-fit bg-zinc-900/80 backdrop-blur-2xl border border-white/40 rounded-md z'>
							<TitleBar {...{ title, id, closeWindowByID }} />
							<div className='w-[760px] h-fit window-content p-3'>{component}</div>
						</div>
					</div>
				</Draggable>}
		</>
	);
}
