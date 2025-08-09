import { tailwindBGColors } from "../../../../functions";
import type { Colors } from "../../../../types";

interface GameMenuButtonProps {
  accentColor: Colors;
  buttonTitle: string;
  clickHandler: () => void;
  buttonText: string;
  isDisabled?: boolean;
}

export function GameMenuButton({
  accentColor,
  buttonTitle,
  clickHandler,
  buttonText,
  isDisabled = false,
}: GameMenuButtonProps) {
  return (
    <li className='flex w-full justify-center'>
      <button
        type='button'
        title={buttonTitle}
        disabled={isDisabled}
        className={`border border-stone-300/50 rounded-lg py-0.5 w-full xs:w-1/2 ${tailwindBGColors[accentColor]} ${isDisabled ? 'brightness-45' : ''}`}
        onClick={clickHandler}>
        {buttonText}
      </button>
    </li>
  );
}