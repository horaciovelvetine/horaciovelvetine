import type { Dimensions, Position, WindowRect } from '../../types';

export const DEVSKTOP_NAVBAR_HEIGHT = 36;
export const DEVSKTOP_DOCK_SAFE_AREA = 112;
export const WINDOW_EDGE_MARGIN = 20;
export const WINDOW_CASCADE_OFFSET_X = 36;
export const WINDOW_CASCADE_OFFSET_Y = 28;

interface WindowPlacementCandidate {
	position: Position;
	overlapArea: number;
	distanceFromPreferred: number;
}

function clamp(value: number, min: number, max: number) {
	return Math.min(Math.max(value, min), max);
}

export function createWindowRect(position: Position, size: Dimensions): WindowRect {
	return {
		x: position.x,
		y: position.y,
		width: size.width,
		height: size.height,
	};
}

export function getDesktopBounds(clientDimensions: Dimensions): Dimensions {
	return {
		width: clientDimensions.width,
		height: Math.max(
			320,
			clientDimensions.height - DEVSKTOP_NAVBAR_HEIGHT - DEVSKTOP_DOCK_SAFE_AREA
		),
	};
}

export function clampWindowSize(
	size: Dimensions,
	bounds: Dimensions,
	minSize: Dimensions,
	maxSize?: Dimensions
): Dimensions {
	const maxWidth = Math.max(minSize.width, Math.min(bounds.width - WINDOW_EDGE_MARGIN * 2, maxSize?.width ?? Number.POSITIVE_INFINITY));
	const maxHeight = Math.max(minSize.height, Math.min(bounds.height - WINDOW_EDGE_MARGIN * 2, maxSize?.height ?? Number.POSITIVE_INFINITY));

	return {
		width: clamp(size.width, minSize.width, maxWidth),
		height: clamp(size.height, minSize.height, maxHeight),
	};
}

export function clampWindowPosition(
	position: Position,
	size: Dimensions,
	bounds: Dimensions
): Position {
	const maxX = Math.max(WINDOW_EDGE_MARGIN, bounds.width - size.width - WINDOW_EDGE_MARGIN);
	const maxY = Math.max(WINDOW_EDGE_MARGIN, bounds.height - size.height - WINDOW_EDGE_MARGIN);

	return {
		x: clamp(position.x, WINDOW_EDGE_MARGIN, maxX),
		y: clamp(position.y, WINDOW_EDGE_MARGIN, maxY),
	};
}

function getRectOverlapArea(a: WindowRect, b: WindowRect) {
	const overlapWidth = Math.max(
		0,
		Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x)
	);
	const overlapHeight = Math.max(
		0,
		Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y)
	);

	return overlapWidth * overlapHeight;
}

export function resolveInitialWindowPlacement(args: {
	size: Dimensions;
	bounds: Dimensions;
	preferredPosition: Position;
	visibleWindows: WindowRect[];
}): Position {
	const { size, bounds, preferredPosition, visibleWindows } = args;
	const clampedPreferred = clampWindowPosition(preferredPosition, size, bounds);
	const maxX = Math.max(
		WINDOW_EDGE_MARGIN,
		bounds.width - size.width - WINDOW_EDGE_MARGIN
	);
	const maxY = Math.max(
		WINDOW_EDGE_MARGIN,
		bounds.height - size.height - WINDOW_EDGE_MARGIN
	);

	const columns =
		Math.max(
			1,
			Math.floor((maxX - WINDOW_EDGE_MARGIN) / WINDOW_CASCADE_OFFSET_X) + 1
		) || 1;
	const rows =
		Math.max(
			1,
			Math.floor((maxY - WINDOW_EDGE_MARGIN) / WINDOW_CASCADE_OFFSET_Y) + 1
		) || 1;

	const candidateMap = new Map<string, WindowPlacementCandidate>();
	const addCandidate = (position: Position) => {
		const clampedPosition = clampWindowPosition(position, size, bounds);
		const key = `${clampedPosition.x}:${clampedPosition.y}`;
		if (candidateMap.has(key)) return;

		const candidateRect = createWindowRect(clampedPosition, size);
		const overlapArea = visibleWindows.reduce((total, windowRect) => {
			return total + getRectOverlapArea(candidateRect, windowRect);
		}, 0);
		const distanceFromPreferred =
			Math.abs(clampedPosition.x - clampedPreferred.x) +
			Math.abs(clampedPosition.y - clampedPreferred.y);

		candidateMap.set(key, {
			position: clampedPosition,
			overlapArea,
			distanceFromPreferred,
		});
	};

	addCandidate(clampedPreferred);

	for (let row = 0; row < rows; row += 1) {
		for (let column = 0; column < columns; column += 1) {
			addCandidate({
				x: WINDOW_EDGE_MARGIN + column * WINDOW_CASCADE_OFFSET_X,
				y: WINDOW_EDGE_MARGIN + row * WINDOW_CASCADE_OFFSET_Y,
			});
		}
	}

	return [...candidateMap.values()].sort((a, b) => {
		if (a.overlapArea !== b.overlapArea) {
			return a.overlapArea - b.overlapArea;
		}

		return a.distanceFromPreferred - b.distanceFromPreferred;
	})[0]?.position ?? clampedPreferred;
}

export function getZoomedWindowRect(
	bounds: Dimensions,
	minSize: Dimensions,
	maxSize?: Dimensions
): WindowRect {
	const size = clampWindowSize(
		{
			width: bounds.width - WINDOW_EDGE_MARGIN * 2,
			height: bounds.height - WINDOW_EDGE_MARGIN * 2,
		},
		bounds,
		minSize,
		maxSize
	);

	return {
		x: WINDOW_EDGE_MARGIN,
		y: WINDOW_EDGE_MARGIN,
		width: size.width,
		height: size.height,
	};
}
