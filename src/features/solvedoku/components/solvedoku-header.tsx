import type { Dispatch, SetStateAction } from 'react';
import { QuestionMarkIcon, SettingsIcon } from '../../../assets';

interface SolvedokuHeaderProps {
	showSettingsMenu: boolean;
	showAboutMenu: boolean;
	showGameMenu: boolean;
	setShowSettingsMenu: Dispatch<SetStateAction<boolean>>;
	setShowAboutMenu: Dispatch<SetStateAction<boolean>>;
	setShowGameMenu: Dispatch<SetStateAction<boolean>>;
}

export function SolvedokuHeader({
	showAboutMenu,
	showGameMenu,
	showSettingsMenu,
	setShowAboutMenu,
	setShowSettingsMenu,
	setShowGameMenu,
}: SolvedokuHeaderProps) {
	
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
		<div className='flex w-full items-center justify-between px-2 md:px-6.5 md:pb-1 text-white'>
			<h2 className='md:hidden font-extrabold tracking-tighter text-2xl xs:text-3xl sm:text-4xl text-center'>
				Solvedoku
			</h2>
			<div className='flex justify-end items-center w-full gap-1'>
				<button
					type='button'
					title='Show the about menu for Solvedoku'
					className='md:mt-1.5'
					onClick={handleShowMobileAbout}>
					<QuestionMarkIcon
						size='size-6 xs:size-8 sm:size-9.5'
						classes='p-0.25'
					/>
				</button>

				<button
					type='button'
					className='md:mt-1.5'
					title='Show the settings menu for Solvedoku'
					onClick={handleShowMobileSettings}>
					<SettingsIcon size='size-6 xs:size-8 sm:size-9' />
				</button>

				<button
					type='button'
					title='Show the game options menu'
					className='font-bold text-lg xs:text-2xl sm:text-4xl md:text-5xl leading-0 md:leading-none'
					onClick={handleShowGameMenu}>
					...
				</button>
			</div>
		</div>
	);
}
