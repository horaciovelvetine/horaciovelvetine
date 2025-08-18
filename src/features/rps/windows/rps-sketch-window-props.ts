import type { RPSWindowState, SiteSettings } from '../../../types';

/**
 * The props needed to be passed to the { @see RPSSketchWindow }
 */
export interface RPSSketchWindowProps {
	windowState: RPSWindowState;
	siteSettings: SiteSettings;
}
