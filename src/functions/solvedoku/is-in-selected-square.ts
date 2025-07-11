import { parseFormattedCellIDString } from "./parse-formatted-cell-id-string";

/**
 * Checks if the provided currently rendering { @see Cell } exists in the same square as the currently selected cell.
 * @param selectedCellID - the currently selected cell's ID
 * @param currentRow - parent row of the cell which is being rendered
 * @param currentCol - parent col of the cell which is being rendered
 */
export function isInSelectedSquare(selectedCellID: string | null, currentRow: number, currentCol: number): boolean {
  if (!selectedCellID) return false;
  const [selectedRow, selectedCol] = parseFormattedCellIDString(selectedCellID);
  const selectedSQRow = Math.floor(selectedRow / 3);
  const selectedSQCol = Math.floor(selectedCol / 3);
  const currentSQRow = Math.floor(currentRow / 3);
  const currentSQCol = Math.floor(currentCol / 3);

  return (selectedSQRow === currentSQRow && selectedSQCol === currentSQCol);

}