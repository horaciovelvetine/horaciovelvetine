import type { Dispatch, SetStateAction } from "react";
import type { Position } from "./position";
import type { NavBarMenuParent } from "./nav-bar-menu-parent";
import type { WindowIDs } from "./window-ids";

export interface ManagedWindow {
  id: WindowIDs,
  title: string,
  position: Position
  setPosition: Dispatch<SetStateAction<Position>>
  zIndex: string
  setZIndex: Dispatch<SetStateAction<string>>;
  navBarMenuItems: (openWindowByID: (windowID: WindowIDs) => void) => NavBarMenuParent[]
}
