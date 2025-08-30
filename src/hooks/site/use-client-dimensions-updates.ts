import { useEffect, useState } from 'react';
import type { Dimensions } from '../../types';

/**
 * Custom hook that tracks window dimensions and provides real-time updates when the window is resized.
 *
 * This hook monitors changes to the browser window dimensions and returns the current width and height.
 * It uses ResizeObserver when available for better performance, falling back to the traditional
 * window resize event listener for broader compatibility. The hook handles SSR scenarios by
 * checking for window availability and providing safe default values.
 *
 * Features:
 * - Real-time dimension updates on window resize
 * - ResizeObserver support for improved performance when available
 * - Fallback to window resize events for broader browser compatibility
 * - SSR-safe with proper window availability checks
 * - Automatic cleanup of event listeners and observers
 * - Initial dimensions set immediately on mount
 *
 * @returns {Dimensions} Object containing current window dimensions
 * @returns {number} returns.width - Current window inner width in pixels
 * @returns {number} returns.height - Current window inner height in pixels
 */

export function useClientDimensionsUpdates(): Dimensions {
	const [clientDimensions, SetClientDimensions] = useState<Dimensions>(() => {
		if (typeof window !== 'undefined') {
			return { width: window.innerWidth, height: window.innerHeight };
		}
		return { width: 0, height: 0 };
	});

	useEffect(() => {
		const handleResize = () => {
			SetClientDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		// Try to use ResizeObserver if available, fallback to window resize event
		if (typeof ResizeObserver !== 'undefined') {
			const resizeObserver = new ResizeObserver(() => {
				handleResize();
			});

			resizeObserver.observe(document.documentElement);
			return () => {
				resizeObserver.disconnect();
			};
		} else {
			window.addEventListener('resize', handleResize);
			return () => {
				window.removeEventListener('resize', handleResize);
			};
		}
	}, []);

	return clientDimensions;
}
