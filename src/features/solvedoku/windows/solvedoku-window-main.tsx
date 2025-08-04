import { useState } from 'react';
import type { SiteSettings, SolvedokuGameState } from '../../../types';
import {
	useArrowKeyListener,
	useKeyboardShortcuts,
	useSolutionFinder,
} from '../../../hooks/solvedoku';

// SUB-COMPONENTS
import { SolvedokuHeader } from '../components/solvedoku-header';
import { GameBoardTable } from '../components/game-board-table';
import { NumberInputButtons } from '../components/number-input-buttons';
import { PuzzleSolverButtons } from '../components/puzzle-solver-buttons';
import { MobileAboutMenu } from '../components/mobile-menus/mobile-about-menu';
import { MobileSettingsMenu } from '../components/mobile-menus/mobile-settings-menu';
import { MobileMenuWrapper } from '../components/mobile-menus/mobile-menu-wrapper';
import { PuzzleInfoDisplay } from '../components/puzzle-info-display';
import { SolvedokuGameMenu } from '../components/game-menu/solvedoku-game-menu';

interface SolvedokuWindowMainProps {
	windowState: SolvedokuGameState;
	siteSettings: SiteSettings;
}

export function SolvedokuWindowMain({
	windowState,
	siteSettings,
}: SolvedokuWindowMainProps) {
	const [showMobileSettings, setShowMobileSettings] = useState(false);
	const [showMobileAbout, setShowMobileAbout] = useState(false);
	const [showGameMenu, setShowGameMenu] = useState(false);
	const [currentPuzzleDifficultyDisplay, setCurrentPuzzleDifficultyDisplay] =
		useState(windowState.selectedDifficulty);

	// Hook listeners...
	useSolutionFinder(windowState);
	useArrowKeyListener(windowState);
	useKeyboardShortcuts(windowState);

	return (
		<div className='flex flex-col justify-center items-center relative h-full sm:mx-6 md:mx-12'>
			{/* MOBILE HEADER ELEMENTS */}
			<SolvedokuHeader
				showMobileAboutMenu={showMobileAbout}
				showGameMenu={showGameMenu}
				showMobileSettingsMenu={showMobileSettings}
				setShowMobileAbout={setShowMobileAbout}
				setShowMobileSettings={setShowMobileSettings}
				setShowGameMenu={setShowGameMenu}
			/>

			{/* GAME BOARD & CELL DATA TABLE */}
			<GameBoardTable
				solvedokuState={windowState}
				siteSettings={siteSettings}
			/>

			{/* PUZZLE INFO DETAILS */}
			<PuzzleInfoDisplay
				currentPuzzleDifficulty={currentPuzzleDifficultyDisplay}
				solvedokuState={windowState}
				siteSettings={siteSettings}
			/>

			{/* NUMBER INPUTS */}
			<NumberInputButtons
				selectedCellID={windowState.selectedCellID}
				updateCellValue={windowState.updateCellValue}
				accentColor={siteSettings.accentColor}
			/>

			{/* SOLVER CONTROLS */}
			<PuzzleSolverButtons
				siteSettings={siteSettings}
				solvedokuState={windowState}
			/>

			{/* MOBILE MENU's */}
			<MobileMenuWrapper
				setShowMobileMenu={setShowMobileAbout}
				showMobileMenu={showMobileAbout}
				siteSettings={siteSettings}
				menuMainTitle='About Solvedoku'
				Content={MobileAboutMenu}
				solvedokuState={windowState}
				setCurrentPuzzleDifficultyDisplay={setCurrentPuzzleDifficultyDisplay}
			/>
			<MobileMenuWrapper
				setShowMobileMenu={setShowGameMenu}
				showMobileMenu={showGameMenu}
				siteSettings={siteSettings}
				menuMainTitle='Solvedoku Menu'
				Content={SolvedokuGameMenu}
				solvedokuState={windowState}
				setCurrentPuzzleDifficultyDisplay={setCurrentPuzzleDifficultyDisplay}
			/>
			<MobileMenuWrapper
				setShowMobileMenu={setShowMobileSettings}
				showMobileMenu={showMobileSettings}
				siteSettings={siteSettings}
				menuMainTitle='Settings'
				Content={MobileSettingsMenu}
				solvedokuState={windowState}
				setCurrentPuzzleDifficultyDisplay={setCurrentPuzzleDifficultyDisplay}
			/>
		</div>
	);
}
