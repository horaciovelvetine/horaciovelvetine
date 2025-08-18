import type { Dispatch, SetStateAction } from 'react';
import type { Colors, PuzzleDifficulty } from '../../../../../../types';

/**
 * Props interface for the SelectedDifficultyButton component
 *
 * @interface SelectedDifficultyButtonProps
 * @property {PuzzleDifficulty} difficulty - The difficulty level this button represents
 * @property {boolean} isSelected - Whether this difficulty is currently selected
 * @property {Dispatch<SetStateAction<PuzzleDifficulty>>} onSelect - Function to update the selected difficulty
 * @property {Colors} accentColor - The theme color to use for the button background
 */
export interface SelectedDifficultyButtonProps {
  difficulty: PuzzleDifficulty;
  isSelected: boolean;
  onSelect: Dispatch<SetStateAction<PuzzleDifficulty>>;
  accentColor: Colors;
}
