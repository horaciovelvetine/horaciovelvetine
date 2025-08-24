import type { P5CanvasInstance } from '@p5-wrapper/react';
import type { Dimensions } from '../../../types/site/dimensions';
import type { Sprite } from './sprite';
import type { UniformGridPosition } from '../../../types/rps/uniform-grid-position';
import type { RPSSketchProps } from '.';
/**
 * Manages a uniform grid system for efficient spatial partitioning and collision detection
 * in the Rock Paper Scissors simulation.
 *
 * This class divides the canvas into a grid of cells, where each cell can contain multiple
 * sprites. It optimizes collision detection by only checking for collisions between sprites
 * in the same cell or neighboring cells, significantly reducing the number of collision
 * checks needed compared to a naive O(n²) approach.
 *
 * The grid automatically resizes based on canvas dimensions and sprite size, and tracks
 * sprite positions to enable efficient spatial queries and collision detection.
 */
export class UniformSpriteGrid {
	cellSize = 0;
	gridSize: Dimensions;
	grid: Sprite[][];
	processedCollisions: Set<string>;
	spritePositions: Map<string, { x: number; y: number }>;

	static readonly CELL_SPRITE_CAPACITY = 2;

	constructor() {
		this.gridSize = { width: 0, height: 0 };
		this.grid = [[]];
		this.processedCollisions = new Set();
		this.spritePositions = new Map();
	}

	/**
	 * Initialize the grid using the provided canvas size once updated with the props
	 */
	initializeGridWithDimensions(canvasSize: Dimensions, spriteSize: number) {
		const { width, height } = canvasSize;
		this.cellSize = spriteSize * UniformSpriteGrid.CELL_SPRITE_CAPACITY;
		this.gridSize = {
			width: Math.ceil(width / this.cellSize),
			height: Math.ceil(height / this.cellSize),
		};
		this.grid = Array.from({ length: width * height }, () => []);
	}

	/**
	 * Checks for collisions between a sprite and other sprites in neighboring grid cells.
	 * Uses spatial partitioning to only check collisions with sprites in adjacent cells,
	 * improving performance by reducing collision checks.
	 *
	 * @param sprite - The sprite to check collisions for
	 * @param p5 - The p5 instance used for collision calculations
	 * @returns void
	 */
	checkForCollisions(sprite: Sprite, p5: P5CanvasInstance<RPSSketchProps>) {
		const gridPos = this.getSpriteGridPosition(sprite);

		// Check if sprite is within grid bounds
		if (!this.isValidGridPosition(gridPos)) {
			return;
		}

		// Check current cell and neighboring cells
		const cellsToCheck = this.getNeighboringCells(gridPos);

		cellsToCheck.forEach(cellIndex => {
			if (this.isValidGridIndex(cellIndex)) {
				const checkCell = this.grid[cellIndex];

				// Only check against sprites we haven't processed yet
				checkCell.forEach(otherSprite => {
					if (otherSprite.id !== sprite.id) {
						const collisionKey = this.getCollisionKey(sprite, otherSprite);
						if (!this.processedCollisions.has(collisionKey)) {
							sprite.checkForCollision(otherSprite, p5);
							this.processedCollisions.add(collisionKey);
						}
					}
				});
			}
		});
	}

	/**
	 * Updates the grid position of a sprite based on its current position.
	 * Only updates if the sprite has moved more than half a cell size to avoid unnecessary updates.
	 * Removes sprite from old cell and adds it to new cell if position has changed significantly.
	 * @param sprite - The sprite whose grid position needs to be updated
	 */
	updateGridPosition(sprite: Sprite) {
		const currentPos = this.spritePositions.get(sprite.id);
		const newPos = { x: sprite.position.x, y: sprite.position.y };

		// Only update grid if sprite has moved significantly (more than half a cell)
		if (
			!currentPos ||
			Math.abs(currentPos.x - newPos.x) > this.cellSize * 0.5 ||
			Math.abs(currentPos.y - newPos.y) > this.cellSize * 0.5
		) {
			// Remove from old position
			if (currentPos) {
				const oldGridPos = this.getSpriteGridPosition(sprite);
				if (this.isValidGridPosition(oldGridPos)) {
					const oldCell = this.grid[oldGridPos.hashIndex];
					const spriteIndex = oldCell.indexOf(sprite);
					if (spriteIndex !== -1) {
						oldCell.splice(spriteIndex, 1);
					}
				}
			}

			// Add to new position
			const newGridPos = this.getSpriteGridPosition(sprite);
			if (this.isValidGridPosition(newGridPos)) {
				this.grid[newGridPos.hashIndex].push(sprite);
			}

			// Update stored position
			this.spritePositions.set(sprite.id, newPos);
		}
	}

	/**
	 * Reset's the entirety of the processed collisions, called once on each frame.
	 */
	resetCollisionTracking() {
		this.processedCollisions.clear();
	}

	/**
	 * !PRIVATE METHODS
	 * !PRIVATE METHODS
	 * !PRIVATE METHODS
	 */

	/**
	 * Calculates the grid position indices for a sprite based on its current position
	 * @param sprite - The sprite to calculate grid position for
	 * @returns UniformGridPosition containing x/y indices and flattened hash index
	 */
	private getSpriteGridPosition(sprite: Sprite): UniformGridPosition {
		const { x, y } = sprite.position;
		const xIndex = Math.floor(x / this.cellSize);
		const yIndex = Math.floor(y / this.cellSize);
		const hashIndex = yIndex * this.gridSize.width + xIndex;

		return {
			xIndex,
			yIndex,
			hashIndex,
		};
	}

	/**
	 * Checks that the provided gridPos is within the alotted grid
	 * @param gridPos - the position in the grid to check against
	 * @returns - true or false if the gridPos is inside the bounds.
	 */
	private isValidGridPosition(gridPos: UniformGridPosition): boolean {
		return (
			gridPos.xIndex >= 0 &&
			gridPos.xIndex < this.gridSize.width &&
			gridPos.yIndex >= 0 &&
			gridPos.yIndex < this.gridSize.height &&
			gridPos.hashIndex >= 0 &&
			gridPos.hashIndex < this.grid.length
		);
	}

	/**
	 * Create a unique key for collisions as they are processed using the id's sorted so order is consistent
	 * @param sprite1 - duh
	 * @param sprite2 - other duh
	 * @returns a unique key identifier for that processed collision
	 */
	private getCollisionKey(sprite1: Sprite, sprite2: Sprite): string {
		const [id1, id2] = [sprite1.id, sprite2.id].sort();
		return `${id1}-${id2}`;
	}

	/**
	 * Get each of the neighboring cell's (including diaganols) in the grid to check for sprite collisions.
	 * @param gridPos - the position to get the surrounding cells of
	 * @return - an array containg the indeces of all cells to check (includes the original gridPos index)
	 */
	private getNeighboringCells(gridPos: UniformGridPosition): number[] {
		const cells: number[] = [];

		// Add current cell
		cells.push(gridPos.hashIndex);

		// Add neighboring cells (including diagonals)
		for (let dx = -1; dx <= 1; dx++) {
			for (let dy = -1; dy <= 1; dy++) {
				if (dx === 0 && dy === 0) continue; // Skip current cell

				const newX = gridPos.xIndex + dx;
				const newY = gridPos.yIndex + dy;

				if (
					newX >= 0 &&
					newX < this.gridSize.width &&
					newY >= 0 &&
					newY < this.gridSize.height
				) {
					const neighborIndex = newY * this.gridSize.width + newX;
					cells.push(neighborIndex);
				}
			}
		}

		return cells;
	}

	private isValidGridIndex(index: number): boolean {
		return index >= 0 && index < this.grid.length;
	}
}
