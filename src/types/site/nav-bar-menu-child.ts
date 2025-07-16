/**
 * Subordinate menu item to the @see NavBarMenuParent - defines a selection in the NavBarMenu structure
 */
export interface NavBarMenuChild {
  key: string; //? for react...
  parentWindowID: string;
  titleText: string;
  hoverExplainerTitle?: string
  displaySectionHeader?: string;
  displayMenuBreakAfter?: boolean;
  displayKeyboardShortcut?: string,
  isDisabled?: boolean;
  onClickAction: () => void;
}