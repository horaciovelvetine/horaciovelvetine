import { useCallback, useState } from 'react';
import type {
	SpriteCharSet,
	SpriteCountSelects,
	Colors,
	RPSSketchState,
} from '../../types';

/**
 * Custom hook for managing the state of the Rock Paper Scissors simulation sketch.
 *
 * This hook provides centralized state management for all aspects of the RPS simulation,
 * including sprite configuration, visual debugging options, animation controls, and canvas
 * appearance. It encapsulates the complex state logic required for the interactive game
 * simulation and provides a clean interface for components to interact with the sketch state.
 *
 * Features:
 * - Sprite character customization (rock ✊, paper ✋, scissors ✌️)
 * - Dynamic sprite count configuration with predefined options
 * - Visual debugging toggles for collision radius and velocity indicators
 * - Simulation pause/resume functionality for user interaction
 * - Initialization tracking with timestamp for sketch lifecycle management
 * - Canvas background color customization
 * - Type-safe state management with proper TypeScript interfaces
 *
 * The hook manages both the display state (what users see) and the simulation state
 * (how the animation behaves), making it easy for components to control different
 * aspects of the game without direct coupling to the underlying P5.js sketch logic.
 *
 * @returns RPSSketchState object containing all state values and their setter functions
 * @returns spriteChars - Array of emoji characters representing the three game elements
 * @returns setSpriteChars - Function to update the sprite character set
 * @returns spriteCount - Selected sprite count option ('few', 'some', 'many', 'tons')
 * @returns setSpriteCount - Function to update the sprite count selection
 * @returns showCollisionRadius - Boolean toggle for displaying collision detection areas
 * @returns setShowCollisionRadius - Function to toggle collision radius visibility
 * @returns showVelocityIndicators - Boolean toggle for displaying sprite velocity vectors
 * @returns setShowVelocityIndicators - Function to toggle velocity indicator visibility
 * @returns sketchIsPaused - Boolean indicating if the simulation is currently paused
 * @returns setSketchIsPaused - Function to pause/resume the simulation
 * @returns sketchIsInitialized - Timestamp when sketch was initialized, or undefined if not initialized
 * @returns setSketchIsInitialized - Function to set the sketch initialization timestamp
 * @returns canvasColor - Current canvas background color selection
 * @returns setCanvasColor - Function to update the canvas background color
 */
export function useRPSSketchState(): RPSSketchState {
	const [spriteChars, setSpriteChars] = useState<SpriteCharSet>([
		'🪨',
		'📄',
		'✂️',
	]);
	const [spriteCount, setSpriteCount] = useState<SpriteCountSelects>('some');

	const [showCollisionRadius, setShowCollisionRadius] = useState(false);
	const [showVelocityIndicators, setShowVelocityIndicators] = useState(false);
	const [sketchIsPaused, setSketchIsPaused] = useState(false);
	const [sketchIsInitialized, setSketchIsInitialized] = useState<
		undefined | number
	>(undefined);

	const [canvasColor, setCanvasColor] = useState<Colors>('black');
	const [resetRequested, setResetRequested] = useState(false);

	const closeSketchCallback = useCallback(() => {
		setSketchIsPaused(false);
		setSketchIsInitialized(undefined);
		setResetRequested(false);
	}, []);

	return {
		spriteChars,
		setSpriteChars,
		spriteCount,
		setSpriteCount,
		showCollisionRadius,
		setShowCollisionRadius,
		showVelocityIndicators,
		setShowVelocityIndicators,
		sketchIsPaused,
		setSketchIsPaused,
		sketchIsInitialized,
		setSketchIsInitialized,
		canvasColor,
		setCanvasColor,
		resetRequested,
		setResetRequested,
		closeSketchCallback,
	};
}
