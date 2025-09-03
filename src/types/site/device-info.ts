/**
 * Interface representing detailed device characteristics
 *
 * Provides comprehensive information about the client device for advanced
 * customization and feature detection beyond basic mobile/desktop classification.
 *
 * @interface
 * @property {boolean} isSafariBrowser - Whether the browser is Safari
 * @property {boolean} isAppleDevice - Whether the device is manufactured by Apple
 * @property {boolean} isTouchDevice - Whether the device supports touch input
 * @property {boolean} isMobileUserAgent - Whether the user agent indicates a mobile device
 * @property {'portrait' | 'landscape'} orientation - Current device orientation
 */
export interface DeviceInfo {
	isSafariBrowser: boolean;
	isAppleDevice: boolean;
	isTouchDevice: boolean;
	isMobileUserAgent: boolean;
	orientation: 'portrait' | 'landscape';
}
