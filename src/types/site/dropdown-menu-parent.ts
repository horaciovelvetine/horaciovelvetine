import type { DropdownMenuOption } from "./dropdown-menu-option";

export interface DropdownMenuParent {
  readonly id: string;
  readonly title: string;
  readonly options: DropdownMenuOption[];
  readonly isSelfTitled?: boolean; // first menu printed, title text is 'EXTRA-BOLD'
}