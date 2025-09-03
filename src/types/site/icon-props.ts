/**
 * Interface representing props for icon components
 *
 * Provides configuration options for styling and accessibility of icon elements.
 * Commonly used across icon components to ensure consistent API and behavior.
 *
 * @interface
 * @property {string} [size] - Optional size specification for the icon using tailwind 'size-x' format
 * @property {string} [classes] - Optional additional TailwindCSS classes to apply to the icon element
 * @property {boolean} [ariaHidden] - Optional flag to control aria-hidden attribute for accessibility
 */

export interface IconProps {
	size?: string;
	classes?: string;
	ariaHidden?: boolean;
	renderWithAppleCompatability?: boolean;
}
