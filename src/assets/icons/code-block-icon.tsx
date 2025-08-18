import type { IconProps } from '../../types';

/**
 * Code Block Icon Component
 *
 * A customizable code block icon SVG component that renders a coding/development icon.
 * Uses Heroicons code bracket icon with configurable size, styling, and accessibility options.
 * Commonly used to represent code blocks, programming content, or development-related features.
 *
 * @param {IconProps} props - The props for the CodeBlockIcon component
 * @param {string} [props.size='size-6'] - Tailwind CSS size class for the icon dimensions
 * @param {string} [props.classes=' '] - Additional CSS classes to apply to the icon
 * @param {boolean} [props.ariaHidden=false] - Whether the icon should be hidden from screen readers
 */
export function CodeBlockIcon({ size = 'size-6', classes = ' ', ariaHidden = false }: IconProps) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			aria-hidden={ariaHidden}
			className={`${size} ${classes}`}>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5'
			/>
		</svg>
	);
}
