import type { IconProps } from '../../types';

export function CodeBlockIcon({ size = 'size-6', classes = ' ' }: IconProps) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className={`${size} ${classes}`}>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5'
			/>
		</svg>
	);
}
