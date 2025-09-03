/**
 * Interface representing a child menu item within a navigation bar menu structure
 *
 * Defines individual selectable items that appear as subordinate entries under a
 * NavBarMenuParent. These items provide the actual actionable functionality within
 * dropdown menus and navigation hierarchies.
 *
 * @interface
 * @property {string} key - Unique React key identifier for the menu item
 * @property {string} titleText - Display text shown for the menu item
 * @property {string} [hoverExplainerTitle] - Optional tooltip text shown on hover
 * @property {string} [displaySectionHeader] - Optional section header text for grouping items
 * @property {boolean} [displayMenuBreakAfter] - Optional flag to add visual separator after this item
 * @property {string} [displayKeyboardShortcut] - Optional keyboard shortcut text to display
 * @property {boolean} [isDisabled] - Optional flag to disable the menu item interaction
 * @property {() => void} onClickAction - Function to execute when the menu item is clicked
 */
export interface NavBarMenuChild {
	key: string; //? for react...
	titleText: string;
	hoverExplainer: string;
	displaySectionHeader?: string;
	displayMenuBreakAfter?: boolean;
	displayKeyboardShortcut?: string;
	isDisabled?: boolean;
	onClickAction: () => void;
}
