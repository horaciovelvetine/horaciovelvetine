import type { SiteSettings, SolvedokuWindowState } from '../../../types';

/**
 * Props needed to be passed to the { @see SolvedokuWindow }
 */
export interface SolvedokuWindowProps {
	windowState: SolvedokuWindowState;
	siteSettings: SiteSettings;
}
