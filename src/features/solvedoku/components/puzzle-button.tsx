import type { JSX } from 'react';
import { tailwindBGColors } from '../../../functions';
import type { Colors, IconProps } from '../../../types';

interface PuzzleButtonProps {
	title: string;
	Icon?: ({ size, classes }: IconProps) => JSX.Element;
	text?: string;
	onClickFunction: () => void;
	isDisabled: boolean;
	accentColor: Colors;
}

export function PuzzleButton({
	title,
	Icon,
	text,
	onClickFunction,
	isDisabled,
	accentColor,
}: PuzzleButtonProps) {
	const bgColorClass =
		isDisabled ?
			`${tailwindBGColors[accentColor]} brightness-45`
			: tailwindBGColors[accentColor];

	return (
		<button
			type='button'
			onClick={onClickFunction}
			title={title}
			disabled={isDisabled}
			className={`border border-gray-300/50 rounded px-1 tracking-tighter font-semibold ${bgColorClass} xs:text-xl sm:text-3xl text-nowrap transition-all ${isDisabled ? '' : 'duration-100 hover:-translate-y-1 hover:scale-105'}`}>
			{Icon ?
				<Icon size='w-6 xs:w-9 sm:w-12' />
				: <p>{text}</p>}
		</button>
	);
}
