import { TailwindBGs500 } from '../../../../functions';
import type { Colors } from '../../../../types';

interface GameMenuButtonProps {
	accentColor: Colors;
	buttonTitle: string;
	clickHandler: () => void;
	buttonText: string;
	isDisabled?: boolean;
}

/**
 * A button component used in game menus that provides consistent styling and behavior
 * @param {Colors} props.accentColor - The theme color to use for the button background
 * @param {string} props.buttonTitle - The tooltip text shown on hover
 * @param {() => void} props.clickHandler - Function called when button is clicked
 * @param {string} props.buttonText - Text displayed inside the button
 * @param {boolean} [props.isDisabled=false] - Whether the button is disabled
 */
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
				className={`border border-stone-300/50 rounded-lg py-0.5 w-full xs:w-1/2 ${TailwindBGs500[accentColor]} ${isDisabled ? 'brightness-45' : ''}`}
				onClick={clickHandler}>
				{buttonText}
			</button>
		</li>
	);
}
