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
		<div className='flex w-full flex-wrap items-center justify-between gap-3 rounded-[18px] border border-white/8 bg-white/[0.03] px-3 py-2'>
			<h2
				className={`w-full min-w-0 text-balance font-extrabold tracking-tighter text-xl xs:text-2xl sm:text-3xl ${sketchIsInitialized ? '' : 'hidden md:block'}`}>
				Rock, Paper, Scissors
			</h2>

			<div
				className={`flex w-full flex-wrap items-center justify-end gap-1 ${sketchIsInitialized ? '' : 'hidden'}`}>
				<button
					type='button'
					title='Show the about menu for Rock, Paper, Scissors'
					className='rounded-xl border border-white/8 bg-white/[0.03] p-1.5 transition-colors hover:bg-white/[0.08]'
					onClick={handleShowAboutMenu}>
					<QuestionMarkIcon
						size='size-7 xs:size-8 sm:size-9'
						classes='p-0.25'
					/>
				</button>

				<button
					type='button'
					className='rounded-xl border border-white/8 bg-white/[0.03] p-1.5 transition-colors hover:bg-white/[0.08]'
					title='Show the settings menu for Rock, Paper, Scissors'
					onClick={handleShowSettingsMenu}>
					<SettingsIcon size='size-7 xs:size-8 sm:size-9' />
				</button>

				<button
					type='button'
					title='Show the game options menu'
					className='rounded-xl border border-white/8 bg-white/[0.03] px-3 py-1 text-2xl font-extrabold leading-none transition-colors hover:bg-white/[0.08] xs:text-3xl'
					onClick={handleShowGameMenu}>
					...
				</button>
			</div>
		</div>
	);
}
