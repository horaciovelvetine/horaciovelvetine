import type { SolvedokuWindowState } from "../solvedoku/solvedoku-window-state";
import type { ManagedWindow } from "./managed-window";
import type { NavBarMenuParent } from "./nav-bar-menu-parent";

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
  focusWindowByID: (windowID: string) => void;
  closeWindowByID: (windowID: string) => void
  openWindowByID: (windowID: string) => void
}