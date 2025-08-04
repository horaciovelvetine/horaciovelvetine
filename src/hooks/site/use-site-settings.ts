import { useState } from "react";
import type { Colors, SiteSettings } from "../../types";
import { useClientDeviceCompatibilityDetails } from "./use-client-device-compatibility-details";
import { useClockDisplaySettings } from "./use-clock-display-settings";

export function useSiteSettings(): SiteSettings {
  const [accentColor, setAccentColor] = useState<Colors>('blue');
  const clockDisplaySettings = useClockDisplaySettings();
  const { clientDimensions, useMobileCompatability } = useClientDeviceCompatibilityDetails();
  return {
    clientDimensions,
    accentColor,
    setAccentColor,
    useMobileCompatability,
    clockDisplaySettings
  }
}