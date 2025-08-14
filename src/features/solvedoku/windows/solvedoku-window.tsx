import type { SiteSettings, SolvedokuWindowState } from '../../../types';
// HOOKS
import {
	useArrowKeyListener,
	useKeyboardShortcuts,
	useSolutionFinder,
} from '../../../hooks/solvedoku';

// SUB-COMPONENTS
import {
	SolvedokuHeader,
	PuzzleSolverButtons,
	PuzzleInfoDisplay,
	GameBoardTable,
	GameMenu,
	AboutMenu,
	SettingsMenu,
	NumberInputButtons,
} from '../components';
import { WindowMenuWrapper } from '../../../components';

interface SolvedokuWindowProps {
	windowState: SolvedokuWindowState;
	siteSettings: SiteSettings;
}

export function SolvedokuWindow({
	windowState,
	siteSettings,
}: SolvedokuWindowProps) {
	// Hook listeners...(useEffects...)
	useSolutionFinder(windowState);
	useArrowKeyListener(windowState);
	useKeyboardShortcuts(windowState);

	return (
		<div className='flex flex-col h-full justify-center items-center relative sm:mx-6 md:mx-12'>
			{/* MOBILE HEADER ELEMENTS */}
			<SolvedokuHeader
				showAboutMenu={windowState.showAboutMenu}
				showGameMenu={windowState.showGameMenu}
				showSettingsMenu={windowState.showSettingsMenu}
				setShowAboutMenu={windowState.setShowAboutMenu}
				setShowSettingsMenu={windowState.setShowSettingsMenu}
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
			<WindowMenuWrapper
				setShowMenu={windowState.setShowAboutMenu}
				showMenu={windowState.showAboutMenu}
				siteSettings={siteSettings}
				menuMainTitle='About Solvedoku'
				Content={AboutMenu}
				windowState={windowState}
			/>
			<WindowMenuWrapper
				setShowMenu={windowState.setShowGameMenu}
				showMenu={windowState.showGameMenu}
				siteSettings={siteSettings}
				menuMainTitle='Solvedoku Menu'
				Content={GameMenu}
				windowState={windowState}
			/>
			<WindowMenuWrapper
				setShowMenu={windowState.setShowSettingsMenu}
				showMenu={windowState.showSettingsMenu}
				siteSettings={siteSettings}
				menuMainTitle='Settings'
				Content={SettingsMenu}
				windowState={windowState}
			/>
		</div>
	);
}
