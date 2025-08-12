import React from 'react';
import { useMemo, useCallback, type ChangeEvent } from 'react';
import type { Cell, Colors } from '../../../types';
import {
	isInSelectedSquare,
	TailwindBGs300,
	TailwindOutlineColors,
} from '../../../functions';

interface CellDataProps {
	cellID: string;
	rowIndex: number;
	colIndex: number;
	cell: Cell;
	cellSizing: string;
	accentColor: Colors;
	selectedCellCoords: [number, number] | null;
	selectedCellID: string | null;
	updateCellValue: (
		cellID: string,
		value: string | null,
		userInput: boolean
	) => void;
	setSelectedCellID: (cellID: string | null) => void;
}

/**
 * Cell component for the Sudoku game board.
 * Handles cell selection, value input, and visual styling based on game state.
 *
 * @param {Object} props - Component props
 * @param {string} props.cellID - Unique identifier for the cell in "row-col" format
 * @param {number} props.rowIndex - Zero-based row index of the cell
 * @param {number} props.colIndex - Zero-based column index of the cell
 * @param {Cell} props.cell - Cell data containing value and locked status
 * @param {string} props.cellSizing - CSS class name for cell dimensions
 * @param {Colors} props.accentColor - Theme color for highlighting
 * @param {[number, number] | null} props.selectedCellCoords - Coordinates of currently selected cell
 * @param {string | null} props.selectedCellID - ID of currently selected cell
 * @param {(cellID: string, value: string | null) => void} props.updateCellValue - Function to update cell value
 * @param {(cellID: string | null) => void} props.setSelectedCellID - Function to update selected cell
 */

export const CellData = React.memo(function CellData({
	cellID,
	cell,
	cellSizing,
	rowIndex,
	colIndex,
	selectedCellCoords,
	selectedCellID,
	updateCellValue,
	setSelectedCellID,
	accentColor,
}: CellDataProps) {
	const isSelected = cellID === selectedCellID;

	const isRelatedToSelected = useMemo(() => {
		if (!selectedCellCoords || !selectedCellID) return false;
		const [selectedRow, selectedCol] = selectedCellCoords;
		return (
			isSelected ||
			selectedRow === rowIndex || // Same row
			selectedCol === colIndex || // Same column
			isInSelectedSquare(selectedCellID, rowIndex, colIndex) // Same 3x3 square
		);
	}, [isSelected, selectedCellCoords, rowIndex, colIndex, selectedCellID]);

	/**
	 * Handles number input validation and updates
	 * Only allows single digits 1-9
	 */
	const handleNumberInput = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const input = e.target.value;
			const lastCharacter = input.slice(-1);
			const numberValue = parseInt(lastCharacter);

			const isValidSudokuNumber =
				!isNaN(numberValue) && numberValue >= 1 && numberValue <= 9;

			if (isValidSudokuNumber) {
				updateCellValue(cellID, numberValue.toString(), true);
			}
		},
		[cellID, updateCellValue]
	);

	/**
	 * Toggles cell selection state
	 * Clicking selected cell deselects it, clicking unselected cell selects it
	 */
	const toggleCellSelection = useCallback(() => {
		if (isSelected) {
			setSelectedCellID(null); // Deselect current cell
		} else {
			setSelectedCellID(cellID); // Select this cell
		}
	}, [isSelected, setSelectedCellID, cellID]);

	/**
	 * Determines the border styling for the cell
	 */
	const getCellBorderStyle = (): string => {
		const hasThickRightBorder = colIndex === 2 || colIndex === 5;

		const selectionOutline =
			isSelected ?
				'outline-3 -outline-offset-4 '.concat(
					TailwindOutlineColors[accentColor]
				)
			:	'border border-black';

		return selectionOutline + (hasThickRightBorder ? ' border-r-4' : '');
	};

	const backgroundColor =
		isSelected ? TailwindBGs300[accentColor]
		: isRelatedToSelected ? 'bg-yellow-50'
		: 'bg-neutral-50';

	return (
		<td
			id={cellID}
			className={getCellBorderStyle() + ' select-none relative'}
			onClick={toggleCellSelection}>
			<input
				className={`${cellSizing} text-center border-none outline-none cursor-pointer caret-transparent text-lg font-bold xs:text-2xl sm:text-3xl ${backgroundColor}`}
				type='text'
				value={cell.value ?? ''}
				name={cellID + '-input'}
				onChange={handleNumberInput}
			/>
		</td>
	);
});
