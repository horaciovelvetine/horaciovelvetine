import type { Dispatch, SetStateAction } from 'react';
import type { ClockDisplaySettings } from './clock-display-settings';
import type { Colors } from './colors';
import type { Dimensions } from './dimensions';

export interface SiteSettings {
  accentColor: Colors;
  setAccentColor: Dispatch<SetStateAction<Colors>>;
  clientDimensions: Dimensions;
  useMobileCompatability: boolean
  clockDisplaySettings: ClockDisplaySettings;
}
