import React from 'react';
import { useMemo, useCallback, type ChangeEvent } from 'react';
import type { Cell, Colors } from '../../../types';
import { isInSelectedSquare } from '../../../functions';

interface CellDataProps {
  cellID: string;
  rowIndex: number;
  colIndex: number;
  cell: Cell;
  cellSizing: string;
  accentColor: Colors;
  selectedCellCoords: [number, number] | null;
  selectedCellID: string | null;
  updateCellValue: (cellID: string, value: string | null) => void;
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
        updateCellValue(cellID, numberValue.toString());
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
        'outline-4 -outline-offset-2 '.concat(
          tailwindOutlineColors[accentColor]
        )
        : 'border border-black';

    return selectionOutline + (hasThickRightBorder ? ' border-r-4' : '');
  };

  const backgroundColor =
    isSelected ? tailwindBGColors[accentColor]
      : isRelatedToSelected ? 'bg-yellow-50'
        : 'bg-neutral-50';

  return (
    <td
      id={cellID}
      className={getCellBorderStyle() + ' select-none'}
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

const tailwindBGColors = {
  red: 'bg-red-300',
  orange: 'bg-orange-300',
  amber: 'bg-amber-300',
  yellow: 'bg-yellow-300',
  lime: 'bg-lime-300',
  green: 'bg-green-300',
  emerald: 'bg-emerald-300',
  teal: 'bg-teal-300',
  cyan: 'bg-cyan-300',
  sky: 'bg-sky-300',
  blue: 'bg-blue-300',
  indigo: 'bg-indigo-300',
  violet: 'bg-violet-300',
  purple: 'bg-purple-300',
  fuchsia: 'bg-fuchsia-300',
  pink: 'bg-pink-300',
  rose: 'bg-rose-300',
  slate: 'bg-slate-300',
  gray: 'bg-gray-300',
  zinc: 'bg-zinc-300',
  neutral: 'bg-neutral-300',
  stone: 'bg-stone-300',
} as const;

const tailwindOutlineColors = {
  red: 'outline-red-600',
  orange: 'outline-orange-600',
  amber: 'outline-amber-600',
  yellow: 'outline-yellow-600',
  lime: 'outline-lime-600',
  green: 'outline-green-600',
  emerald: 'outline-emerald-600',
  teal: 'outline-teal-600',
  cyan: 'outline-cyan-600',
  sky: 'outline-sky-600',
  blue: 'outline-blue-600',
  indigo: 'outline-indigo-600',
  violet: 'outline-violet-600',
  purple: 'outline-purple-600',
  fuchsia: 'outline-fuchsia-600',
  pink: 'outline-pink-600',
  rose: 'outline-rose-600',
  slate: 'outline-slate-600',
  gray: 'outline-gray-600',
  zinc: 'outline-zinc-600',
  neutral: 'outline-neutral-600',
  stone: 'outline-stone-600',
} as const;
