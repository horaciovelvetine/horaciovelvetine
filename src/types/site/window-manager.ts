import type { SolvedokuWindowState } from "../solvedoku/solvedoku-window-state";
import type { ManagedWindow } from "./managed-window";
import type { NavBarMenuParent } from "./nav-bar-menu-parent";
import type { WindowIDs } from "./window-ids";

export interface WindowManager {
  // WINDOWS
  devsktopWindow: ManagedWindow,
  aboutThisSiteWindow: ManagedWindow,
  solvedokuWindow: SolvedokuWindowState,
  aboutSolvedokuWindow: ManagedWindow
  // WINDOW MANAGEMENT FUNC
  focusedWindow: ManagedWindow,
  openWindowIDs: string[],
  navBarMenuItems: NavBarMenuParent[],
  focusWindowByID: (windowID: WindowIDs) => void;
  closeWindowByID: (windowID: WindowIDs) => void
  openWindowByID: (windowID: WindowIDs) => void
}