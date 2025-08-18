import type { IconProps } from '../../types';

/**
 * Eraser Icon Component
 *
 * A customizable eraser icon SVG component that renders an eraser/delete icon.
 * Uses Material Design eraser icon with configurable size, styling, and accessibility options.
 * Commonly used for delete, clear, or erase actions in drawing applications, forms, and editing interfaces.
 *
 * @param {IconProps} props - The props for the EraserIcon component
 * @param {string} [props.size='size-6'] - Tailwind CSS size class for the icon dimensions
 * @param {string} [props.classes=' '] - Additional CSS classes to apply to the icon
 * @param {boolean} [props.ariaHidden=false] - Whether the icon should be hidden from screen readers
 */
export function EraserIcon({
	size = 'size-6',
	classes = ' ',
	ariaHidden = false,
}: IconProps) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 -960 960 960'
			fill='currentColor'
			aria-hidden={ariaHidden}
			className={`${size} ${classes}`}>
			<path d='M678-220h203v60H618l60-60Zm-499 60-81-84q-18-17-17.5-41.5T97-327l458-498q16-17 40.57-17 24.56 0 41.43 17l205 215q17 17 18 42t-16 42L503-160H179Zm301-60 324-352-207-217-455 503 64 66h274Zm0-260Z' />
		</svg>
	);
}
