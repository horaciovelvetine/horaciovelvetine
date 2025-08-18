/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLayoutEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import type { IconFrameProps } from './icon-frame-props';
import type { Position } from '../../../../types';

export function IconFrame({
	Icon,
	label,
	onClickAction,
	baseTrayPosition,
	iconIndex,
	siteSettings,
}: IconFrameProps) {
	const iconRef = useRef<any>(null);
	const [lastTap, setLastTap] = useState<number>(0);
	const [position, setPosition] = useState<Position>(() => {
		// Calculate initial position based on tray position and icon index
		return {
			x: baseTrayPosition.x + iconIndex * 130,
			y: baseTrayPosition.y
		};
	});

	/**
	 * Calculate the icon position based on current tray position and icon index
	 */
	function calculateIconPosition(trayPos: Position): Position {
		return {
			x: trayPos.x + iconIndex * 130,
			y: trayPos.y
		};
	}

	/**
	 * Reposition icon when screen dimensions change to keep it in the correct tray position
	 */
	useLayoutEffect(() => {
		const { width } = siteSettings.clientDimensions;
		const iconWidth = 130;
		const trayWidth = iconWidth * 3; // Assuming 3 icons (Home, Solvedoku, RPS)
		const margin = 20;

		// Recalculate tray position
		const newTrayPosition = {
			x: width - trayWidth - margin,
			y: margin
		};

		// Update icon position
		const newIconPosition = calculateIconPosition(newTrayPosition);
		setPosition(newIconPosition);
	}, [siteSettings.clientDimensions, iconIndex]);

	const handleTouchStart = () => {
		const now = Date.now();
		const DOUBLE_TAP_DELAY = 300; // ms between taps

		if (now - lastTap < DOUBLE_TAP_DELAY) {
			// Double tap detected
			onClickAction();
		}

		setLastTap(now);
	};

	return (
		<Draggable
			bounds='#devsktop-bounds'
			grid={[25, 25]}
			position={position}
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
