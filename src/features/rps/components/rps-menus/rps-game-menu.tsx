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
    <ul className='flex flex-col w-full tracking-tighter gap-2 px-8 mb-6'>
      <li className='flex w-full justify-center'>
        <button
          type='button'
          title='Reset the current game simulation'
          disabled={!windowState.sketchIsInitialized}
          className={`border border-stone-300/50 rounded-lg py-0.5 w-full xs:w-1/2 ${TailwindBGs500[siteSettings.accentColor]}`}
          onClick={handleResetClick}>
          Restart Game
        </button>
      </li>
    </ul>
  );
}
