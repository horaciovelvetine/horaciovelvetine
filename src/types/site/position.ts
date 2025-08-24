/**
 * Interface representing positional coordinates for 2D or 3D objects
 *
 * Provides x and y coordinates for basic 2D positioning, with an optional
 * z coordinate for 3D positioning. Commonly used for describing the location of
 * UI elements, objects in space, or other geometric entities.
 *
 * @interface
 * @property {number} x - The x-coordinate position in pixels or units
 * @property {number} y - The y-coordinate position in pixels or units
 * @property {number} [z] - Optional z-coordinate for 3D positioning
 */
export interface Position {
	x: number;
	y: number;
	z?: number;
}
