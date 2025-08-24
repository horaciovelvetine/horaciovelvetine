import type {
	Colors,
	Dimensions,
	SpriteCharSet,
	SpriteCountSelects,
} from '../../../types';

/**
 * RPSManagedState manages the shared state between React components and the P5.js sketch.
 *
 * This class serves as a bridge between the React UI layer and the P5.js canvas, providing
 * a centralized state management system for the Rock Paper Scissors simulation. It handles
 * state updates from React components (via menu interactions) and formats the data for
 * consumption by the P5.js sketch loop.
 *
 * Key responsibilities:
 * - Store and manage simulation configuration (sprite size, count, character set)
 * - Handle canvas appearance settings (background color, visual indicators)
 * - Track sketch lifecycle state (pause status, initialization flags)
 * - Provide type-safe getters and setters for all state properties
 * - Convert React component values to P5.js-compatible formats
 *
 * The class maintains internal state that can be updated externally by React components
 * while providing a clean interface for the P5.js sketch to access current values.
 */
export class RPSManagedState {
	private cSpriteSize = RPSManagedState.SPRITE_DEFAULT_SIZE;
	private cSpriteCount = RPSManagedState.SPRITE_DEFAULT_COUNT;
	private cSpriteChars: SpriteCharSet = ['✌️', '✊', '✋'];
	private cSketchIsPaused = false;
	private cCanvasColor = '#000000'; //?==> IN HEX FORMAT
	private cShowCollisionRadius = false;
	private cShowVelocityIndicators = false;

	// initialized state...
	private cGridInitialized = false;
	private cSpritesInitialized = false;

	static readonly CANVAS_DEFAULT_WIDTH = 700;
	static readonly SPRITE_DEFAULT_SIZE = 32;
	static readonly SPRITE_DEFAULT_COUNT = 15;
	static readonly MAX_SPRITE_SIZE_SCALE = 3; // Upper limit to how big sprites can be...
	static readonly MIN_SPRITE_SIZE_SCALE = 0.75; // Lower limit to sprite size scale...

	spriteSize() {
		return this.cSpriteSize;
	}

	setSpriteSize(dimensions: Dimensions) {
		this.cSpriteSize = this.setSpriteSizeFromDimensions(dimensions);
	}

	spriteCount() {
		return this.cSpriteCount;
	}

	setSpriteCount(count: SpriteCountSelects) {
		this.cSpriteCount = this.countSelectionToNumber(count);
	}

	spriteChars() {
		return this.cSpriteChars;
	}

	setSpriteChars(spriteSet: SpriteCharSet) {
		this.cSpriteChars = spriteSet;
	}

	sketchIsPaused() {
		return this.cSketchIsPaused;
	}

	setSketchIsPaused(paused: boolean) {
		this.cSketchIsPaused = paused;
	}

	canvasColor() {
		return this.cCanvasColor;
	}

	setCanvasColor(color: Colors) {
		this.cCanvasColor = this.canvasColorMap(color);
	}

	showCollisionRadius() {
		return this.cShowCollisionRadius;
	}

	setShowCollisionRadius(showCollision: boolean) {
		this.cShowCollisionRadius = showCollision;
	}

	showVelocityIndicators() {
		return this.cShowVelocityIndicators;
	}

	setShowVelocityIndicators(showVelocity: boolean) {
		this.cShowVelocityIndicators = showVelocity;
	}

	gridInitialized() {
		return this.cGridInitialized;
	}

	setGridInitialized(set: boolean) {
		this.cGridInitialized = set;
	}

	spritesInitialized() {
		return this.cSpritesInitialized;
	}

	setSpritesInitialized(set: boolean) {
		this.cSpritesInitialized = set;
	}

	/**
	 * Resets the sketch initialization state to trigger recreation of sprites and grid
	 */
	reset() {
		this.cGridInitialized = false;
		this.cSpritesInitialized = false;
	}

	/**
	 * Uses the tailwind { @see Colors } to map to a hex string of a color from the palette
	 * @param color - the user selected color for the canvas background
	 */
	private canvasColorMap(color: Colors): string {
		const dictionary: Record<Colors, string> = {
			red: '#ff6467',
			orange: '#ffb86a',
			amber: '#ffd230',
			yellow: '#ffdf20',
			lime: '#9ae600',
			green: '#05df72',
			emerald: '#00d492',
			teal: '#46ecd5',
			cyan: '#00d3f2',
			sky: '#00bcff',
			blue: '#51a2ff',
			indigo: '#7c86ff',
			violet: '#a684ff',
			purple: '#c27aff',
			fuchsia: '#ed6bff',
			pink: '#fda5d5',
			rose: '#ffa1ad',
			slate: '#90a1b9',
			gray: '#99a1af',
			zinc: '#9f9fa9',
			neutral: '#a1a1a1',
			stone: '#a6a09b',
			black: '#09090b',
			white: '#e7e5e4',
		};
		return dictionary[color];
	}

	/**
	 * Map the user selectable count options to the corresponding number.
	 * @param selection - the user selected amount of sprites to put in the sketch
	 */
	private countSelectionToNumber(selection: SpriteCountSelects): number {
		switch (selection) {
			case 'more':
				return 30;
			case 'lots':
				return 45;
			case 'lots!':
				return 60;
			default:
				return 15;
		}
	}

	/**
	 * Calculates the appropriate sprite size based on canvas dimensions
	 * Scales the sprite size proportionally to maintain consistent visual appearance
	 * across different canvas sizes, with clamping to prevent extreme sizes
	 *
	 * @param dimensions - The canvas dimensions containing width and height
	 * @returns The calculated sprite size rounded to the nearest integer, clamped between 50% and 200% of the default size
	 */
	private setSpriteSizeFromDimensions(dimensions: Dimensions): number {
		const dimension = Math.max(dimensions.width, dimensions.height);
		const scaleFactor = dimension / RPSManagedState.CANVAS_DEFAULT_WIDTH;
		const clampedScaleFactor = Math.max(
			RPSManagedState.MIN_SPRITE_SIZE_SCALE,
			Math.min(scaleFactor, RPSManagedState.MAX_SPRITE_SIZE_SCALE)
		);
		return Math.round(RPSManagedState.SPRITE_DEFAULT_SIZE * clampedScaleFactor);
	}
}
