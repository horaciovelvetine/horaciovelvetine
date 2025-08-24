/**
 * Interface representing position coordinates within a uniform grid system for sprite storage
 *
 * Defines the three-dimensional indexing system used to locate and reference sprites
 * within the UniformSpriteGrid data structure. Provides both 2D grid coordinates
 * and a flattened hash index for efficient sprite lookup and collision detection
 * in the Rock Paper Scissors simulation.
 *
 * @interface
 * @property {number} xIndex - Horizontal grid position (column index)
 * @property {number} yIndex - Vertical grid position (row index)
 * @property {number} hashIndex - Flattened array index for direct sprite access
 */
export interface UniformGridPosition {
	xIndex: number;
	yIndex: number;
	hashIndex: number;
}
