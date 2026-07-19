import { TailwindBGs500 } from '../../../../functions';
import type { RPSSketchWindowProps } from '../../windows/rps-sketch-window-props';

/**
 * RPSGameMenu component that provides game control options for the Rock Paper Scissors simulation.
 *
 * This component renders a menu interface that allows users to interact with and control
 * the RPS game simulation. It provides essential game controls such as restarting the
 * simulation, and automatically manages the game state transitions when actions are performed.
 *
 * The component integrates with the sketch's state management system to ensure proper
 * coordination between user interactions and the underlying P5.js simulation. When the
 * restart button is clicked, it triggers a complete reset of the simulation, hides the
 * game menu, and resumes the animation.
 *
 * Features:
 * - Restart button to reset the current game simulation
 * - Automatic state management for menu visibility and simulation pause state
 * - Responsive button styling that adapts to different screen sizes
 * - Integration with site theming through accent color support
 * - Disabled state handling when sketch is not initialized
 *
 * The component follows the established pattern of accepting windowState and siteSettings
 * props, providing a consistent interface across all RPS menu components while maintaining
 * proper separation of concerns between UI presentation and state management.
 *
 * @param props - The component props
 * @param props.windowState - RPS window state containing sketch configuration and control functions
 * @param props.siteSettings - Site-wide settings including accent color for theming
 * @returns JSX element containing the game control menu interface
 */

export function RPSGameMenu({
	windowState,
	siteSettings,
}: RPSSketchWindowProps) {
	const handleResetClick = () => {
		windowState.setResetRequested(true);
		windowState.setShowGameMenu(false);
		windowState.setSketchIsPaused(false);
	};
	return (
		<ul className='mb-2 grid w-full gap-3 tracking-tight'>
			<li className='grid gap-2'>
				<button
					type='button'
					title='Create an entirely new game, returning to the initialization menu'
					disabled={!windowState.sketchIsInitialized}
					className={`w-full rounded-2xl border border-white/10 px-4 py-3 font-semibold text-white transition-transform duration-150 hover:-translate-y-0.5 ${TailwindBGs500[siteSettings.accentColor]}`}
					onClick={() => {
						windowState.closeWindowCallback();
					}}>
					New Game
				</button>
				<button
					type='button'
					title='Reset the game with the current settings'
					disabled={!windowState.sketchIsInitialized}
					className={`w-full rounded-2xl border border-white/10 px-4 py-3 font-semibold text-white transition-transform duration-150 hover:-translate-y-0.5 ${TailwindBGs500[siteSettings.accentColor]}`}
					onClick={handleResetClick}>
					Restart Game
				</button>
			</li>
		</ul>
	);
}
