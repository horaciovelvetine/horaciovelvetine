import type { Dimensions } from '../../types';

/**
 * Calculates the appropriate canvas dimensions based on mobile compatibility and client dimensions
 * @param clientDimensions - The client viewport dimensions
 * @param useMobileCompatibility - Whether mobile compatibility mode is enabled
 * @returns Dimensions object with width and height properties for the canvas
 */
export function setupCanvasDimensions(
	clientDimensions: Dimensions,
	useMobileCompatibility: boolean
) {
	const availableWidth = Math.max(
		320,
		clientDimensions.width - (useMobileCompatibility ? 20 : 24)
	);
	const availableHeight = Math.max(
		240,
		clientDimensions.height - (useMobileCompatibility ? 20 : 24)
	);
	const aspectRatio = 4 / 3;

	let width = availableWidth;
	let height = Math.round(width / aspectRatio);

	if (height > availableHeight) {
		height = availableHeight;
		width = Math.round(height * aspectRatio);
	}

	return {
		width,
		height,
	};
}
