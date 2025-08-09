// Disable any warnings for React Draggable ref per:
// https://github.com/react-grid-layout/react-draggable/issues/779
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useLayoutEffect, useRef, useState } from 'react';
import Draggable, {
	type DraggableData,
	type DraggableEvent,
} from 'react-draggable';
import { TitleBar } from './title-bar';
import type { Position, Dimensions, WindowFrameProps } from '../../../../types';

export function WindowFrame({
	window,
	siteSettings,
	windowManager,
	Component,
}: WindowFrameProps) {
	const windowRef = useRef<any>(null);
	const [dimensions, setDimensions] = useState<Dimensions | undefined>();
	const [position, setPosition] = useState<Position>(() => {
		//? center the window width wise if theirs enought space...
		const { width, height } = siteSettings.clientDimensions;
		const x = Math.max(0, width / 2 - 380)
		//? slight bump down if theres some space 
		const y = height > 250 ? 50 : 0;
		return { x, y }
	});

	const controlledDrag = (_e: DraggableEvent, ui: DraggableData) => {
		windowManager.focusWindowByID(window.id);
		const { x, y } = position;
		setPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
	};

	const handleFocusWindow = () => {
		windowManager.focusWindowByID(window.id);
	};

	/**
	 * ? LAYOUT EFFECTS: These effects keep the window in range if the screen is resized so that the client cannot accidentally resize a window offscreen in a way which is impossible to fix without a hard refresh.
	 */
	useLayoutEffect(() => {
		const updateWindowDimensions = () => {
			if (windowRef.current) {
				const currentWindow = windowRef.current as HTMLDivElement;
				const { width, height } = currentWindow.getBoundingClientRect();
				setDimensions({ width, height });
			}
		};

		// Only update dimensions if the window is shown
		if (window.isShown) {
			updateWindowDimensions();
		}
	}, [window.isShown]);

	useLayoutEffect(() => {
		if (!dimensions) return;
		// Ensure window stays within screen bounds when screen size changes (as much as possible)
		const { width: screenWidth, height: screenHeight } =
			siteSettings.clientDimensions;
		const { x, y } = position;
		const { width: windowWidth, height: windowHeight } = dimensions;
		const maxX = Math.max(0, screenWidth - windowWidth);
		const maxY = Math.max(0, screenHeight - (windowHeight + 36)); //? +36 is for Navbar @ top

		// Adjust position if window is outside bounds
		const newX = Math.min(Math.max(0, x), maxX);
		const newY = Math.min(Math.max(0, y), maxY);
		if (newX !== x || newY !== y) {
			setPosition({ x: newX, y: newY });
		}
	}, [dimensions, siteSettings.clientDimensions, position, setPosition]);

	return (
		<>
			{window.isShown && (
				<Draggable
					nodeRef={windowRef}
					bounds='#devsktop-bounds'
					cancel={`.window-content`}
					onDrag={controlledDrag}
					position={position}>
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
