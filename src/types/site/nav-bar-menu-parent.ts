import type { NavBarMenuChild } from "./nav-bar-menu-child";

export interface NavBarMenuParent {
  key: string;
  navbarDisplayText?: string;
  isAppTitledDisplayText?: boolean;
  navbarDisplayIcon?: string;
  dropdownOptions: NavBarMenuChild[];
}
