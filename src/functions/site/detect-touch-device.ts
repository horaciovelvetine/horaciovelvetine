/**
 * Detects if the current device supports touch input
 *
 * This function checks for touch capabilities using two methods:
 * - The presence of 'ontouchstart' event in the window object
 * - The maxTouchPoints property which indicates the maximum number of simultaneous touch points
 *
 * @returns {boolean} True if the device supports touch input, false otherwise
 */

export function detectTouchDevice(): boolean {
	return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}
