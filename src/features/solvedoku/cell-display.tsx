import type { ChangeEvent } from 'react';

import type { SolvedokuGameState } from '../../types';
import { isInSelectedSquare, parseFormattedCellIDString } from '../../functions';

interface CellProps
	extends Pick<
		SolvedokuGameState,
		'updateCellValue' | 'selectedCellID' | 'setSelectedCellID'
	> {
	value: string | null;
	cellID: string;
	colIndex: number; //? indeces are 0 based...
	rowIndex: number;
}

export function CellDisplay({
	value,
	cellID,
	colIndex,
	rowIndex,
	updateCellValue,
	selectedCellID,
	setSelectedCellID,
}: CellProps) {
	const [selectedRow, selectedCol] = parseFormattedCellIDString(selectedCellID);
	const isSelected = cellID === selectedCellID;
	const isRelatedToSelected =
		isSelected ||
		selectedRow === rowIndex || // Same row
		selectedCol === colIndex || // Same column
		isInSelectedSquare(selectedCellID, rowIndex, colIndex); // Same 3x3 square

	/**
	 * Handles number input validation and updates
	 * Only allows single digits 1-9
	 */
	function handleNumberInput(e: ChangeEvent<HTMLInputElement>) {
		const input = e.target.value;
		const lastCharacter = input.slice(-1);
		const numberValue = parseInt(lastCharacter);

		const isValidSudokuNumber =
			!isNaN(numberValue) && numberValue >= 1 && numberValue <= 9;

		if (isValidSudokuNumber) {
			updateCellValue(cellID, numberValue.toString());
		}
	}

	/**
	 * Toggles cell selection state
	 * Clicking selected cell deselects it, clicking unselected cell selects it
	 */
	function toggleCellSelection() {
		if (isSelected) {
			setSelectedCellID(null); // Deselect current cell
		} else {
			setSelectedCellID(cellID); // Select this cell
		}
	}

	/**
	 * Determines the border styling for the cell
	 */
	function getCellBorderStyle(): string {
		const hasThickRightBorder = colIndex === 2 || colIndex === 5;

		const selectionOutline =
			isSelected ?
				'outline-4 -outline-offset-2 outline-green-600'
				: 'border border-black';

		return selectionOutline + (hasThickRightBorder ? ' border-r-4' : '');
	}

	// Get computed styles
	const backgroundColor =
		isSelected ? 'bg-green-300'
			: isRelatedToSelected ? 'bg-yellow-50'
				: 'bg-neutral-50';

	return (
		<td
			className={getCellBorderStyle()}
			onClick={toggleCellSelection}
			id={cellID}>
			<input
				id={cellID}
				name='puzzle-cell'
				type='text'
				value={value ?? ''}
				className={`w-[55px] h-[55px] text-center cursor-pointer caret-transparent text-2xl font-bold text-black border-none outline-none ${backgroundColor}`}
				onChange={handleNumberInput}
			/>
		</td>
	);
}
