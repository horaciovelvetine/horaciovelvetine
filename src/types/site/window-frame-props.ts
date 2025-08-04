/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactNode } from "react";
import type { ManagedWindow } from "./managed-window";
import type { SiteSettings } from "./site-settings";
import type { WindowManager } from "./window-manager";

/**
 * Props for the { @see WindowFrame } wrapping the primary window component.
 */
export interface WindowFrameProps {
  window: ManagedWindow;
  windowManager: WindowManager;
  siteSettings: SiteSettings;
  Component: (args: any) => ReactNode;
}