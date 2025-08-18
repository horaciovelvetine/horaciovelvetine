import type { SiteSettings, WindowManager } from '../../../../types';

/**
 * Props for the DevsktopIcons component that renders application icons on the desktop
 * Provides access to window management functionality and site-wide settings for icon positioning
 *
 * @interface DevsktopIconsProps
 * @property {SiteSettings} siteSettings - Global site settings including client dimensions for calculating icon positions and theme configuration
 * @property {WindowManager} windowManager - Window manager instance for opening windows when icons are clicked
 */
export interface DevsktopIconsProps {
	siteSettings: SiteSettings;
	windowManager: WindowManager;
}
