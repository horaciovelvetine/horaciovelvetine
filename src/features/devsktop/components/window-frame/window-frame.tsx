import { useCallback, useEffect, useRef, type PointerEvent as ReactPointerEvent, type ReactNode } from 'react';
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
import {
	WINDOW_EDGE_MARGIN,
	clampWindowPosition,
	getDesktopBounds,
} from '../../../../functions';

type ResizeDirection = 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw';

interface ResizeState {
	direction: ResizeDirection;
	startPointer: Position;
	startPosition: Position;
	startSize: Dimensions;
}

const RESIZE_HANDLES: Array<{
	direction: ResizeDirection;
	className: string;
	cursorClass: string;
}> = [
	{
		direction: 'n',
		className: '-top-1 left-3 right-3 h-2',
		cursorClass: 'cursor-ns-resize',
	},
	{
		direction: 's',
		className: '-bottom-1 left-3 right-3 h-2',
		cursorClass: 'cursor-ns-resize',
	},
	{
		direction: 'e',
		className: '-right-1 top-3 bottom-3 w-2',
		cursorClass: 'cursor-ew-resize',
	},
	{
		direction: 'w',
		className: '-left-1 top-3 bottom-3 w-2',
		cursorClass: 'cursor-ew-resize',
	},
	{
		direction: 'ne',
		className: '-right-1 -top-1 size-4',
		cursorClass: 'cursor-nesw-resize',
	},
	{
		direction: 'nw',
		className: '-left-1 -top-1 size-4',
		cursorClass: 'cursor-nwse-resize',
	},
	{
		direction: 'se',
		className: '-right-1 -bottom-1 size-4',
		cursorClass: 'cursor-nwse-resize',
	},
	{
		direction: 'sw',
		className: '-left-1 -bottom-1 size-4',
		cursorClass: 'cursor-nesw-resize',
	},
];

function clampValue(value: number, min: number, max: number) {
	return Math.min(Math.max(value, min), max);
}

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
	const windowRef = useRef<HTMLDivElement>(null);
	const resizeStateRef = useRef<ResizeState | null>(null);
	const clientDimensions = useClientDimensionsUpdates();
	const desktopBounds = getDesktopBounds(clientDimensions);

	const handleFocusWindow = useCallback(() => {
		windowManager.focusWindowByID(window.id);
	}, [window.id, windowManager]);

	const controlledDrag = useCallback(
		(_event: DraggableEvent, ui: DraggableData) => {
			if (window.isZoomed) return;

			handleFocusWindow();
			window.setPosition(
				clampWindowPosition(
					{
						x: window.position.x + ui.deltaX,
						y: window.position.y + ui.deltaY,
					},
					window.size,
					desktopBounds
				)
			);
			window.setHasBeenPlaced(true);
		},
		[
			desktopBounds,
			handleFocusWindow,
			window,
		]
	);

	const stopResize = useCallback(() => {
		resizeStateRef.current = null;
		document.body.style.userSelect = '';
		document.body.style.cursor = '';
	}, []);

	useEffect(() => {
		const handlePointerMove = (event: PointerEvent) => {
			const resizeState = resizeStateRef.current;
			if (!resizeState) return;

			event.preventDefault();

			const deltaX = event.clientX - resizeState.startPointer.x;
			const deltaY = event.clientY - resizeState.startPointer.y;
			const startRight =
				resizeState.startPosition.x + resizeState.startSize.width;
			const startBottom =
				resizeState.startPosition.y + resizeState.startSize.height;

			let nextX = resizeState.startPosition.x;
			let nextY = resizeState.startPosition.y;
			let nextWidth = resizeState.startSize.width;
			let nextHeight = resizeState.startSize.height;

			if (resizeState.direction.includes('e')) {
				nextWidth = resizeState.startSize.width + deltaX;
			}

			if (resizeState.direction.includes('s')) {
				nextHeight = resizeState.startSize.height + deltaY;
			}

			if (resizeState.direction.includes('w')) {
				nextWidth = resizeState.startSize.width - deltaX;
				nextX = resizeState.startPosition.x + deltaX;
			}

			if (resizeState.direction.includes('n')) {
				nextHeight = resizeState.startSize.height - deltaY;
				nextY = resizeState.startPosition.y + deltaY;
			}

			const maxWidth =
				Math.max(
					window.minSize.width,
					resizeState.direction.includes('w') ?
					Math.min(
						window.maxSize?.width ?? Number.POSITIVE_INFINITY,
						startRight - WINDOW_EDGE_MARGIN
					)
				:	Math.min(
						window.maxSize?.width ?? Number.POSITIVE_INFINITY,
						desktopBounds.width - WINDOW_EDGE_MARGIN - nextX
					)
				);
			const maxHeight =
				Math.max(
					window.minSize.height,
					resizeState.direction.includes('n') ?
					Math.min(
						window.maxSize?.height ?? Number.POSITIVE_INFINITY,
						startBottom - WINDOW_EDGE_MARGIN
					)
				:	Math.min(
						window.maxSize?.height ?? Number.POSITIVE_INFINITY,
						desktopBounds.height - WINDOW_EDGE_MARGIN - nextY
					)
				);

			const clampedSize = {
				width: clampValue(nextWidth, window.minSize.width, maxWidth),
				height: clampValue(nextHeight, window.minSize.height, maxHeight),
			};

			if (resizeState.direction.includes('w')) {
				nextX = startRight - clampedSize.width;
			}

			if (resizeState.direction.includes('n')) {
				nextY = startBottom - clampedSize.height;
			}

			window.setSize(clampedSize);
			window.setPosition(
				clampWindowPosition(
					{ x: nextX, y: nextY },
					clampedSize,
					desktopBounds
				)
			);
		};

		const handlePointerUp = () => {
			stopResize();
		};

		globalThis.window.addEventListener('pointermove', handlePointerMove);
		globalThis.window.addEventListener('pointerup', handlePointerUp);

		return () => {
			globalThis.window.removeEventListener('pointermove', handlePointerMove);
			globalThis.window.removeEventListener('pointerup', handlePointerUp);
		};
	}, [desktopBounds, stopResize, window]);

	const handleResizeStart = useCallback(
		(direction: ResizeDirection) =>
			(event: ReactPointerEvent<HTMLDivElement>) => {
				if (window.isZoomed) return;

				event.preventDefault();
				event.stopPropagation();
				handleFocusWindow();
				window.setHasBeenPlaced(true);

				resizeStateRef.current = {
					direction,
					startPointer: { x: event.clientX, y: event.clientY },
					startPosition: window.position,
					startSize: window.size,
				};

				document.body.style.userSelect = 'none';
				document.body.style.cursor = RESIZE_HANDLES.find(
					handle => handle.direction === direction
				)?.cursorClass.includes('ns') ?
					'ns-resize'
				: RESIZE_HANDLES.find(handle => handle.direction === direction)?.cursorClass.includes(
						'ew'
					) ?
					'ew-resize'
				: RESIZE_HANDLES.find(handle => handle.direction === direction)?.cursorClass.includes(
						'nesw'
					) ?
					'nesw-resize'
				:	'nwse-resize';
			},
		[handleFocusWindow, window]
	);

	return (
		<>
			{window.isShown && !window.isMinimized && (
				<Draggable
					nodeRef={windowRef}
					bounds='#devsktop-bounds'
					handle='.window-drag-handle'
					onDrag={controlledDrag}
					onStart={handleFocusWindow}
					position={window.position}
					disabled={window.isZoomed}
					enableUserSelectHack={false}>
					<div
						id={window.id}
						ref={windowRef}
						className='absolute'
						style={{ zIndex: window.stackOrder + 100 }}
						onMouseDown={handleFocusWindow}
						onTouchStart={handleFocusWindow}>
						<div
							className={`relative flex flex-col overflow-hidden rounded-[20px] border backdrop-blur-2xl shadow-2xl transition-[border-color,box-shadow,transform] duration-200 ${
								window.isFocused ?
									'border-white/15 bg-zinc-900/82 shadow-black/55'
								:	'border-white/8 bg-zinc-950/80 shadow-black/35'
							}`}
							style={{
								width: `${window.size.width}px`,
								height: `${window.size.height}px`,
							}}>
							<TitleBar
								window={window}
								manager={windowManager}
							/>
							<div className='window-content relative min-h-0 flex-1 overflow-hidden bg-zinc-950/75'>
								<Component
									siteSettings={siteSettings}
									windowState={window}
								/>
							</div>
							{!window.isZoomed &&
								RESIZE_HANDLES.map(handle => (
									<div
										key={handle.direction}
										className={`window-resize-handle absolute z-20 touch-none ${handle.className} ${handle.cursorClass}`}
										onPointerDown={handleResizeStart(handle.direction)}
									/>
								))}
						</div>
					</div>
				</Draggable>
			)}
		</>
	);
}
