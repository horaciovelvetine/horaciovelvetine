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
import { AboutMenu } from '../components/solvedoku-menus/about-menu';
import { SettingsMenu } from '../components/solvedoku-menus/settings-menu';
import { MenuWrapper } from '../components/solvedoku-menus/menu-wrapper';
import { PuzzleInfoDisplay } from '../components/puzzle-info-display';
import { GameMenu } from '../components/solvedoku-menus/game-menu';

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
			<MenuWrapper
				setShowMobileMenu={windowState.setShowMobileAbout}
				showMobileMenu={windowState.showMobileAbout}
				siteSettings={siteSettings}
				menuMainTitle='About Solvedoku'
				Content={AboutMenu}
				solvedokuState={windowState}
				setCurrentPuzzleDifficultyDisplay={
					windowState.setCurrentPuzzleDifficultyDisplay
				}
			/>
			<MenuWrapper
				setShowMobileMenu={windowState.setShowGameMenu}
				showMobileMenu={windowState.showGameMenu}
				siteSettings={siteSettings}
				menuMainTitle='Solvedoku Menu'
				Content={GameMenu}
				solvedokuState={windowState}
				setCurrentPuzzleDifficultyDisplay={
					windowState.setCurrentPuzzleDifficultyDisplay
				}
			/>
			<MenuWrapper
				setShowMobileMenu={windowState.setShowMobileSettings}
				showMobileMenu={windowState.showMobileSettings}
				siteSettings={siteSettings}
				menuMainTitle='Settings'
				Content={SettingsMenu}
				solvedokuState={windowState}
				setCurrentPuzzleDifficultyDisplay={
					windowState.setCurrentPuzzleDifficultyDisplay
				}
			/>
		</div>
	);
}
