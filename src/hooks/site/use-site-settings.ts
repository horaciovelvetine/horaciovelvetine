import type { SiteSettings } from "../../types";
import { useClientDeviceCompatibilityDetails } from "./use-client-device-compatibility-details";
import { useClockDisplaySettings } from "./use-clock-display-settings";

export function useSiteSettings(): SiteSettings {
  const { clientDimensions, useMobileCompatability } = useClientDeviceCompatibilityDetails();
  return {
    clientDimensions,
    useMobileCompatability,
    clockDisplaySettings: useClockDisplaySettings()
  }
}