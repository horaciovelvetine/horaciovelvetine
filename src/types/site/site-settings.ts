import type { Dispatch, SetStateAction } from 'react';
import type { ClockDisplaySettings } from './clock-display-settings';
import type { Colors } from './colors';
import type { Dimensions } from './dimensions';

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
 * @property {Dimensions} clientDimensions - Current viewport/client dimensions for responsive design
 * @property {boolean} useMobileCompatability - Flag indicating whether mobile compatibility mode is enabled
 * @property {ClockDisplaySettings} clockDisplaySettings - Configuration settings for clock display components
 */
export interface SiteSettings {
	accentColor: Colors;
	setAccentColor: Dispatch<SetStateAction<Colors>>;
	clientDimensions: Dimensions;
	useMobileCompatability: boolean;
	clockDisplaySettings: ClockDisplaySettings;
}
