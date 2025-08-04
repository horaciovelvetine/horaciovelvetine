import type { Dimensions } from '../../types';

/**
 * Calculates the optimal Tailwind CSS width class for Sudoku cell display based on screen dimensions
 *
 * Takes the client viewport width and divides it by 9 (for 9 columns) to get the raw cell width.
 * Then finds the largest predefined Tailwind width class that fits within this raw width.
 * This ensures cells are responsive while maintaining consistent sizing using Tailwind classes.
 *
 * @param {Dimensions} clientDimensions - The client viewport dimensions containing width and height
 * @returns {string} The Tailwind CSS width class (e.g. 'size-8', 'size-16') that best fits the available space
 */

export function findCellDataDisplayWidth(clientDimensions: Dimensions): string {
  const rawCellWidth = Math.floor(clientDimensions.width / 9) -2;

  // TailwindCSS width values mapped to PX width
  const tailwindWidths = {
    'size-8': 32,
    'size-9': 36,
    'size-10': 40,
    'size-12': 48,
    'size-14': 56, // fits to 768px width 'tablet'
    'size-16': 64,
  };

  // Find the largest Tailwind width that fits within the raw cell width
  let bestFitWidth = 'size-8'; // Default to smallest
  for (const [className, pixels] of Object.entries(tailwindWidths)) {
    if (pixels <= rawCellWidth) {
      bestFitWidth = className;
    } else {
      break;
    }
  }

  return bestFitWidth;
}
