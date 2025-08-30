import type { ReactNode } from 'react';
import { TailwindBGs500 } from '../../../functions';
import type { Colors, IconProps } from '../../../types';

export interface PuzzleButtonProps {
	title: string;
	Icon?: ({ size, classes }: IconProps) => ReactNode;
	text?: string;
	onClickFunction: () => void;
	isDisabled: boolean;
	accentColor: Colors;
}

/**
 * A reusable button component for puzzle-related actions
 * Supports both icon and text content with consistent styling
 * Includes hover animations and disabled states
 *
 * @param {string} props.title - Tooltip text shown on hover
 * @param {({ size, classes }: IconProps) => JSX.Element} [props.Icon] - Optional icon component to display
 * @param {string} [props.text] - Optional text to display if no icon provided
 * @param {() => void} props.onClickFunction - Handler called when button is clicked
 * @param {boolean} props.isDisabled - Whether the button is disabled
 * @param {Colors} props.accentColor - Theme color used for button background
 */
export function PuzzleButton({
	title,
	Icon,
	text,
	onClickFunction,
	isDisabled,
	accentColor,
}: PuzzleButtonProps) {
	const bgColorClass = `${TailwindBGs500[accentColor]} ${isDisabled ? 'brightness-45' : ''}`;

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
