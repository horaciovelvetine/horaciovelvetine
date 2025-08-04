import { useEffect } from 'react';
import type { SolvedokuGameState } from '../../types';

/**
 * Custom hook that adds keyboard navigation functionality to the game grid
 * Allows moving the selected cell using arrow keys or WASD keys
 * Wraps around edges when moving past grid boundaries
 * @param props - Hook configuration props
 */
export function useArrowKeyListener({
	selectedCellID,
	setSelectedCellID,
}: SolvedokuGameState) {
	useEffect(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			if (!selectedCellID) return;
			const key = e.key.toLowerCase();
			const [currentRow, currentCol] = selectedCellID
				.split('-')
				.map(n => parseInt(n) - 1);
			let newRow = currentRow;
			let newCol = currentCol;

			// Handle up/down movement
			if (key === 'arrowup' || key === 'w') {
				newRow = currentRow === 0 ? 8 : currentRow - 1;
			} else if (key === 'arrowdown' || key === 's') {
				newRow = currentRow === 8 ? 0 : currentRow + 1;
			}

			// Handle left/right movement
			if (key === 'arrowleft' || key === 'a') {
				newCol = currentCol === 0 ? 8 : currentCol - 1;
			} else if (key === 'arrowright' || key === 'd') {
				newCol = currentCol === 8 ? 0 : currentCol + 1;
			}

			// Convert back to 1-based indices and update selected cell
			const newCellID = (newRow + 1).toString() + '-' + (newCol + 1).toString();
			setSelectedCellID(newCellID);
		};

		document.addEventListener('keydown', handleKeyPress);

		return () => {
			document.removeEventListener('keydown', handleKeyPress);
		};
	}, [selectedCellID, setSelectedCellID]);
}
