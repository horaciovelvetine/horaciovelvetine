import type { Dispatch, SetStateAction } from 'react';
import type { SpriteCharSet } from './sprite-char-set';
import type { Colors } from '../site/colors';
import type { SpriteCountSelects } from './sprite-count-selects';

/**
 * Interface representing the state configuration for the Rock Paper Scissors sketch/game
 *
 * Provides comprehensive state management for the RPS simulation including sprite
 * configuration, visual settings, animation controls, and canvas appearance.
 * Contains all necessary properties to control the behavior and display of the
 * interactive Rock Paper Scissors sketch component.
 *
 * @interface
 * @property {SpriteCharSet} spriteChars - Character set used to visually represent Rock, Paper, Scissors sprites
 * @property {Dispatch<SetStateAction<SpriteCharSet>>} setSpriteChars - Function to update the sprite character set
 * @property {SpriteCountSelects} spriteCount - User-selected number of sprites to display on screen
 * @property {Dispatch<SetStateAction<SpriteCountSelects>>} setSpriteCount - Function to update the sprite count
 * @property {boolean} showCollisionRadius - Toggle for displaying collision detection radius around sprites
 * @property {Dispatch<SetStateAction<boolean>>} setShowCollisionRadius - Function to toggle collision radius visibility
 * @property {boolean} showVelocityIndicators - Toggle for displaying velocity/direction arrows on sprites
 * @property {Dispatch<SetStateAction<boolean>>} setShowVelocityIndicators - Function to toggle velocity indicator visibility
 * @property {boolean} sketchIsPaused - Flag indicating whether the sketch animation is paused
 * @property {Dispatch<SetStateAction<boolean>>} setSketchIsPaused - Function to toggle sketch pause state
 * @property {undefined | number} sketchIsInitialized - Timestamp when sketch was started, undefined if not started
 * @property {Dispatch<SetStateAction<undefined | number>>} setSketchIsInitialized - Function to set sketch initialization state
 * @property {Colors} canvasColor - Background color for the sketch canvas
 * @property {Dispatch<SetStateAction<Colors>>} setCanvasColor - Function to update the canvas background color
 */
export interface RPSSketchState {
	/**
	 * Character set used to visually represent Rock, Paper, Scissors sprites
	 * @see SpriteCharSet
	 */
	spriteChars: SpriteCharSet;

	/**
	 * State setter function to update the sprite character set
	 */
	setSpriteChars: Dispatch<SetStateAction<SpriteCharSet>>;

	/**
	 * User-selected number of sprites to display on the screen
	 */
	spriteCount: SpriteCountSelects;

	/**
	 * State setter function to update the sprite count selection
	 */
	setSpriteCount: Dispatch<SetStateAction<SpriteCountSelects>>;

	/**
	 * Toggle state for displaying collision detection radius around each sprite
	 */
	showCollisionRadius: boolean;

	/**
	 * State setter function to toggle collision radius visibility
	 */
	setShowCollisionRadius: Dispatch<SetStateAction<boolean>>;

	/**
	 * Toggle state for displaying velocity and heading arrow indicators on each sprite
	 */
	showVelocityIndicators: boolean;

	/**
	 * State setter function to toggle velocity indicator visibility
	 */
	setShowVelocityIndicators: Dispatch<SetStateAction<boolean>>;

	/**
	 * Flag indicating whether the sketch animation is currently paused
	 */
	sketchIsPaused: boolean;

	/**
	 * State setter function to toggle sketch pause state
	 */
	setSketchIsPaused: Dispatch<SetStateAction<boolean>>;

	/**
	 * Timestamp when the sketch was initialized, or undefined if not yet started
	 * Prevents double-click issues where starting the game immediately pauses it
	 */
	sketchIsInitialized: undefined | number;

	/**
	 * State setter function to update sketch initialization state
	 */
	setSketchIsInitialized: Dispatch<SetStateAction<undefined | number>>;

	/**
	 * User-selected background color for the sketch canvas
	 */
	canvasColor: Colors;

	/**
	 * State setter function to update the canvas background color
	 */
	setCanvasColor: Dispatch<SetStateAction<Colors>>;

	/**
	 * Flag indicating whether a reset of the sketch has been requested
	 */
	resetRequested: boolean;

	/**
	 * State setter function to request a reset of the sketch
	 */
	setResetRequested: Dispatch<SetStateAction<boolean>>;
}
