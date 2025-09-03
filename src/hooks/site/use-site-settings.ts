import { useState } from "react";
import type { Colors, SiteSettings } from "../../types";

import { useClockDisplaySettings } from "./use-clock-display-settings";
import { useClientDeviceCompatibilityDetails } from "./use-client-device-compatibility-details";

/**
 * Custom hook that manages global site settings and configuration.
 * 
 * Combines various site-wide settings including theme colors, clock display preferences,
 * and client device compatibility information into a unified settings object.
 * 
 * @returns {SiteSettings} An object containing:
 *   - accentColor: Current theme accent color
 *   - setAccentColor: Function to update the accent color
 *   - useMobileCompatability: Boolean indicating if mobile compatibility mode is enabled
 *   - clockDisplaySettings: Configuration object for clock display preferences
 */

export function useSiteSettings(): SiteSettings {
  const [accentColor, setAccentColor] = useState<Colors>('blue');
  const clockDisplaySettings = useClockDisplaySettings();
  const { useMobileCompatibility, deviceInfo } = useClientDeviceCompatibilityDetails();

  return {
    accentColor,
    setAccentColor,
    useMobileCompatibility,
    deviceInfo,
    clockDisplaySettings
  }
}