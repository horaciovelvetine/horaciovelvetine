import type { IconProps } from '../../types';

/**
 * Close Icon Component
 *
 * A customizable close/X icon SVG component that renders a close button icon.
 * Uses Heroicons close (X) icon with configurable size, styling, and accessibility options.
 * Commonly used in modal dialogs, notifications, and other dismissible UI elements.
 *
 * @param {IconProps} props - The props for the CloseIcon component
 * @param {string} [props.size='size-6'] - Tailwind CSS size class for the icon dimensions
 * @param {string} [props.classes=' '] - Additional CSS classes to apply to the icon
 * @param {boolean} [props.ariaHidden=false] - Whether the icon should be hidden from screen readers
 */
export function CloseIcon({
	size = 'size-6',
	classes = ' ',
	ariaHidden = false,
}: IconProps) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='currentColor'
			aria-hidden={ariaHidden}
			className={`${size} ${classes}`}>
			<path
				fillRule='evenodd'
				d='M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z'
				clipRule='evenodd'
			/>
		</svg>
	);
}
