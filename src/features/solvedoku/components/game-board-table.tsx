import { useMemo } from "react";
import { findCellDataDisplayWidth, parseFormattedCellIDString } from "../../../functions";
import type { SiteSettings, SolvedokuGameState } from "../../../types"
import { CellData } from "./cell-data";

interface GameBoardTableProps {
  solvedokuState: SolvedokuGameState
  siteSettings: SiteSettings
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
 * @param props.siteSettings - Site configuration including client dimensions and accent color
 * @returns A table element containing the Sudoku game board
 */
export function GameBoardTable({ solvedokuState, siteSettings }: GameBoardTableProps) {
  const rowBorderStyle = (rowIndex: number) =>
    [2, 5].includes(rowIndex) ? 'border-b-4' : '';

  const cellSize = findCellDataDisplayWidth(siteSettings.clientDimensions);

  const selectedCellCoords = useMemo(() => {
    if (!solvedokuState.selectedCellID) return null;
    return parseFormattedCellIDString(solvedokuState.selectedCellID);
  }, [solvedokuState.selectedCellID]);

  return (
    <table className="border-4 text-black">
      <tbody className='border-collapse'>
        {solvedokuState.gameBoard.map((row, rowIndex) => (
          <tr
            key={'row-'.concat(rowIndex.toString())}
            className={rowBorderStyle(rowIndex)}>
            {row.map((cell, colIndex) => (
              <CellData
                key={
                  (rowIndex + 1).toString() +
                  '-' +
                  (colIndex + 1).toString()
                }
                cellID={
                  (rowIndex + 1).toString() +
                  '-' +
                  (colIndex + 1).toString()
                }
                cell={cell}
                rowIndex={rowIndex}
                colIndex={colIndex}
                cellSizing={cellSize}
                accentColor={siteSettings.accentColor}
                selectedCellCoords={selectedCellCoords}
                selectedCellID={solvedokuState.selectedCellID}
                updateCellValue={solvedokuState.updateCellValue}
                setSelectedCellID={solvedokuState.setSelectedCellID}
                showingStoredSolution={solvedokuState.showStoredSolution}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}