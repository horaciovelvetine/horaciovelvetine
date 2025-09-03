/**
 * Detects if the current device is using a mobile user agent
 *
 * This function analyzes the browser's user agent string to identify mobile devices
 * including Android phones, iOS devices, BlackBerry, Windows Mobile, and other
 * mobile platforms.
 *
 * @returns {boolean} True if the user agent indicates a mobile device, false otherwise
 */
export function detectMobileUserAgent(): boolean {
	const userAgent = navigator.userAgent.toLowerCase();
	return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
		userAgent
	);
}
