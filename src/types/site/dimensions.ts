/**
 * Interface representing dimensional measurements for 2D or 3D objects
 *
 * Provides width and height properties for basic 2D dimensions, with an optional
 * depth property for 3D measurements. Commonly used for describing the size of
 * UI elements, windows, screens, or other geometric objects.
 *
 * @interface
 * @property {number} width - The width measurement in pixels or units
 * @property {number} height - The height measurement in pixels or units
 * @property {number} [depth] - Optional depth measurement for 3D objects
 */
export interface Dimensions {
	width: number;
	height: number;
	depth?: number;
}
