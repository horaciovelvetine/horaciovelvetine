import type { IconProps } from '../../types';

/**
 * Menu Bars Icon Component
 *
 * A customizable menu bars icon SVG component that renders a hamburger menu icon.
 * Uses Heroicons bars-3 icon with configurable size, styling, and accessibility options.
 * Commonly used for mobile navigation menus, sidebar toggles, and other menu-related interfaces.
 *
 * @param {IconProps} props - The props for the MenuBarsIcon component
 * @param {string} [props.size='size-6'] - Tailwind CSS size class for the icon dimensions
 * @param {string} [props.classes=' '] - Additional CSS classes to apply to the icon
 * @param {boolean} [props.ariaHidden=false] - Whether the icon should be hidden from screen readers
 */

export function MenuBarsIcon({ size = 'size-6', classes = ' ', ariaHidden = false }: IconProps) {
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
				d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
			/>
		</svg>
	);
}
