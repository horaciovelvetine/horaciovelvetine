import type { IconProps } from '../../types';

/**
 * Mail To Icon Component
 *
 * A customizable mail/email icon SVG component that renders an envelope icon.
 * Uses Heroicons envelope icon with configurable size, styling, and accessibility options.
 * Commonly used for email links, contact forms, messaging features, and communication interfaces.
 *
 * @param {IconProps} props - The props for the MailToIcon component
 * @param {string} [props.size='size-6'] - Tailwind CSS size class for the icon dimensions
 * @param {string} [props.classes=' '] - Additional CSS classes to apply to the icon
 * @param {boolean} [props.ariaHidden=false] - Whether the icon should be hidden from screen readers
 */

export function MailToIcon({
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
				d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
			/>
		</svg>
	);
}
