import { useCallback } from 'react';
import { ReactP5Wrapper } from '@p5-wrapper/react';
import {
	RPSIcon,
	RPSHeader,
	RPSSettingsMenu,
	RPSInitializeSketchMenu,
	SketchPausedIndicator,
	RPSAboutMenu,
	RPSGameMenu,
} from '../components';
import { WindowMenuWrapper } from '../../devsktop';
import { setupCanvasDimensions } from '../../../functions';
import { RPSSketch } from '../sketch';
import { useSketchUpdateState } from '../../../hooks/rps';
import type { RPSSketchWindowProps } from './rps-sketch-window-props';
import { useElementSize } from '../../../hooks/site';

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
	const { ref: canvasRegionRef, size: canvasRegionSize } =
		useElementSize<HTMLDivElement>();
	const canvasSize = setupCanvasDimensions(
		{
			width: canvasRegionSize.width || windowState.size.width - 48,
			height: canvasRegionSize.height || windowState.size.height - 180,
		},
		siteSettings.useMobileCompatibility
	);
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
		<div className='relative flex h-full min-h-0 flex-col bg-zinc-950/40'>
			<div className='flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-stone-400/80 [&::-webkit-scrollbar-thumb]:bg-stone-600/70 [&::-webkit-scrollbar]:bg-transparent [&::-webkit-scrollbar-track]:bg-transparent'>
				<div className='flex min-h-full flex-col gap-3 p-3'>
					<RPSHeader {...windowState} />

					{!windowState.sketchIsInitialized ?
						<div className='mx-auto w-full max-w-3xl'>
							<RPSInitializeSketchMenu
								siteSettings={siteSettings}
								windowState={windowState}
							/>
						</div>
					:	<div
							className='flex min-h-0 flex-1 flex-col gap-3'>
							<div
								ref={canvasRegionRef}
								className='flex min-h-[340px] flex-1 items-center justify-center rounded-[22px] border border-white/8 bg-black/25 p-3 shadow-inner shadow-black/35'>
								<div
									className='relative overflow-hidden rounded-[18px] border border-white/10 shadow-2xl shadow-black/35'
									onClick={handlePauseSketchClick}
									style={{
										width: `${canvasSize.width}px`,
										height: `${canvasSize.height}px`,
									}}>
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
							</div>

							<p className='text-center text-sm text-stone-400'>
								Click the canvas to pause. Open settings, help, and runtime
								controls from the window menus above.
							</p>
						</div>
					}
				</div>
			</div>

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
