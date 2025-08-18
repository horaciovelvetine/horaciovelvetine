import type { P5CanvasInstance } from '@p5-wrapper/react';
import type { RPSSketchProps } from './rps-sketch-props';
import { RPSSketchManager } from './rps-sketch-manager';

/**
 * Main Rock, Paper, Scissors P5.js sketch function that implements the complete simulation.
 *
 * This function creates and manages a P5.js sketch for the Rock Paper Scissors game simulation.
 * It initializes with a minimal canvas (0,0) and relies on React props updates to configure
 * the actual canvas size and game parameters. The sketch handles sprite physics, collision
 * detection, grid management, and rendering through the RPSSketchManager.
 *
 * The sketch lifecycle includes:
 * - Setup: Creates initial canvas with default dimensions
 * - Draw loop: Renders sprites, handles physics updates when not paused
 * - Props updates: Responds to React state changes for canvas size, colors, sprite configuration
 *
 * @param p5 - The P5.js canvas instance with RPSSketchProps for React integration
 * @see {@link https://p5js.org/} P5.js documentation
 * @see {@link https://github.com/P5-wrapper/react} ReactP5Wrapper component integration
 */
export function RPSSketch(p5: P5CanvasInstance<RPSSketchProps>) {
	const sketch = new RPSSketchManager();

	// !SETUP SKETCH W/ DEFAULT => ADDITIONAL SETUP IN PROP UPDATES
	p5.setup = () => {
		p5.createCanvas(0, 0);
	};

	// !DRAW
	p5.draw = () => {
		p5.textAlign('center', 'center');
		p5.background(sketch.state.canvasColor());

		if (!sketch.state.sketchIsPaused()) {
			sketch.resetGridCollisionTracking();
			sketch.updateSpritesPhysics(p5);
		}
		sketch.drawSprites(p5);
		sketch.drawGameOverMessage(p5);
	};

	//! UPDATE WITH PROPS
	p5.updateWithProps = props => {
		const {
			canvasColor,
			canvasSize,
			spriteChars,
			spriteCount,
			showCollisionRadius,
			showVelocityIndicators,
			sketchIsPaused,
			resetRequested,
			onResetHandled,
		} = props;

		// Handle reset request
		if (resetRequested) {
			sketch.reset();
			// Notify React that reset has been handled
			if (onResetHandled) {
				onResetHandled();
			}
		}

		if (p5.width !== canvasSize.width || p5.height !== canvasSize.height) {
			// canvasSize update requires reset of grid & sprites...
			sketch.state.setSpritesInitialized(false);
			sketch.state.setGridInitialized(false);
			p5.resizeCanvas(canvasSize.width, canvasSize.height);
			sketch.state.setSpriteSize({ width: p5.width, height: p5.height });
		}

		// updates sketch state & sprites...
		sketch.updateSpriteToNewCharSet(spriteChars);
		sketch.updateSpriteToNewCount(spriteCount, p5);

		// update sketch no reset required...
		sketch.state.setSketchIsPaused(sketchIsPaused);
		sketch.state.setCanvasColor(canvasColor);
		sketch.state.setShowCollisionRadius(showCollisionRadius);
		sketch.state.setShowVelocityIndicators(showVelocityIndicators);

		// sketch initialization in case important things
		if (!sketch.state.spritesInitialized()) {
			sketch.initializeSprites(p5);
		}

		if (!sketch.state.gridInitialized()) {
			sketch.initializeUniformGrid(p5);
		}
	};
}
