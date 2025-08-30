import type { Dimensions } from '../../types';

/**
 * Calculates the appropriate canvas dimensions based on mobile compatibility and client dimensions
 * @param clientDimensions - The client viewport dimensions
 * @param useMobileCompatability - Whether mobile compatibility mode is enabled
 * @returns Dimensions object with width and height properties for the canvas
 */
export function setupCanvasDimensions(
	clientDimensions: Dimensions,
	useMobileCompatability: boolean
) {
	return useMobileCompatability ?
		{
			width: clientDimensions.width - 24,
			height: clientDimensions.height - 125,
		}
		: { width: 740, height: 560 };
}
