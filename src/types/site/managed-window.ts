import type { Dispatch, SetStateAction } from "react";
import type { Position } from "./position";
import type { NavBarMenuParent } from "./nav-bar-menu-parent";

export interface ManagedWindow {
  id: string,
  title: string,
  position: Position
  setPosition: Dispatch<SetStateAction<Position>>
  zIndex: string
  setZIndex: Dispatch<SetStateAction<string>>;
  navBarMenuItems: (openWindowByID: (windowID: string) => void) => NavBarMenuParent[]
}
