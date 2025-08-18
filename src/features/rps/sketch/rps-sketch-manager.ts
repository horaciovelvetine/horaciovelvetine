import type { P5CanvasInstance } from '@p5-wrapper/react';
import { RPSManagedState } from './rps-managed-state';
import { Sprite } from './sprite';
import { UniformSpriteGrid } from './uniform-sprite-grid';
import { invertHexColorString } from '../../../functions';
import type { RPSSketchProps } from '.';
import type { SpriteCharSet, SpriteCountSelects } from '../../../types';

/**
 * Manages the Rock Paper Scissors sketch, handling sprite initialization,
 * grid management, and physics updates for the simulation.
 *
 * This class serves as the main controller for the RPS sketch, coordinating
 * between sprites, the uniform grid system, and the managed state.
 */
export class RPSSketchManager {
	state: RPSManagedState;
	sprites: Sprite[] = [];
	grid: UniformSpriteGrid;
	velocityMax = 0;

	constructor() {
		this.state = new RPSManagedState();
		this.grid = new UniformSpriteGrid();
	}

	/**
	 * Initializes the sprites for this sketch, iterating the spriteCount() and instantiating new Sprite's.
	 * Each sprite is created with a random position and charcter form the selected spriteSet()
	 * @param p5 - the active p5 instance
	 */
	initializeSprites(p5: P5CanvasInstance<RPSSketchProps>) {
		this.sprites = [];
		for (let i = 0; i < this.state.spriteCount(); i++) {
			const id = 'sprite'.concat(i.toString());
			this.sprites.push(
				new Sprite(id, this.state.spriteSize(), p5, this.state.spriteChars())
			);
		}
		this.state.setSpritesInitialized(true);
	}

	/**
	 * Sets up the Uniform Grid positions for all of the sprites
	 */
	initializeUniformGrid(p5: P5CanvasInstance<RPSSketchProps>) {
		const { width, height } = p5;
		this.grid.initializeGridWithDimensions(
			{ width, height },
			this.state.spriteSize()
		);

		this.sprites.forEach(sprite => {
			this.grid.updateGridPosition(sprite);
		});

		this.state.setGridInitialized(true);
	}

	/**
	 * Updates all sprites in the sketch by calling their update methods
	 * and managing grid positions and collisions
	 * @param p5 - the active p5 instance
	 */
	updateSpritesPhysics(p5: P5CanvasInstance<RPSSketchProps>) {
		// Update sprite positions based on existing collisions & velocity
		this.sprites.forEach(sprite => {
			const velocity = sprite.updatePhysics(p5, this.grid);

			// keep track of fastest moving sprite....
			if (this.velocityMax < velocity) {
				this.velocityMax = velocity;
			}
		});

		// Check and update sprite grid posiitions
		this.sprites.forEach(sprite => {
			this.grid.checkForCollisions(sprite, p5);
		});
	}

	/**
	 * Draws all sprites in the sketch by calling their draw methods
	 * @param p5 - the active p5 instance
	 */
	drawSprites(p5: P5CanvasInstance<RPSSketchProps>) {
		this.sprites.forEach(sprite => {
			if (this.state.showVelocityIndicators()) {
				sprite.drawVelocityIndicator(p5, this.velocityMax);
			}

			if (this.state.showCollisionRadius()) {
				sprite.drawCollisionRadius(p5, this.state.canvasColor());
			}

			sprite.draw(p5);
		});
	}

	drawGameOverMessage(p5: P5CanvasInstance<RPSSketchProps>) {
		if (!this.hasWinner()) return;
		if (this.state.sketchIsPaused()) return;

		const wChar = this.sprites[0].char;
		const brk = '\n';
		let wMsg;

		p5.textAlign('center', 'center');
		p5.fill(invertHexColorString(this.state.canvasColor(), true));
		p5.textSize(this.state.spriteSize() * 1.2);
		if (p5.width > p5.height) {
			wMsg = wChar + ' Winner Winner Chicken Dinner! ' + wChar;
		} else {
			wMsg =
				wChar +
				'Winner' +
				wChar +
				brk +
				wChar +
				'Winner' +
				wChar +
				brk +
				wChar +
				'Chiken Dinner!!' +
				wChar;
		}
		p5.text(wMsg, p5.width / 2, p5.height / 2);
	}

	/**
	 * Resets the grid's collision tracking state
	 * Should be called at the beginning of each draw cycle
	 */
	resetGridCollisionTracking() {
		this.grid.resetCollisionTracking();
	}

	/**
	 * Checks if all sprites in the sketch have the same character, indicating a winner
	 * @returns true if all sprites have the same character, false otherwise
	 */
	hasWinner(): boolean {
		if (this.sprites.length === 0) return false;
		return this.sprites.every(sprite => sprite.char === this.sprites[0].char);
	}

	/**
	 * Resets the sketch to its initial state by clearing sprites and grid
	 * This will trigger re-initialization on the next update cycle
	 */
	reset() {
		this.sprites = [];
		this.velocityMax = 0;
		this.state.reset();
	}

	/**
	 * Iterate over all of the sprites, and update their current .char to the new set.
	 * @param spriteChars - the new sprite char set to update to...
	 */
	updateSpriteToNewCharSet(spriteChars: SpriteCharSet) {
		// already matches, do nothing...
		if (this.state.spriteChars() === spriteChars) return;
		this.state.setSpriteChars(spriteChars);

		this.sprites.forEach(sprite => {
			sprite.swapSpriteCharSet();
		});
	}

	/**
	 * Add or remove to the current number of sprites on screen based on the user input selected from { @see SpriteCountSelects }
	 * @param countSelection - the user selected amount of sprites
	 * @param p5 - the current instance of the canvas
	 */
	updateSpriteToNewCount(
		selection: SpriteCountSelects,
		p5: P5CanvasInstance<RPSSketchProps>
	) {
		this.state.setSpriteCount(selection);
		// current number matches, exit
		const desiredCount = this.state.spriteCount();
		const currentCount = this.sprites.length;
		if (currentCount === desiredCount) return;
		if (currentCount > desiredCount) {
			// remove some sprites...
			const spritesToRemove = currentCount - desiredCount;
			this.sprites.splice(-spritesToRemove);
		} else {
			// add some sprites
			const spritesToAdd = desiredCount - currentCount;
			for (let i = 0; i < spritesToAdd; i++) {
				const id = 'sprite'.concat((i + currentCount).toString());
				this.sprites.push(
					new Sprite(id, this.state.spriteSize(), p5, this.state.spriteChars())
				);
			}
		}
	}
}
