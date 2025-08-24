import type { IconProps } from '../../types';

/**
 * Question Mark Icon Component
 *
 * A customizable question mark icon SVG component that renders a help/info icon.
 * Uses Heroicons question mark circle icon with configurable size, styling, and accessibility options.
 * Commonly used for help buttons, tooltips, FAQ sections, and other informational interfaces.
 *
 * @param {IconProps} props - The props for the QuestionMarkIcon component
 * @param {string} [props.size='size-6'] - Tailwind CSS size class for the icon dimensions
 * @param {string} [props.classes=' '] - Additional CSS classes to apply to the icon
 * @param {boolean} [props.ariaHidden=false] - Whether the icon should be hidden from screen readers
 */
export function QuestionMarkIcon({
	size = 'size-6',
	classes = ' ',
	ariaHidden = false,
}: IconProps) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			aria-hidden={ariaHidden}
			stroke='currentColor'
			className={`${size} ${classes}`}>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z'
			/>
		</svg>
	);
}
