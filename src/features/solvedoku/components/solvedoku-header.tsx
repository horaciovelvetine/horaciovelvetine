import type { Dispatch, SetStateAction } from 'react';
import { QuestionMarkIcon, SettingsIcon } from '../../../assets';

interface SolvedokuHeaderProps {
	showMobileSettingsMenu: boolean;
	showMobileAboutMenu: boolean;
	showGameMenu: boolean;
	setShowMobileSettings: Dispatch<SetStateAction<boolean>>;
	setShowMobileAbout: Dispatch<SetStateAction<boolean>>;
	setShowGameMenu: Dispatch<SetStateAction<boolean>>;
}

export function SolvedokuHeader({
	showMobileAboutMenu,
	showGameMenu,
	showMobileSettingsMenu,
	setShowMobileAbout,
	setShowMobileSettings,
	setShowGameMenu,
}: SolvedokuHeaderProps) {
	// HANDLERS
	const handleShowMobileAbout = () => {
		if (showMobileSettingsMenu) setShowMobileSettings(false);
		if (showGameMenu) setShowGameMenu(false);
		setShowMobileAbout(prev => !prev);
	};

	const handleShowMobileSettings = () => {
		if (showMobileAboutMenu) setShowMobileAbout(false);
		if (showGameMenu) setShowGameMenu(false);
		setShowMobileSettings(prev => !prev);
	};

	const handleShowGameMenu = () => {
		if (showMobileAboutMenu) setShowMobileAbout(false);
		if (showMobileSettingsMenu) setShowMobileSettings(false);
		setShowGameMenu(prev => !prev);
	};

	return (
		<div className='flex w-full items-center justify-between px-2 text-white sm:px-14 md:px-6 md:pb-1'>
			<h2 className='md:hidden font-extrabold tracking-tighter text-2xl xs:text-3xl sm:text-4xl py-1 text-center'>
				Solvedoku
			</h2>
			<div className='flex justify-end w-full gap-1'>
				<button
					type='button'
					title='Show the about menu for Solvedoku'
					className='rounded-full border border-white md:hidden'
					onClick={handleShowMobileAbout}>
					<img
						src={QuestionMarkIcon}
						alt='Question mark icon'
						className='size-5 p-0.25 xs:size-6 sm:size-8 md:size-11'
					/>
				</button>

				<button
					type='button'
					title='Show the settings menu for Solvedoku'
					className='md:hidden'
					onClick={handleShowMobileSettings}>
					<img
						src={SettingsIcon}
						alt='Settings gear icon'
						className='size-5.5 xs:size-6.5 sm:size-9 md:size-12'
					/>
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
