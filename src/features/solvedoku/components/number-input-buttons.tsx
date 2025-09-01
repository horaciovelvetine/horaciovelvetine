import { useCallback } from 'react';
import type { Colors, SolvedokuGameState } from '../../../types';
import { TailwindBGs500 } from '../../../functions';

interface NumberInputButtonsProps
	extends Pick<SolvedokuGameState, 'selectedCellID' | 'updateCellValue'> {
	accentColor: Colors;
}

/**
 * Renders a row of number input buttons (1-9) for selecting values to place in Sudoku cells
 *
 * Each button is styled consistently and becomes disabled when no cell is selected.
 * Buttons show hover effects and tooltips to guide usage.
 * Uses the provided accent color for theming.
 *
 * @param props - The component props
 * @param {Colors} props.accentColor - Theme color to use for button backgrounds
 * @param {string | null} props.selectedCellID - ID of currently selected cell, or null if none selected
 * @param {(cellID: string, value: string, isUserInput: boolean) => void} props.updateCellValue - Function to update a cell's value
 * @returns JSX element containing the number input buttons
 */
export function NumberInputButtons({
	accentColor,
	selectedCellID,
	updateCellValue,
}: NumberInputButtonsProps) {
	const handleInputClick = useCallback(
		(value: number) => {
			if (!selectedCellID) return;
			updateCellValue(selectedCellID, value.toString(), true);
		},
		[selectedCellID, updateCellValue]
	);

	const bgColorClass = `${TailwindBGs500[accentColor]} ${selectedCellID ? '' : 'brightness-45'}`;

	return (
		<ul className='flex w-full justify-center gap-0.5 xs:gap-1 my-1'>
			{[1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => (
				<li
					key={'input-'.concat(value.toString())}
					onClick={() => {
						handleInputClick(value);
					}}
					className='flex item-center justify-center'>
					<button
						type='button'
						disabled={!selectedCellID}
						title={
							selectedCellID ?
								'Place '.concat(value.toString()).concat(' in selected cell')
							:	'Select a cell to place a value'
						}
						className={`border border-stone-300/50 size-8 xs:size-12 rounded select-none font-semibold sm:font-bold xs:text-xl ${bgColorClass} ${!selectedCellID ? '' : 'duration-100 hover:-translate-y-1 hover:scale-105'}`}>
						{value}
					</button>
				</li>
			))}
		</ul>
	);
}
