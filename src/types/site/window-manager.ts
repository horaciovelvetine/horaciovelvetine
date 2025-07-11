import type { ManagedWindow } from "./managed-window";

export interface WindowManager {
  devsktopWindow: ManagedWindow,
  solvedokuWindow: ManagedWindow,
  focusedWindow: ManagedWindow,
  focusWindowByID: (windowID: string) => void;
  visibleWindows: ManagedWindow[],
  closeWindowByID: (windowID: string) => void
  openWindowByID: (windowID: string) => void
}