import type { IconProps } from '../../types';

/**
 * LinkedIn Icon Component
 *
 * A customizable LinkedIn logo icon SVG component that renders the official LinkedIn brand icon.
 * Uses the LinkedIn brand SVG with configurable size, styling, and accessibility options.
 * Commonly used in social media links, contact sections, and professional profile displays.
 *
 * @param {IconProps} props - The props for the LinkedInIcon component
 * @param {string} [props.size='size-6'] - Tailwind CSS size class for the icon dimensions
 * @param {string} [props.classes=' '] - Additional CSS classes to apply to the icon
 * @param {boolean} [props.ariaHidden=false] - Whether the icon should be hidden from screen readers
 */

export function LinkedInIcon({
	size = 'size-6',
	classes = ' ',
	ariaHidden = false,
}: IconProps) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 128 128'
			fill='currentColor'
			aria-hidden={ariaHidden}
			className={`${size} ${classes}`}>
			<path d='M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z' />
		</svg>
	);
}
