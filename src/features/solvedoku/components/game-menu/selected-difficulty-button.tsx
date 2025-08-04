import type { Dispatch, SetStateAction } from "react";
import { tailwindBGColors } from "../../../../functions";
import type { Colors, PuzzleDifficulty } from "../../../../types";

interface SelectedDifficultyButtonProps {
  difficulty: PuzzleDifficulty;
  isSelected: boolean;
  onSelect: Dispatch<SetStateAction<PuzzleDifficulty>>;
  accentColor: Colors;
}

export function SelectedDifficultyButton({ difficulty, isSelected, onSelect, accentColor }: SelectedDifficultyButtonProps) {
  const difficultyText =
    difficulty.charAt(0).toUpperCase() + difficulty.slice(1).toLowerCase();

  const handleClick = () => {
    if (isSelected) return;
    onSelect(difficulty);
  };

  return (
    <li
      onClick={handleClick}
      className={`border border-stone-300/50 rounded-lg mt-1 ${tailwindBGColors[accentColor]} ${isSelected ? '' : 'brightness-45'} md:px-2`}>
      <button
        type='button'
        className='px-2'>
        {difficultyText}
      </button>
    </li>
  );
}