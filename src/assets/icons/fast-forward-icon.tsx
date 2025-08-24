import type { IconProps } from '../../types';

/**
 * Fast Forward Icon Component
 *
 * A customizable fast forward icon SVG component that renders a media control icon.
 * Uses Heroicons fast forward icon with configurable size, styling, and accessibility options.
 * Commonly used in media players, video controls, and other interfaces requiring skip/advance functionality.
 *
 * @param {IconProps} props - The props for the FastForwardIcon component
 * @param {string} [props.size='size-6'] - Tailwind CSS size class for the icon dimensions
 * @param {string} [props.classes=' '] - Additional CSS classes to apply to the icon
 * @param {boolean} [props.ariaHidden=false] - Whether the icon should be hidden from screen readers
 */

export function FastForwardIcon({
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
			<path d='M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z' />
		</svg>
	);
}
