import { useState } from 'react';
import type { Dimensions, ManagedWindow, Position, WindowIDs, WindowRect } from '../../types';

interface ManagedWindowStateOptions {
	id: WindowIDs;
	title: string;
	defaultSize: Dimensions;
	minSize: Dimensions;
	maxSize?: Dimensions;
	preferredPosition: Position;
	isShownInitially?: boolean;
	isFocusedInitially?: boolean;
	initialStackOrder?: number;
}

type ManagedWindowStateFields = Pick<
	ManagedWindow,
	| 'id'
	| 'title'
	| 'stackOrder'
	| 'setStackOrder'
	| 'preferredPosition'
	| 'position'
	| 'setPosition'
	| 'defaultSize'
	| 'size'
	| 'setSize'
	| 'minSize'
	| 'maxSize'
	| 'isShown'
	| 'setIsShown'
	| 'isFocused'
	| 'setIsFocused'
	| 'isMinimized'
	| 'setIsMinimized'
	| 'isZoomed'
	| 'setIsZoomed'
	| 'restoreRect'
	| 'setRestoreRect'
	| 'hasBeenPlaced'
	| 'setHasBeenPlaced'
>;

export function useManagedWindowState(
	options: ManagedWindowStateOptions
): ManagedWindowStateFields {
	const [stackOrder, setStackOrder] = useState(options.initialStackOrder ?? 0);
	const [position, setPosition] = useState<Position>(options.preferredPosition);
	const [size, setSize] = useState<Dimensions>(options.defaultSize);
	const [isShown, setIsShown] = useState(Boolean(options.isShownInitially));
	const [isFocused, setIsFocused] = useState(Boolean(options.isFocusedInitially));
	const [isMinimized, setIsMinimized] = useState(false);
	const [isZoomed, setIsZoomed] = useState(false);
	const [restoreRect, setRestoreRect] = useState<WindowRect | null>(null);
	const [hasBeenPlaced, setHasBeenPlaced] = useState(
		Boolean(options.isShownInitially)
	);

	return {
		id: options.id,
		title: options.title,
		stackOrder,
		setStackOrder,
		preferredPosition: options.preferredPosition,
		position,
		setPosition,
		defaultSize: options.defaultSize,
		size,
		setSize,
		minSize: options.minSize,
		maxSize: options.maxSize,
		isShown,
		setIsShown,
		isFocused,
		setIsFocused,
		isMinimized,
		setIsMinimized,
		isZoomed,
		setIsZoomed,
		restoreRect,
		setRestoreRect,
		hasBeenPlaced,
		setHasBeenPlaced,
	};
}
