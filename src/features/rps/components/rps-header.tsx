import { QuestionMarkIcon, SettingsIcon } from '../../../assets';
import type { RPSWindowState } from '../../../types';

/**
 * RPSHeader component renders the header section for the Rock Paper Scissors simulation.
 *
 * This component provides the main navigation and control interface for the RPS game, displaying
 * the game title and interactive menu buttons. The header adapts its layout based on whether the
 * sketch is initialized, showing menu controls only when the game is active. When menu buttons
 * are clicked, the component automatically pauses the simulation to prevent interference with
 * user interactions.
 *
 * Features:
 * - Responsive game title that centers when sketch is not initialized
 * - About menu button to show game information and rules
 * - Settings menu button for game configuration and controls
 * - Automatic sketch pausing when menus are opened
 * - Mutual exclusion of menu states (only one menu open at a time)
 * - Conditional rendering based on sketch initialization state
 * - Responsive design with breakpoint-specific styling
 *
 * @param props - Component props for header functionality
 * @param props.showAboutMenu - Boolean indicating if the about menu is currently visible
 * @param props.showSettingsMenu - Boolean indicating if the settings menu is currently visible
 * @param props.setShowAboutMenu - Function to toggle the visibility of the about menu
 * @param props.setShowSettingsMenu - Function to toggle the visibility of the settings menu
 * @param props.sketchIsInitialized - Timestamp indicating when the sketch was initialized, or undefined if not initialized
 * @param props.setSketchIsPaused - Function to pause/unpause the simulation
 */

export function RPSHeader({
	showAboutMenu,
	showSettingsMenu,
	showGameMenu,
	setShowGameMenu,
	setShowAboutMenu,
	setShowSettingsMenu,
	sketchIsInitialized,
	setSketchIsPaused,
}: RPSWindowState) {
	const handleShowAboutMenu = () => {
		setSketchIsPaused(true);
		if (showSettingsMenu) setShowSettingsMenu(false);
		if (showGameMenu) setShowGameMenu(false);
		setShowAboutMenu(prev => !prev);
	};

	const handleShowSettingsMenu = () => {
		setSketchIsPaused(true);
		if (showAboutMenu) setShowAboutMenu(false);
		if (showGameMenu) setShowGameMenu(false);
		setShowSettingsMenu(prev => !prev);
	};

	const handleShowGameMenu = () => {
		setSketchIsPaused(true);
		if (showAboutMenu) setShowAboutMenu(false);
		if (showSettingsMenu) setShowSettingsMenu(false);
		setShowGameMenu(prev => !prev);
	};

	return (
		<div className='flex w-full items-center justify-center px-2 md:px-6.5 md:pb-1'>
			<h2
				className={`md:hidden font-extrabold tracking-tighter text-xl xs:text-2xl sm:text-3xl w-full text-nowrap my-0.5 ${sketchIsInitialized ? '' : 'hidden'}`}>
				Rock, Paper, Scissors
			</h2>

			<div
				className={`flex justify-end items-center w-full gap-0.5 ${sketchIsInitialized ? '' : 'hidden'}`}>
				<button
					type='button'
					title='Show the about menu for Solvedoku'
					className='md:mt-1.5'
					onClick={handleShowAboutMenu}>
					<QuestionMarkIcon
						size='size-8 xs:size-10 sm:size-12'
						classes='p-0.25'
					/>
				</button>

				<button
					type='button'
					className='md:mt-1.5'
					title='Show the settings menu for Solvedoku'
					onClick={handleShowSettingsMenu}>
					<SettingsIcon size='size-8 xs:size-10 sm:size-12.5' />
				</button>

				<button
					type='button'
					title='Show the game options menu'
					className='font-extrabold text-3xl xs:text-4xl sm:text-5xl md:text-5xl leading-0 md:leading-none'
					onClick={handleShowGameMenu}>
					...
				</button>
			</div>
		</div>
	);
}
