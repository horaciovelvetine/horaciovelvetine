import { useMemo } from 'react';
import type { Dimensions, RPSWindowState } from '../../types';
import type { RPSSketchProps } from '../../features/rps/sketch';

/**
 * Custom hook for transforming sketch state into props for the RPS sketch component.
 *
 * This hook takes the canvas dimensions and window state and transforms them into
 * the appropriate props structure for the Rock Paper Scissors sketch component.
 * It uses useMemo to optimize performance by only recalculating the props object
 * when the dependencies change, preventing unnecessary re-renders of the sketch.
 *
 * The hook serves as an adapter layer between the application state management
 * and the sketch component interface, ensuring that state changes are efficiently
 * propagated to the P5.js sketch while maintaining optimal rendering performance.
 *
 * Features:
 * - Memoized prop calculation for performance optimization
 * - Type-safe transformation from window state to sketch props
 * - Automatic dependency tracking for all relevant state properties
 * - Clean separation between state management and sketch rendering
 *
 * @param canvasSize - The dimensions object containing width and height for the canvas
 * @param windowState - The complete RPS window state containing all sketch configuration
 * @returns RPSSketchProps object optimized for the sketch component with all necessary properties
 */
export function useSketchUpdateState(
	canvasSize: Dimensions,
	windowState: RPSWindowState
): RPSSketchProps {
	return useMemo(
		() => ({
			canvasSize,
			canvasColor: windowState.canvasColor,
			spriteChars: windowState.spriteChars,
			spriteCount: windowState.spriteCount,
			showCollisionRadius: windowState.showCollisionRadius,
			showVelocityIndicators: windowState.showVelocityIndicators,
			sketchIsPaused: windowState.sketchIsPaused,
			sketchIsInitialized: windowState.sketchIsInitialized,
			resetRequested: windowState.resetRequested,
			onResetHandled: () => {
				windowState.setResetRequested(false);
			},
		}),
		[canvasSize, windowState]
	);
}
