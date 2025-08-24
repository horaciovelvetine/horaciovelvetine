import type { Cell, Colors } from '../../../../types';

/**
 * Props for the CellData component
 *
 * Defines the properties required to render and manage a single Sudoku cell,
 * including its data, styling, selection state, and event handlers.
 */
export interface CellDataProps {
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
	showingStoredSolution: boolean;
}
