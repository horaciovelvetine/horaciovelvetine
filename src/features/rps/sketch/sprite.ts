import type { Vector } from 'p5';
import type { P5CanvasInstance } from '@p5-wrapper/react';
import type { UniformSpriteGrid } from './uniform-sprite-grid';
import type { SpriteCharSet } from '../../../types/rps/sprite-char-set';
import type { RPSSketchProps } from '.';
import { invertHexColorString } from '../../../functions';

/**
 * Represents a sprite in the Rock Paper Scissors simulation with physics-based movement,
 * collision detection, and character representation.
 *
 * Each sprite maintains its own state including position, velocity, character type (rock, paper, or scissors),
 * and collision management. Sprites move continuously within the canvas bounds and interact with other
 * sprites through physics-based collisions that follow Rock Paper Scissors game rules.
 *
 * Key features:
 * - Physics-based movement with velocity and mass
 * - Collision detection and response with other sprites
 * - Character transformation based on Rock Paper Scissors rules
 * - Visual rendering with optional collision radius and velocity indicators
 * - Grid-based spatial optimization for efficient collision detection
 * - Collision cooldown system to prevent rapid successive interactions
 *
 * The sprite integrates with the UniformSpriteGrid system for optimized collision detection
 * and supports various visual debug modes for development and analysis.
 */
export class Sprite {
	id: string;
	position: Vector;
	char: string;
	size: number;
	mass: number;
	velocity: Vector;
	lastSpriteCollidedID: string | null;
	collisionCooldown: number;
	collisionResponse: { x: number; y: number } | null;

	static readonly MAX_SPEED = 2.5;
	static readonly MIN_SPEED = 1;
	static readonly COLLISION_FRAME_BUFFER = 2;
	static readonly COLLISION_DETECTION_RADIUS = 0.85;
	static readonly VELOCITY_INDICATOR_GRADIENT = [
		// colors pulled from TailwindCSS color palette...
		'#00a63e', // grreen-600
		'#22c55e', // green-500
		'#84cc16', // lime-500
		'#a3e635', // lime-400
		'#bbf451', // lime-300
		'#ffdf20', // yellow-300
		'#facc15', // yellow-400
		'#fbbf24', // amber-400
		'#fb923c', // orange-400
		'#f97316', // orange-500
		'#ea580c', // orange-600
		'#dc2626', // red-600
		'#b91c1c', // red-700
		'#991b1b', // red-800
	];

	constructor(
		id: string,
		size: number,
		p5: P5CanvasInstance<RPSSketchProps>,
		charSet: SpriteCharSet
	) {
		this.id = id;
		this.size = size;
		this.mass = 1; // newton be damned...
		this.lastSpriteCollidedID = null;
		this.collisionCooldown = 0;
		this.collisionResponse = null;
		this.char = charSet[Math.floor(Math.random() * charSet.length)];
		this.position = p5.createVector(
			this.randomPosition(p5.width),
			this.randomPosition(p5.height)
		);
		this.velocity = p5.createVector(this.randomSpeed(), this.randomSpeed());
	}

	/**
	 * Draws the Sprite to the canvas
	 * @param p5 - p5 instance on to which the Sprite is drawn.
	 */
	draw(p5: P5CanvasInstance<RPSSketchProps>) {
		const { x, y } = this.position;
		p5.textSize(this.size);
		p5.text(this.char, x, y);
	}

	/**
	 * Draws a contrasting circle around the sprite to approximate it's collision radius visually.
	 * @param p5 - currently active p5 instance
	 * @param curBGColor - canvas color to contrast the circle against
	 */
	drawCollisionRadius(
		p5: P5CanvasInstance<RPSSketchProps>,
		curBGColor: string
	) {
		const circleColor = invertHexColorString(curBGColor, true);
		const { x, y } = this.position;
		p5.fill(circleColor);
		p5.circle(x, y, this.size);
	}

	/**
	 * Draws a contrasting circle around the sprite to show its collision radius.
	 * The circle color is automatically inverted from the background color for visibility.
	 * @param p5 - The p5 instance used for drawing operations
	 * @param curBGColor - The current canvas background color as a hex string to contrast against
	 */
	drawVelocityIndicator(
		p5: P5CanvasInstance<RPSSketchProps>,
		maxVelocity: number
	) {
		// Calculate velocity magnitude and normalize it against max velocity

		const velocityMag = this.velocity.mag();
		const normalizedVelocity = Math.min(velocityMag / maxVelocity, 1);
		// Map normalized velocity to gradient color index
		const colorIndex = Math.floor(
			normalizedVelocity * (Sprite.VELOCITY_INDICATOR_GRADIENT.length - 1)
		);
		const color = Sprite.VELOCITY_INDICATOR_GRADIENT[colorIndex];
		p5.stroke(color);

		p5.strokeWeight(Math.floor(this.size / 10));

		const { x, y } = this.position;
		// Scale the velocity vector to create a visible line length
		const lineLength = this.size * 2;
		const normalizedVel = this.velocity.copy().normalize().mult(lineLength);
		const endX = x + normalizedVel.x;
		const endY = y + normalizedVel.y;
		p5.line(x, y, endX, endY);

		// Draw arrowhead pointer at the end of the line
		const arrowSize = this.size / 6;
		const angle = Math.atan2(normalizedVel.y, normalizedVel.x);

		// Calculate arrowhead points
		const arrowAngle = Math.PI / 6; // 30 degrees
		const arrowPoint1X = endX - arrowSize * Math.cos(angle - arrowAngle);
		const arrowPoint1Y = endY - arrowSize * Math.sin(angle - arrowAngle);
		const arrowPoint2X = endX - arrowSize * Math.cos(angle + arrowAngle);
		const arrowPoint2Y = endY - arrowSize * Math.sin(angle + arrowAngle);

		// Draw arrowhead lines
		p5.line(endX, endY, arrowPoint1X, arrowPoint1Y);
		p5.line(endX, endY, arrowPoint2X, arrowPoint2Y);
	}

	/**
	 * Updates the sprite's position and handles collision responses for each frame
	 * - Resets collision state
	 * - Updates collision cooldown timer
	 * - Applies and gradually reduces collision response vectors
	 * - Updates position based on velocity
	 * - Handles boundary collisions with canvas edges
	 * - Updates sprite position in spatial partitioning grid
	 *
	 * @param p5 - The p5 instance used for vector calculations and canvas bounds
	 * @param grid - The uniform grid used for spatial partitioning of sprites
	 */
	updatePhysics(
		p5: P5CanvasInstance<RPSSketchProps>,
		grid: UniformSpriteGrid
	): number {
		// Reset collision state for this frame
		this.resetCollisionState();

		// Update collision cooldown
		if (this.collisionCooldown > 0) {
			this.collisionCooldown--;
		}

		// Apply gradual collision response if active
		if (this.collisionResponse) {
			this.position.x += this.collisionResponse.x;
			this.position.y += this.collisionResponse.y;

			// Reduce response over time
			this.collisionResponse.x *= 0.7;
			this.collisionResponse.y *= 0.7;

			// Remove response when it becomes too small
			if (
				Math.abs(this.collisionResponse.x) < 0.1 &&
				Math.abs(this.collisionResponse.y) < 0.1
			) {
				this.collisionResponse = null;
			}
		}

		const { x, y } = this.position;
		this.position.add(this.velocity);

		// Clamp position to screen...
		const xPos = Math.max(this.size, Math.min(p5.width - this.size, x));
		const yPos = Math.max(this.size, Math.min(p5.height - this.size, y));
		if (xPos !== x) {
			this.position.x = xPos;
			this.velocity.x *= -1;
		}

		if (yPos !== y) {
			this.position.y = yPos;
			this.velocity.y *= -1;
		}

		grid.updateGridPosition(this); // update grid with new posisiton
		// return velocity magnitude to keep track of 'fastest' moving sprite...
		return this.velocity.mag();
	}

	/**
	 * Checks for and handles collisions between this sprite and another sprite.
	 * Includes collision detection, response calculation, position correction,
	 * and updates collision states for both sprites involved.
	 *
	 * @param other - The other sprite to check collision against
	 * @param p5 - The p5 instance used for vector calculations
	 * @returns void
	 */
	checkForCollision(other: Sprite, p5: P5CanvasInstance<RPSSketchProps>) {
		if (this.collisionCooldown > 0 || other.collisionCooldown > 0) {
			return;
		}

		// Check if sprites are close enough to collide...
		const distX = this.position.x - other.position.x;
		const distY = this.position.y - other.position.y;
		const distVec = p5.createVector(distX, distY);
		const isColliding =
			distVec.mag() < this.size * Sprite.COLLISION_DETECTION_RADIUS;
		const collisionAlreadyProcessed = this.lastSpriteCollidedID === other.id;

		// Exit and do not process...
		if (!isColliding) return;
		if (collisionAlreadyProcessed) return;

		this.calculateCollisionUpdates(distVec, other, p5);
		this.applyBetterNudgeOffset(distVec, other);

		this.lastSpriteCollidedID = other.id;
		other.lastSpriteCollidedID = this.id;

		this.collisionCooldown = Sprite.COLLISION_FRAME_BUFFER;
		other.collisionCooldown = Sprite.COLLISION_FRAME_BUFFER;

		// 'Play' Rock, Paper, Scissors...
		this.updateRPSCharSprite(other);
	}

	/**
	 * Swaps the sprite's character to its equivalent in the alternate character set.
	 * Converts between emoji hands (✊, ✋, ✌️) and object representations (🪨, 📄, ✂️).
	 * Rock/Fist: ✊ ↔ 🪨
	 * Paper/Hand: ✋ ↔ 📄
	 * Scissors/Peace: ✌️ ↔ ✂️
	 * If the character doesn't match any known sprite character, no change is made.
	 */
	swapSpriteCharSet() {
		const charMap = new Map([
			['✊', '🪨'],
			['✋', '📄'],
			['✌️', '✂️'],
			['🪨', '✊'],
			['📄', '✋'],
			['✂️', '✌️'],
		]);

		const newChar = charMap.get(this.char);
		if (newChar) {
			this.char = newChar;
		}
	}

	/**
	 * !PRIVATE UTILITY METHODS
	 * !PRIVATE UTILITY METHODS
	 * !PRIVATE UTILITY METHODS
	 */

	/**
	 * Generates a random speed value between MIN_SPEED and MAX_SPEED
	 * @returns A random float value between MIN_SPEED and MAX_SPEED for sprite velocity
	 */
	private randomSpeed() {
		return (
			Math.random() * (Sprite.MAX_SPEED - Sprite.MIN_SPEED) + Sprite.MIN_SPEED
		);
	}

	/**
	 * Generates a random position within the given dimension while keeping the sprite within bounds
	 * @param dimension - The maximum dimension value (width or height) of the canvas
	 * @returns A random position value adjusted to prevent the sprite from going off-screen
	 */
	private randomPosition(dimension: number) {
		const position = Math.floor(Math.random() * dimension);
		const maxValidPosition = dimension - this.size;

		// If position is too close to edges, adjust it inward
		if (position > maxValidPosition) {
			return position - 1.25 * this.size;
		} else if (position < this.size) {
			return position + 1.25 * this.size;
		}
		return position;
	}

	/**
	 * Calculates and applies velocity and position updates after a collision between two sprites
	 * Uses elastic collision formulas with rotated coordinate system for accurate physics simulation
	 * @param distanceVec - Vector representing the distance between sprite centers
	 * @param other - The other sprite involved in the collision
	 * @param p5 - The p5 instance used for vector calculations
	 */
	private calculateCollisionUpdates(
		distanceVec: Vector,
		other: Sprite,
		p5: P5CanvasInstance<RPSSketchProps>
	) {
		const theta = distanceVec.heading();
		const sine = Math.sin(theta);
		const cosine = Math.cos(theta);

		const vTempRotations = [p5.createVector(), p5.createVector()];
		vTempRotations[0].x = cosine * this.velocity.x + sine * this.velocity.y;
		vTempRotations[0].y = cosine * this.velocity.y - sine * this.velocity.x;

		vTempRotations[1].x = cosine * other.velocity.x + sine * other.velocity.y;
		vTempRotations[1].y = cosine * other.velocity.y - sine * other.velocity.x;

		const vFinalRotations = [p5.createVector(), p5.createVector()];
		vFinalRotations[0].x =
			((this.mass - other.mass) * vTempRotations[0].x +
				2 * other.mass * vTempRotations[1].x) /
			(this.mass + other.mass);
		vFinalRotations[0].y = vTempRotations[0].y;

		vFinalRotations[1].x =
			((other.mass - this.mass) * vTempRotations[1].x +
				2 * this.mass * vTempRotations[0].x) /
			(this.mass + other.mass);
		vFinalRotations[1].y = vTempRotations[1].y;

		const vFinal = [p5.createVector(), p5.createVector()];
		vFinal[0].x = cosine * vFinalRotations[0].x - sine * vFinalRotations[0].y;
		vFinal[0].y = cosine * vFinalRotations[0].y + sine * vFinalRotations[0].x;

		vFinal[1].x = cosine * vFinalRotations[1].x - sine * vFinalRotations[1].y;
		vFinal[1].y = cosine * vFinalRotations[1].y + sine * vFinalRotations[1].x;

		this.velocity.x = vFinal[0].x;
		this.velocity.y = vFinal[0].y;

		other.velocity.x = vFinal[1].x;
		other.velocity.y = vFinal[1].y;
	}

	/**
	 * Resets the collision state to allow new collisions in the next frame
	 */
	private resetCollisionState() {
		this.lastSpriteCollidedID = null;
	}

	/**
	 * Applies position correction to prevent sprites from overlapping after collision
	 * Uses a gradual correction approach by adding to the collision response vectors
	 * Correction is applied over multiple frames to create smoother movement
	 * @param distanceVec - Vector representing distance between sprite centers
	 * @param other - The other sprite involved in the collision
	 */
	private applyBetterNudgeOffset(distanceVec: Vector, other: Sprite) {
		const overlap =
			this.size * Sprite.COLLISION_DETECTION_RADIUS - distanceVec.mag();
		if (overlap <= 0) return;

		// Calculate a correction vector
		const correctionFactor = 0.2;
		const correctionVec = distanceVec
			.normalize()
			.mult(overlap * correctionFactor);

		this.collisionResponse ??= { x: 0, y: 0 };
		other.collisionResponse ??= { x: 0, y: 0 };

		// Add correction to collision response to be applied gradually
		this.collisionResponse.x += correctionVec.x;
		this.collisionResponse.y += correctionVec.y;
		other.collisionResponse.x -= correctionVec.x;
		other.collisionResponse.y -= correctionVec.y;
	}

	/**
	 * 'Plays' the game of rock paper scissors for the .char attribute by setting the char property based on the opposing Sprite.
	 * @param other - the other sprite this one is playing against...
	 */
	private updateRPSCharSprite(other: Sprite) {
		if (this.charInSet1()) {
			this.changeRPSCharValueSet1(other);
		} else {
			this.changeRPSCharValueSet2(other);
		}
	}

	/**
	 * Checks if the current value for .char is from set1 or set2 of the { @see SpriteCharSet }
	 */
	private charInSet1() {
		return this.char === '✊' || this.char === '✋' || this.char === '✌️';
	}

	/**
	 * Changes the char value of the losing sprite based on RPS rules
	 * Uses emoji characters from CHARS array where:
	 * 🪨 = Rock
	 * 📄 = Paper
	 * ✂️ = Scissors
	 */
	private changeRPSCharValueSet2(other: Sprite) {
		// Rock beats Scissors
		if (this.char === '🪨' && other.char === '✂️') {
			other.char = '🪨';
		} else if (this.char === '✂️' && other.char === '🪨') {
			this.char = '🪨';
		}
		// Scissors beats Paper
		else if (this.char === '✂️' && other.char === '📄') {
			other.char = '✂️';
		} else if (this.char === '📄' && other.char === '✂️') {
			this.char = '✂️';
		}
		// Paper beats Rock
		else if (this.char === '📄' && other.char === '🪨') {
			other.char = '📄';
		} else if (this.char === '🪨' && other.char === '📄') {
			this.char = '📄';
		}
	}
	/**
	 * Changes the char value of the losing sprite based on RPS rules
	 * Uses emoji characters from CHARS array where:
	 * ✊ = Rock
	 * ✋ = Paper
	 * ✌️ = Scissors
	 */
	private changeRPSCharValueSet1(other: Sprite) {
		// Rock beats Scissors
		if (this.char === '✊' && other.char === '✌️') {
			other.char = '✊';
		} else if (this.char === '✌️' && other.char === '✊') {
			this.char = '✊';
		}
		// Scissors beats Paper
		else if (this.char === '✌️' && other.char === '✋') {
			other.char = '✌️';
		} else if (this.char === '✋' && other.char === '✌️') {
			this.char = '✌️';
		}
		// Paper beats Rock
		else if (this.char === '✋' && other.char === '✊') {
			other.char = '✋';
		} else if (this.char === '✊' && other.char === '✋') {
			this.char = '✋';
		}
	}
}
