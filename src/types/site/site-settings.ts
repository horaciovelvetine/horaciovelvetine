import type { Dispatch, SetStateAction } from 'react';
import type { ClockDisplaySettings } from './clock-display-settings';
import type { Colors } from './colors';
import type { DeviceInfo } from './device-info';

/**
 * Interface representing the global site configuration and settings
 *
 * Provides comprehensive site-wide configuration options that control the overall
 * appearance, behavior, and user experience of the application. Contains settings
 * for theming, display preferences, responsiveness, and various UI components.
 *
 * @interface
 * @property {Colors} accentColor - The primary accent color used throughout the site's UI
 * @property {Dispatch<SetStateAction<Colors>>} setAccentColor - Function to update the site's accent color
 * @property {boolean} useMobileCompatibility - Flag indicating whether mobile compatibility mode is enabled
 * @property {ClockDisplaySettings} clockDisplaySettings - Configuration settings for clock display components
 * @property {DeviceInfo} deviceInfo - Information about the client device and its capabilities
 */
export interface SiteSettings {
	accentColor: Colors;
	setAccentColor: Dispatch<SetStateAction<Colors>>;
	useMobileCompatibility: boolean;
	clockDisplaySettings: ClockDisplaySettings;
	deviceInfo: DeviceInfo;
}
