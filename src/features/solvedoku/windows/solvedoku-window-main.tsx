import type { SiteSettings, SolvedokuWindowState } from '../../../types';
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
	windowState: SolvedokuWindowState;
	siteSettings: SiteSettings;
}

export function SolvedokuWindowMain({
	windowState,
	siteSettings,
}: SolvedokuWindowMainProps) {
	// Hook listeners...
	useSolutionFinder(windowState);
	useArrowKeyListener(windowState);
	useKeyboardShortcuts(windowState);

	return (
		<div className='flex flex-col h-full justify-center items-center relative sm:mx-6 md:mx-12'>
			{/* MOBILE HEADER ELEMENTS */}
			<SolvedokuHeader
				showMobileAboutMenu={windowState.showMobileAbout}
				showGameMenu={windowState.showGameMenu}
				showMobileSettingsMenu={windowState.showMobileSettings}
				setShowMobileAbout={windowState.setShowMobileAbout}
				setShowMobileSettings={windowState.setShowMobileSettings}
				setShowGameMenu={windowState.setShowGameMenu}
			/>

			{/* GAME BOARD & CELL DATA TABLE */}
			<GameBoardTable
				solvedokuState={windowState}
				siteSettings={siteSettings}
			/>

			{/* PUZZLE INFO DETAILS */}
			<PuzzleInfoDisplay
				currentPuzzleDifficulty={windowState.currentPuzzleDifficultyDisplay}
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
				setShowMobileMenu={windowState.setShowMobileAbout}
				showMobileMenu={windowState.showMobileAbout}
				siteSettings={siteSettings}
				menuMainTitle='About Solvedoku'
				Content={MobileAboutMenu}
				solvedokuState={windowState}
				setCurrentPuzzleDifficultyDisplay={windowState.setCurrentPuzzleDifficultyDisplay}
			/>
			<MobileMenuWrapper
				setShowMobileMenu={windowState.setShowGameMenu}
				showMobileMenu={windowState.showGameMenu}
				siteSettings={siteSettings}
				menuMainTitle='Solvedoku Menu'
				Content={SolvedokuGameMenu}
				solvedokuState={windowState}
				setCurrentPuzzleDifficultyDisplay={windowState.setCurrentPuzzleDifficultyDisplay}
			/>
			<MobileMenuWrapper
				setShowMobileMenu={windowState.setShowMobileSettings}
				showMobileMenu={windowState.showMobileSettings}
				siteSettings={siteSettings}
				menuMainTitle='Settings'
				Content={MobileSettingsMenu}
				solvedokuState={windowState}
				setCurrentPuzzleDifficultyDisplay={windowState.setCurrentPuzzleDifficultyDisplay}
			/>
		</div>
	);
}
