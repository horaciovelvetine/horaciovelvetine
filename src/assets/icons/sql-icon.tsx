import type { IconProps } from '../../types';

export function SQLIcon({
	size = 'size-6',
	classes = ' ',
	ariaHidden = false,
}: IconProps) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 128 128'
			aria-hidden={ariaHidden}
			className={`${size} ${classes}`}>
			<text
				x='50%'
				y='50%'
				dominantBaseline='middle'
				textAnchor='middle'
				fontSize='72'
        fontWeight='1000'
				letterSpacing='-.10em'
				fontFamily='monospace, sans-serif'
				fill='currentColor'>
				SQL
			</text>
		</svg>
	);
}
