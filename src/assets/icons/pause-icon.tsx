import type { IconProps } from '../../types';

/**
 * Pause Icon Component
 *
 * A customizable pause icon SVG component that renders a media control pause icon.
 * Uses Heroicons pause icon with configurable size, styling, and accessibility options.
 * Commonly used in media players, audio controls, video interfaces, and other playback-related features.
 *
 * @param {IconProps} props - The props for the PauseIcon component
 * @param {string} [props.size='size-128'] - Tailwind CSS size class for the icon dimensions
 * @param {string} [props.classes=' '] - Additional CSS classes to apply to the icon
 * @param {boolean} [props.ariaHidden=false] - Whether the icon should be hidden from screen readers
 */
export function PauseIcon({
	size = 'size-128',
	classes = ' ',
	ariaHidden = false,
}: IconProps) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={4}
			aria-hidden={ariaHidden}
			stroke='currentColor'
			className={`${size} ${classes}`}>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M15.75 5.25v13.5m-7.5-13.5v13.5'
			/>
		</svg>
	);
}
