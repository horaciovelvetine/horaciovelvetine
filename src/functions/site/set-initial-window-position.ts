import type { Position, SiteSettings } from "../../types";

const MINIMUM_WINDOW_FRAME_WIDTH = 760

export function setInitialWindowPosition({ clientDimensions, useMobileCompatability }: SiteSettings): Position {
  // Center window horizontally by subtracting half window width from half screen width
  const x = Math.max(0, (clientDimensions.width - MINIMUM_WINDOW_FRAME_WIDTH) / 2);

  // Center vertically by placing at 1/4 screen height for mobile, center for desktop
  const y = useMobileCompatability
    ? clientDimensions.height / 4
    : Math.max(0, clientDimensions.height / 3 - 200);

  return { x, y };
}