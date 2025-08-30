/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import Draggable, {
	type DraggableData,
	type DraggableEvent,
} from 'react-draggable';
import type { IconFrameProps } from './icon-frame-props';
import type { Position } from '../../../../types';

// Local hook for window dimensions to prevent unnecessary re-renders
function useWindowDimensions() {
	const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

	useEffect(() => {
		const handleResize = () => {
			setDimensions({ width: window.innerWidth, height: window.innerHeight });
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return dimensions;
}

/**
 * IconFrame component that renders a draggable desktop icon with label
 * 
 * Provides a draggable wrapper around application icons that can be repositioned by the user
 * while maintaining proper tray positioning when screen dimensions change. Supports both
 * mouse and touch interactions with double-click/tap to execute actions.
 * 
 * Features:
 * - Draggable icon positioning with drag offset preservation
 * - Automatic repositioning when screen dimensions change
 * - Screen boundary clamping to prevent icons from moving off-screen
 * - Double-click and double-tap support for action execution
 * - Visual feedback with scaling animation on interaction
 * 
 * @param {IconFrameProps} props - Component properties
 * @param {({ size }: IconProps) => ReactNode} props.Icon - React component that renders the icon with size props
 * @param {string} props.label - Text label displayed below the icon
 * @param {() => void} props.onClickAction - Callback function executed when the icon is double-clicked or double-tapped
 * @param {Position} props.baseTrayPosition - Base position of the tray in the upper right corner
 * @param {number} props.iconIndex - Index of the icon within the tray for horizontal spacing
 * @param {SiteSettings} props.siteSettings - Site settings for icon behavior
 * @param {number} props.iconCount - Total number of icons in the tray
 * @param {number} props.iconSpacing - Spacing between/around icons in pixels
 * @param {number} props.iconMargin - Margin used to bound the icons to the screen edges
 * @returns JSX element containing a draggable icon with label
 */
export function IconFrame({
	Icon,
	label,
	onClickAction,
	baseTrayPosition,
	iconIndex,
	iconCount,
	iconSpacing,
	iconMargin,
}: IconFrameProps) {
	const iconRef = useRef<any>(null);
	const [lastTap, setLastTap] = useState<number>(0);
	const [userDragOffset, setUserDragOffset] = useState<Position>({
		x: 0,
		y: 0,
	});
	const [position, setPosition] = useState<Position>(() => {
		return {
			x: baseTrayPosition.x + iconIndex * iconSpacing,
			y: baseTrayPosition.y,
		};
	});

	const { width, height } = useWindowDimensions();

	/**
	 * Reposition icon when screen dimensions change to keep it in the correct tray position
	 * while preserving the user's drag offset and ensuring the icon stays within screen bounds
	 */
	useLayoutEffect(() => {
		const trayWidth = iconSpacing * iconCount;

		const newTrayPosition = {
			x: width - trayWidth - iconMargin,
			y: iconMargin,
		};

		const newBasePosition = {
			x: newTrayPosition.x + iconIndex * iconSpacing,
			y: newTrayPosition.y,
		};

		// Apply the user's drag offset to the new base position
		let newIconPosition = {
			x: newBasePosition.x + userDragOffset.x,
			y: newBasePosition.y + userDragOffset.y,
		};

		// Clamp position to screen bounds
		const maxX = Math.max(0, width - iconSpacing);
		const maxY = Math.max(0, height - iconSpacing);
		newIconPosition = {
			x: Math.min(Math.max(0, newIconPosition.x), maxX),
			y: Math.min(Math.max(0, newIconPosition.y), maxY),
		};

		setPosition(newIconPosition);
	}, [
		width,
		height,
		iconIndex,
		userDragOffset,
		iconCount,
		iconSpacing,
		iconMargin,
	]);

	/**
	 * Allows 'double-click' to launch project applications on touch-screen devices which are large enough
	 * to render the full layout.
	 */
	const handleTouchStart = () => {
		const now = Date.now();

		if (now - lastTap < 300) {
			// Double tap detected
			onClickAction();
		}

		setLastTap(now);
	};

	/**
	 * Control icon drag event to maintain the offset data to handle screen resizing.
	 * When screen is resized icons cant be 'resized' off of the screen and become not visible to the user.
	 */
	const controlledDragHandler = (_e: DraggableEvent, ui: DraggableData) => {
		const { x, y } = position;
		const newPosition = { x: x + ui.deltaX, y: y + ui.deltaY };
		setPosition(newPosition);

		// Calculate and store the user's drag offset from the current tray position
		const currentTrayPosition = {
			x: baseTrayPosition.x + iconIndex * iconSpacing,
			y: baseTrayPosition.y,
		};
		const newOffset = {
			x: newPosition.x - currentTrayPosition.x,
			y: newPosition.y - currentTrayPosition.y,
		};
		setUserDragOffset(newOffset);
	};

	return (
		<Draggable
			bounds='#devsktop-bounds'
			position={position}
			onDrag={controlledDragHandler}
			nodeRef={iconRef}>
			<button
				ref={iconRef}
				type='button'
				className='absolute flex flex-col items-center'
				onDoubleClick={onClickAction}
				onTouchStart={handleTouchStart}>
				<Icon
					size='size-18 lg:size-22'
					classes='drop-shadow-lg drop-shadow-stone-900/35'
				/>
				<h4 className='tracking-tighter text-sm lg:text-base font-semibold text-shadow-lg w-24'>
					{label}
				</h4>
			</button>
		</Draggable>
	);
}
