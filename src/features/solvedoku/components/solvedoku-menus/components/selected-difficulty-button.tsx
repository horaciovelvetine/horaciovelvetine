import type { Dispatch, SetStateAction } from 'react';
import { capitalize, TailwindBGs500 } from '../../../../../functions';
import type { Colors, PuzzleDifficulty } from '../../../../../types';

export interface SelectedDifficultyButtonProps {
	difficulty: PuzzleDifficulty;
	isSelected: boolean;
	onSelect: Dispatch<SetStateAction<PuzzleDifficulty>>;
	accentColor: Colors;
}

/**
 * A button component that displays and allows selection of a puzzle difficulty level
 * @param {PuzzleDifficulty} difficulty - The difficulty level this button represents
 * @param {boolean} props.isSelected - Whether this difficulty is currently selected
 * @param {Dispatch<SetStateAction<PuzzleDifficulty>>} props.onSelect - Function to update selected difficulty
 * @param {Colors} props.accentColor - The theme color to use for the button background
 */
export function SelectedDifficultyButton({
	difficulty,
	isSelected,
	onSelect,
	accentColor,
}: SelectedDifficultyButtonProps) {
	const handleClick = () => {
		if (isSelected) return;
		onSelect(difficulty);
	};

	return (
		<li
			onClick={handleClick}
			className={`border border-stone-300/50 rounded-lg mt-1 ${TailwindBGs500[accentColor]} ${isSelected ? '' : 'brightness-45'} md:px-2`}>
			<button
				type='button'
				className='px-2'>
				{capitalize(difficulty)}
			</button>
		</li>
	);
}
