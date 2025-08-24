import type { ReactNode } from 'react';
import type { Colors, IconProps } from '../../../../types';

/**
 * Props interface for the PuzzleButton component
 *
 * Defines the configuration options for a reusable puzzle button that can display
 * either an icon or text content with consistent styling and interactive behavior.
 *
 * @interface PuzzleButtonProps
 * @property {string} props.title - Tooltip text shown on hover
 * @property {({ size, classes }: IconProps) => JSX.Element} [props.Icon] - Optional icon component to display
 * @property {string} [props.text] - Optional text to display if no icon provided
 * @property {() => void} props.onClickFunction - Handler called when button is clicked
 * @property {boolean} props.isDisabled - Whether the button is disabled
 * @property {Colors} props.accentColor - Theme color used for button background
 */
export interface PuzzleButtonProps {
	title: string;
	Icon?: ({ size, classes }: IconProps) => ReactNode;
	text?: string;
	onClickFunction: () => void;
	isDisabled: boolean;
	accentColor: Colors;
}
