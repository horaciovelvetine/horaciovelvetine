import type { SiteSettings } from '../site/site-settings';

/**
 * Interface representing the global site context
 *
 * Provides application-wide state and configuration data that needs to be accessible
 * throughout the component tree. Contains site-level settings and preferences that
 * affect the overall behavior and appearance of the application.
 *
 * @interface
 * @property {SiteSettings} siteSettings - Configuration object containing site-wide settings and preferences
 */
export interface SiteContext {
	siteSettings: SiteSettings;
}
