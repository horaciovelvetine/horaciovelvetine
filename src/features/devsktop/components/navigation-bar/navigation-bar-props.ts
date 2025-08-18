import type { SiteSettings, WindowManager } from '../../../../types';

/**
 * Props for the NavigationBar component that renders at the top of the screen
 * Provides access to window management functionality and site-wide settings
 *
 * @interface NavigationBarProps
 * @property {SiteSettings} siteSettings - Global site settings including clock display settings, theme configuration, and client dimensions
 * @property {WindowManager} windowManager - Window manager instance for handling navigation bar menu items and window operations
 */
export interface NavigationBarProps {
	siteSettings: SiteSettings;
	windowManager: WindowManager;
}
