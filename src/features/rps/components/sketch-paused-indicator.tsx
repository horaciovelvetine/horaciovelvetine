import { PauseIcon } from '../../../assets';

interface SketchPausedIndicatorProps {
	sketchIsPaused: boolean;
	settingsMenuOnScreen: boolean;
	aboutMenuOnScreen: boolean;
	gameMenuOnScreen: boolean;
}
/**
 * SketchPausedIndicator component displays a pause overlay when the Rock Paper Scissors simulation is paused.
 *
 * This component renders a centered pause indicator that appears when the simulation is paused by user
 * interaction (such as tapping the screen). The indicator is conditionally hidden when menu overlays
 * are active to prevent visual conflicts and ensure a clean user interface. The component features
 * a semi-transparent background with a pause icon and text to clearly communicate the paused state.
 *
 * Features:
 * - Centered overlay with pause icon and "Paused" text
 * - Smooth fade transition when showing/hiding (100ms duration)
 * - Automatic hiding when settings or about menus are displayed
 * - Semi-transparent background with subtle border styling
 * - Responsive sizing that adapts to different screen sizes
 * - Non-interactive overlay (pointer-events-none) to prevent click interference
 * - Drop shadow effects for visual depth and clarity
 *
 * The component uses conditional opacity to smoothly transition between visible and hidden states,
 * ensuring the pause indicator only appears when appropriate and doesn't interfere with other
 * UI elements or menu interactions.
 *
 * @param props - Component props for pause indicator display
 * @param props.sketchIsPaused - Boolean indicating if the simulation is currently paused
 * @param props.settingsMenuOnscreen - Boolean indicating if the settings menu is currently visible
 * @param props.aboutMenuOnScreen - Boolean indicating if the about menu is currently visible
 * @param props.gameMenuOnscreen - Boolean indicating if the about menu is currently visible
 */

export function SketchPausedIndicator({
	sketchIsPaused,
	settingsMenuOnScreen,
	aboutMenuOnScreen,
	gameMenuOnScreen,
}: SketchPausedIndicatorProps) {
	const showPauseIcon =
		sketchIsPaused &&
		!settingsMenuOnScreen &&
		!aboutMenuOnScreen &&
		!gameMenuOnScreen;

	return (
		<div
			className={`absolute top-0 left-2 w-full h-full flex items-center justify-center pointer-events-none transition-all duration-100 ${showPauseIcon ? 'opacity-100' : 'opacity-0'} `}>
			<div className='rounded-lg bg-zinc-900/95 border border-stone-300/25 flex flex-col justify-center items-center pt-1 pb-4 shadow-lg shadow-stone-300/5'>
				<PauseIcon
					size='size-24 md:size-32'
					classes='drop-shadow-xl drop-shadow-stone-300/20'
				/>

				<p className='text-lg/2 sm:text-xl/3 md:text-2xl/4 font-bold tracking-tight'>
					Paused
				</p>
			</div>
		</div>
	);
}
