import type { Colors } from '../../../../../../types';

/**
 * Props interface for the GameMenuButton component
 *
 * @interface GameMenuButtonProps
 * @property {Colors} accentColor - The theme color to use for the button background
 * @property {string} buttonTitle - The tooltip text shown on hover
 * @property {() => void} clickHandler - Function called when button is clicked
 * @property {string} buttonText - Text displayed inside the button
 * @property {boolean} [isDisabled] - Whether the button is disabled (optional, defaults to false)
 */
export interface GameMenuButtonProps {
	accentColor: Colors;
	buttonTitle: string;
	clickHandler: () => void;
	buttonText: string;
	isDisabled?: boolean;
}
