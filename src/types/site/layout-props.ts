import type { SiteSettings } from "./site-settings";
import type { WindowManager } from "./window-manager";

export interface LayoutProps {
  siteSettings: SiteSettings;
  windowManager: WindowManager;
}