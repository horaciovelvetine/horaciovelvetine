import type { IconProps } from '../../types';

/**
 * SearchIcon component that renders a magnifying glass search icon using SVG
 *
 * This icon component provides a magnifying glass symbol commonly used for search functionality.
 * The icon features a clean outline style with customizable size, styling, and accessibility options.
 * It uses Heroicons' search icon design with stroke-based rendering for crisp display at any size.
 *
 * @component
 * @param props - Icon component properties
 * @param props.size - Tailwind CSS size class for the icon dimensions (default: 'size-6')
 * @param props.classes - Additional CSS classes to apply for custom styling (default: '')
 * @param props.ariaHidden - Whether the icon should be hidden from screen readers (default: false)
 */

export function SearchIcon({
	size = 'size-6',
	classes = '',
	ariaHidden = false,
}: IconProps) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			stroke-width='1.5'
			stroke='currentColor'
			aria-hidden={ariaHidden}
			className={`${size} ${classes}`}>
			<path
				stroke-linecap='round'
				stroke-linejoin='round'
				d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
			/>
		</svg>
	);
}
