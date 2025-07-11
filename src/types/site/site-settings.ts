import type { ClockDisplaySettings } from './clock-display-settings';
import type { Dimensions } from './dimensions';

export interface SiteSettings {
  clientDimensions: Dimensions;
  useMobileCompatability: boolean
  clockDisplaySettings: ClockDisplaySettings;
}
