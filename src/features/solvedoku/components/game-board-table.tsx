import { useMemo } from 'react';
import {
	findCellDataDisplayWidth,
	parseFormattedCellIDString,
} from '../../../functions';
import { CellData } from './cell-data';
import type { SolvedokuWindowProps } from '../windows/solvedoku-window-props';
import { useElementSize } from '../../../hooks/site';

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
	const { ref: boardRef, size: boardSize } = useElementSize<HTMLDivElement>();

	const rowBorderStyle = (rowIndex: number) =>
		[2, 5].includes(rowIndex) ? 'border-b-4' : '';

	const cellSize = findCellDataDisplayWidth({
		width: boardSize.width || 420,
		height: boardSize.width || 420,
	});
	const tableSize = cellSize * 9;

	const selectedCellCoords = useMemo(() => {
		if (!selectedCellID) return null;
		return parseFormattedCellIDString(selectedCellID);
	}, [selectedCellID]);

	return (
		<div
			ref={boardRef}
			className='flex w-full justify-center'>
			<table
				className='border-4 border-black bg-neutral-50 text-black shadow-xl shadow-black/20'
				style={{ width: `${tableSize}px`, height: `${tableSize}px` }}>
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
									siteSettings={siteSettings}
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
		</div>
	);
}
