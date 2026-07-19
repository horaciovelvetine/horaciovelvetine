import type { Dimensions } from '../../types';

/**
 * Calculates the optimal pixel width for Sudoku cell display based on container dimensions.
 *
 * Takes the client viewport width and divides it by 9 (for 9 columns) to get the raw cell width.
 * This ensures cells scale with the board container instead of the viewport.
 *
 * @param {Dimensions} clientDimensions - The client viewport dimensions containing width and height
 * @returns {number} The pixel size that best fits the available space
 */

export function findCellDataDisplayWidth(clientDimensions: Dimensions): number {
  const availableWidth = Math.floor((clientDimensions.width - 12) / 9);
  const availableHeight = Math.floor((clientDimensions.height - 12) / 9);

  return Math.max(32, Math.min(72, Math.min(availableWidth, availableHeight)));
}
