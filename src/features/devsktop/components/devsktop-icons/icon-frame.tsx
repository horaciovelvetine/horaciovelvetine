/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import type { IconFrameProps } from './icon-frame-props';

export function IconFrame({
	Icon,
	label,
	onClickAction,
	initialPosition,
}: IconFrameProps) {
	const iconRef = useRef<any>(null);
	const [lastTap, setLastTap] = useState<number>(0);

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
			defaultPosition={initialPosition}
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
