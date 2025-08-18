import type { SpriteCharSet } from './sprite-char-set';

/**
 * Interface representing the initial configuration selections for the Rock Paper Scissors sketch
 *
 * Contains user-defined preferences that are set before starting the sketch simulation.
 * These selections determine the visual appearance, behavior settings, and sprite configuration
 * for the interactive Rock Paper Scissors game canvas.
 *
 * @interface
 * @property {SpriteCharSet} charSet - Character set used to visually represent Rock, Paper, Scissors sprites
 * @property {string | undefined} backgroundColor - Background color for the sketch canvas, undefined for default
 * @property {boolean} showCollision - Flag to enable/disable collision radius visualization around sprites
 * @property {boolean} showVelocity - Flag to enable/disable velocity indicator arrows on sprites
 * @property {number} spriteCount - Number of sprites to generate and display in the simulation
 */
export interface SketchInitSelections {
	charSet: SpriteCharSet;
	backgroundColor: string | undefined;
	showCollision: boolean;
	showVelocity: boolean;
	spriteCount: number;
}
