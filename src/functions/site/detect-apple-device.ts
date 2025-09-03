/**
 * Detects if the current device is an Apple device (iPhone, iPad, Mac, etc.)
 *
 * @returns {boolean} True if the device is an Apple device, false otherwise
 */
export function detectAppleDevice(): boolean {
	const userAgent = navigator.userAgent.toLowerCase();

	// Check for iOS devices (iPhone, iPad, iPod)
	const isIOS = /iphone|ipad|ipod/.test(userAgent);
	// Check for macOS
	const isMacOS = /macintosh|mac os x/.test(userAgent);
	// Check for Apple Silicon Macs
	const isAppleSilicon = /arm64|apple/.test(userAgent);

	return isIOS || isMacOS || isAppleSilicon;
}
