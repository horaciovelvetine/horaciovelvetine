import { QuestionMarkIcon, SettingsIcon } from '../../../assets';
import type { SolvedokuWindowState } from '../../../types';

/**
 * Header component for the Solvedoku game that provides navigation controls
 * Contains buttons for accessing the about menu, settings menu, and game menu
 * Handles showing/hiding menus and ensures only one menu is visible at a time
 *
 * @param {boolean} props.showAboutMenu - Whether the about menu is currently visible
 * @param {boolean} props.showGameMenu - Whether the game menu is currently visible
 * @param {boolean} props.showSettingsMenu - Whether the settings menu is currently visible
 * @param {Dispatch<SetStateAction<boolean>>} props.setShowAboutMenu - Function to control about menu visibility
 * @param {Dispatch<SetStateAction<boolean>>} props.setShowSettingsMenu - Function to control settings menu visibility
 * @param {Dispatch<SetStateAction<boolean>>} props.setShowGameMenu - Function to control game menu visibility
 * @returns JSX element containing the Solvedoku header with menu controls
 */
export function SolvedokuHeader({
	showAboutMenu,
	showGameMenu,
	showSettingsMenu,
	setShowAboutMenu,
	setShowSettingsMenu,
	setShowGameMenu,
}: SolvedokuWindowState) {
	// HANDLERS
	const handleShowMobileAbout = () => {
		if (showSettingsMenu) setShowSettingsMenu(false);
		if (showGameMenu) setShowGameMenu(false);
		setShowAboutMenu(prev => !prev);
	};

	const handleShowMobileSettings = () => {
		if (showAboutMenu) setShowAboutMenu(false);
		if (showGameMenu) setShowGameMenu(false);
		setShowSettingsMenu(prev => !prev);
	};

	const handleShowGameMenu = () => {
		if (showAboutMenu) setShowAboutMenu(false);
		if (showSettingsMenu) setShowSettingsMenu(false);
		setShowGameMenu(prev => !prev);
	};

	return (
		<div className='flex w-full items-center justify-between px-2 md:px-6.5 md:pb-1 e'>
			<h2 className='md:hidden font-extrabold tracking-tighter text-3xl xs:text-4xl sm:text-5xl text-center'>
				Solvedoku
			</h2>
			<div className='flex justify-end items-center w-full gap-1'>
				<button
					type='button'
					title='Show the about menu for Solvedoku'
					className='md:mt-1.5'
					onClick={handleShowMobileAbout}>
					<QuestionMarkIcon
						size='size-8 xs:size-10 sm:size-12'
						classes='p-0.25'
					/>
				</button>

				<button
					type='button'
					className='md:mt-1.5'
					title='Show the settings menu for Solvedoku'
					onClick={handleShowMobileSettings}>
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
