import { useMemo, useState, useEffect } from 'react';
import {
	findCellDataDisplayWidth,
	parseFormattedCellIDString,
} from '../../../functions';
import { CellData } from './cell-data';
import type { SolvedokuWindowProps } from '../windows/solvedoku-window-props';

// Local hook for window dimensions to prevent unnecessary re-renders
function useWindowDimensions() {
	const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

	useEffect(() => {
		const handleResize = () => {
			setDimensions({ width: window.innerWidth, height: window.innerHeight });
		};

		window.addEventListener('resize', handleResize);
		return () => { window.removeEventListener('resize', handleResize); };
	}, []);

	return dimensions;
}

/**
 * Renders a Sudoku game board as a table with interactive cells
 *
 * This component displays the 9x9 Sudoku grid with proper styling for 3x3 box borders.
 * Each cell is rendered as a CellData component that handles individual cell interactions.
 * The component calculates cell sizing based on client dimensions and manages cell selection state.
 *
 * @param props - The component props
 * @param props.solvedokuState - The current state of the Sudoku game including the board data and selected cell
 * @param props.siteSettings - Site configuration including accent color
 * @returns A table element containing the Sudoku game board
 */
export function GameBoardTable({
	windowState,
	siteSettings,
}: SolvedokuWindowProps) {
	const {
		selectedCellID,
		gameBoard,
		updateCellValue,
		setSelectedCellID,
		showStoredSolution,
	} = windowState;

	const { width, height } = useWindowDimensions();

	const rowBorderStyle = (rowIndex: number) =>
		[2, 5].includes(rowIndex) ? 'border-b-4' : '';

	const cellSize = findCellDataDisplayWidth({ width, height });

	const selectedCellCoords = useMemo(() => {
		if (!selectedCellID) return null;
		return parseFormattedCellIDString(selectedCellID);
	}, [selectedCellID]);

	return (
		<table className='border-4 text-black'>
			<tbody className='border-collapse'>
				{gameBoard.map((row, rowIndex) => (
					<tr
						key={'row-'.concat(rowIndex.toString())}
						className={rowBorderStyle(rowIndex)}>
						{row.map((cell, colIndex) => (
							<CellData
								key={
									(rowIndex + 1).toString() + '-' + (colIndex + 1).toString()
								}
								cellID={
									(rowIndex + 1).toString() + '-' + (colIndex + 1).toString()
								}
								cell={cell}
								rowIndex={rowIndex}
								colIndex={colIndex}
								cellSizing={cellSize}
								accentColor={siteSettings.accentColor}
								selectedCellCoords={selectedCellCoords}
								selectedCellID={selectedCellID}
								updateCellValue={updateCellValue}
								setSelectedCellID={setSelectedCellID}
								showingStoredSolution={showStoredSolution}
							/>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}
