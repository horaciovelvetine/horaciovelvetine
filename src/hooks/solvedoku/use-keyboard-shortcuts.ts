import { useEffect } from 'react';
import type { SolvedokuGameState } from '../../types';

/**
 * Custom hook that adds keyboard shortcuts for the Solvedoku game
 * Currently supports:
 * - Ctrl+Z / Cmd+Z: Undo last move
 * - 1-9: Input number in selected cell
 * - Backspace/Delete: Clear selected cell
 * @param props - Hook configuration props
 */
export function useKeyboardShortcuts({ undo, canUndo, selectedCellID, updateCellValue, }: SolvedokuGameState) {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Undo shortcut: Ctrl+Z (Windows/Linux) or Cmd+Z (Mac)
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
        e.preventDefault(); // Prevent browser's default undo behavior
        if (canUndo) {
          undo();
        }
        return;
      }

      // Only handle number input and deletion if a cell is selected
      if (!selectedCellID) return;

      // Number keys 1-9: Input the number in the selected cell
      if (/^[1-9]$/.test(e.key)) {
        e.preventDefault();
        updateCellValue(selectedCellID, e.key);
        return;
      }

      // Backspace or Delete: Clear the selected cell
      if (e.key === 'Backspace' || e.key === 'Delete') {
        e.preventDefault();
        updateCellValue(selectedCellID, null);
        return;
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [undo, canUndo, selectedCellID, updateCellValue]);
} 