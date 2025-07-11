import type { SolvedokuGameState } from "../../types";
import { CellDisplay } from "./cell-display";

export function GameTable({ gameBoard, updateCellValue, selectedCellID, setSelectedCellID }: SolvedokuGameState) {
  const rowBorderStyle = (rowIndex: number) =>
    [2, 5].includes(rowIndex) ? 'border-b-4 border-black' : '';
  return (
    <table>
      <tbody className='border-collapse border-4 border-black'>
        {gameBoard.map((row, rowIndex) => (
          <tr
            key={'row-'.concat(rowIndex.toString())}
            className={rowBorderStyle(rowIndex)}>
            {row.map((cell, colIndex) => (
              <CellDisplay
                key={'cell-' + (rowIndex + 1).toString() + '-' + (colIndex + 1).toString()}
                cellID={(rowIndex + 1).toString() + '-' + (colIndex + 1).toString()}
                rowIndex={rowIndex}
                colIndex={colIndex}
                value={cell.value}
                updateCellValue={updateCellValue}
                selectedCellID={selectedCellID}
                setSelectedCellID={setSelectedCellID}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}