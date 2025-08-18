import { useCallback } from 'react';
import { ReactP5Wrapper } from '@p5-wrapper/react';
import {
	RPSIcon,
	RPSHeader,
	RPSSettingsMenu,
	RPSInitializeSketchMenu,
	SketchPausedIndicator,
	RPSAboutMenu,
} from '../components';
import { WindowMenuWrapper } from '../../devsktop';
import { setupCanvasDimensions } from '../../../functions';
import { RPSSketch } from '../sketch';
import { useSketchUpdateState } from '../../../hooks/rps';
import type { RPSSketchWindowProps } from './rps-sketch-window-props';
import { RPSGameMenu } from '../components/rps-menus/rps-game-menu';

/**
 * RPSSketchWindow component renders the complete Rock Paper Scissors simulation interface.
 *
 * This component serves as the main container for the Rock Paper Scissors game, managing the
 * P5.js sketch rendering, user interactions, and menu overlays. It handles the initialization
 * flow where users can configure game settings before starting, and provides pause functionality
 * during gameplay. The component integrates various UI elements including headers, menus, and
 * visual indicators to create a complete gaming experience.
 *
 * Key Features:
 * - P5.js canvas integration with React using ReactP5Wrapper
 * - Dynamic initialization screen with game configuration options
 * - Click-to-pause functionality with debouncing to prevent accidental triggers
 * - Responsive canvas sizing based on site settings
 * - Overlay menus for settings, about information, and game controls
 * - Visual pause indicator that respects menu visibility
 * - Header navigation with menu toggle buttons
 * - Automatic sketch state management and updates
 *
 * The component manages the transition between the initialization phase (where users can
 * configure particle counts, colors, and other settings) and the active simulation phase
 * (where the game runs and users can pause by clicking). All menu interactions automatically
 * pause the simulation to ensure smooth user experience.
 *
 * @param props - Component props for the RPS sketch window
 * @param props.windowState - Complete window state from useRPSSketchWindow hook containing
 *   sketch initialization status, pause state, menu visibility, and control functions
 * @param props.siteSettings - Global site settings from SiteContext containing theme,
 *   accent colors, and responsive breakpoint configurations
 */
export function RPSSKetchWindow({
	windowState,
	siteSettings,
}: RPSSketchWindowProps) {
	const canvasSize = setupCanvasDimensions(siteSettings);
	const sketchState = useSketchUpdateState(canvasSize, windowState);

	/**
	 * Avoid 'Start Game' click accidentally carrying over and pausing the sketch...
	 */
	const handlePauseSketchClick = useCallback(() => {
		const { sketchIsInitialized } = windowState;
		if (!sketchIsInitialized) return;
		if (Date.now() - sketchIsInitialized < 1000) {
			return;
		}
		// Toggle sketch pause state...
		windowState.setSketchIsPaused(prev => !prev);
	}, [windowState]);

	return (
		<div className='flex flex-col h-full justify-center items-center relative isolate pb-2'>
			{/* HEADER */}
			<RPSHeader {...windowState} />

			{/* SKETCH MAIN */}
			{!windowState.sketchIsInitialized ?
				<RPSInitializeSketchMenu
					siteSettings={siteSettings}
					windowState={windowState}
				/>
			:	<div
					className='relative mt-1 border border-stone-300/30 shadow-lg shadow-stone-300/5'
					onClick={handlePauseSketchClick}>
					<ReactP5Wrapper
						sketch={RPSSketch}
						{...sketchState}
					/>
					<SketchPausedIndicator
						sketchIsPaused={windowState.sketchIsPaused}
						settingsMenuOnScreen={windowState.showAboutMenu}
						aboutMenuOnScreen={windowState.showAboutMenu}
						gameMenuOnScreen={windowState.showGameMenu}
					/>
				</div>
			}

			{windowState.sketchIsInitialized && (
				<p className='text-stone-300/50 text-base/3 sm:text-lg/4 md:text-xl/5 mt-1.5 tracking-tighter'>
					sketch by @horaciovelvetine
				</p>
			)}

			{/* MENUS */}
			<WindowMenuWrapper
				setShowMenu={windowState.setShowAboutMenu}
				showMenu={windowState.showAboutMenu}
				windowState={windowState}
				siteSettings={siteSettings}
				menuMainTitle='About Rock, Paper, Scissors'
				Content={RPSAboutMenu}
				Icon={RPSIcon}
			/>

			<WindowMenuWrapper
				setShowMenu={windowState.setShowSettingsMenu}
				showMenu={windowState.showSettingsMenu}
				windowState={windowState}
				siteSettings={siteSettings}
				menuMainTitle='Settings'
				Content={RPSSettingsMenu}
				Icon={RPSIcon}
			/>

			<WindowMenuWrapper
				setShowMenu={windowState.setShowGameMenu}
				showMenu={windowState.showGameMenu}
				windowState={windowState}
				siteSettings={siteSettings}
				menuMainTitle='Game Menu'
				Content={RPSGameMenu}
				Icon={RPSIcon}
			/>
		</div>
	);
}
