import type { Position, SiteSettings } from '../../types';

const MINIMUM_WINDOW_FRAME_WIDTH = 760;

/**
 * Calculates the initial position for a window based on site settings
 * Centers window horizontally and positions vertically based on mobile vs desktop
 * 
 * @param {SiteSettings} settings - Site configuration containing client dimensions and mobile compatibility flag
 * @param {Object} settings.clientDimensions - The width and height of the client viewport
 * @param {boolean} settings.useMobileCompatability - Whether mobile compatibility mode is enabled
 * @returns {Position} The calculated x,y coordinates for initial window position
 */

export function setInitialWindowPosition({
  clientDimensions,
  useMobileCompatability,
}: SiteSettings): Position {
  // Center window horizontally by subtracting half window width from half screen width
  const x = Math.max(
    0,
    (clientDimensions.width - MINIMUM_WINDOW_FRAME_WIDTH) / 2
  );

  // Center vertically by placing at 1/4 screen height for mobile, center for desktop +32px to accomodate the menu on desktop
  const y =
    useMobileCompatability ?
      (clientDimensions.height / 4)
      : Math.max(0, clientDimensions.height / 3 - 200) + 32;

  return { x, y };
}
