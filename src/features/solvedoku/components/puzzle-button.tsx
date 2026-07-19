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
			className={`rounded-xl border border-white/10 px-3 py-2 text-center tracking-tight font-semibold text-white shadow-lg shadow-black/20 ${bgColorClass} transition-all ${isDisabled ? '' : 'duration-100 hover:-translate-y-0.5 hover:scale-[1.02]'}`}>
			{Icon ?
				<Icon size='w-6 xs:w-8 sm:w-9' />
				: <p>{text}</p>}
		</button>
	);
}
