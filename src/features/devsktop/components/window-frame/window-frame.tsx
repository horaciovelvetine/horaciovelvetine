// Disable any warnings for React Draggable ref per:
// https://github.com/react-grid-layout/react-draggable/issues/779
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import Draggable, {
	type DraggableData,
	type DraggableEvent,
} from 'react-draggable';
import type {
	Dimensions,
	Position,
	SiteSettings,
	ManagedWindow,
	WindowManager,
} from '../../../../types';
import { TitleBar } from './title-bar';
import { useClientDimensionsUpdates } from '../../../../hooks/site';

export interface WindowFrameProps {
	window: ManagedWindow;
	windowManager: WindowManager;
	siteSettings: SiteSettings;
	Component: (args: any) => ReactNode;
}

/**
 * WindowFrame component that provides a draggable window container with focus management
 * Wraps application components in a resizable, moveable window with a title bar
 * Automatically handles window positioning, bounds checking, and focus states
 *
 * Features:
 * - Draggable window positioning with mouse/touch support
 * - Automatic window bounds checking to prevent off-screen windows
 * - Window focus management when clicked or dragged
 * - Dynamic dimension tracking for responsive layout
 * - Integration with WindowManager for multi-window coordination
 *
 * @param {WindowFrameProps} props - Component properties
 * @param {ManagedWindow} props.window - The managed window instance containing state and metadata
 * @param {SiteSettings} props.siteSettings - Global site settings including client dimensions and theme
 * @param {WindowManager} props.windowManager - Window manager for handling focus and window operations
 * @param {(args: any) => ReactNode} props.Component - The React component to render inside the window frame
 * @returns JSX element containing a draggable window frame with the specified component
 */
export function WindowFrame({
	window,
	siteSettings,
	windowManager,
	Component,
}: WindowFrameProps) {
	const windowRef = useRef<any>(null);
	const clientDimensions = useClientDimensionsUpdates();
	const [size, setSize] = useState<Dimensions | undefined>();

	const [position, setPosition] = useState<Position>(() => {
		//? center the window width wise if theirs enought space...
		const x = Math.max(0, clientDimensions.width / 2 - 380);
		//? slight bump down if theres some space
		const y = 0;
		return { x, y };
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
				setSize({ width, height });
			}
		};

		// Only update dimensions if the window is shown
		if (window.isShown) {
			updateWindowDimensions();
		}
	}, [window.isShown]);

	useLayoutEffect(() => {
		if (!size) return;
		// Ensure window stays within screen bounds when screen size changes (as much as possible)
		const { x, y } = position;
		const { width: windowWidth, height: windowHeight } = size;
		const maxX = Math.max(0, clientDimensions.width - windowWidth);
		const maxY = Math.max(0, clientDimensions.height - (windowHeight + 36)); //? +36 is for Navbar @ top

		// Adjust position if window is outside bounds
		const newX = Math.min(Math.max(0, x), maxX);
		const newY = Math.min(Math.max(0, y), maxY);
		if (newX !== x || newY !== y) {
			setPosition({ x: newX, y: newY });
		}
	}, [size, clientDimensions, position, setPosition]);

	return (
		<>
			{window.isShown && (
				<Draggable
					nodeRef={windowRef}
					bounds='#devsktop-bounds'
					cancel={`.window-content`}
					onDrag={controlledDrag}
					position={position}
					enableUserSelectHack>
					<div
						id={window.id}
						ref={windowRef}
						className='absolute'
						style={{ zIndex: window.zIndex }}
						onClick={handleFocusWindow}
						onTouchStart={handleFocusWindow}>
						<div className='w-[760px] bg-zinc-900/80 backdrop-blur-2xl border border-stone-300/30 rounded-lg flex flex-col overflow-hidden' style={{ height: 'auto', maxHeight: 'calc(100vh - 36px)', minHeight: 'fit-content' }}>
							<TitleBar
								window={window}
								manager={windowManager}
							/>
							<div className='window-content flex-1 overflow-hidden'>
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
// export const originalOverflowStyling =
// 	'w-[756px] overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-stone-400/80 [&::-webkit-scrollbar-thumb]:bg-stone-600/70 [&::-webkit-scrollbar]:bg-transparent [&::-webkit-scrollbar-track]:bg-transparent';
