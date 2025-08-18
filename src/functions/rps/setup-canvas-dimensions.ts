import type { SiteSettings } from '../../types';

/**
 * Calculates the appropriate canvas dimensions based on site settings
 * @param siteSettings - The site settings containing mobile compatibility flag and client dimensions
 * @returns Dimensions object with width and height properties for the canvas
 */
export function setupCanvasDimensions(siteSettings: SiteSettings) {
	return siteSettings.useMobileCompatability ?
			{
				width: siteSettings.clientDimensions.width - 24,
				height: siteSettings.clientDimensions.height - 125,
			}
		:	{ width: 750, height: 560 };
}
