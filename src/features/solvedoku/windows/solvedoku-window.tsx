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
	NumberInputButtons,
	SolvedokuIcon,
	SolvedokuAboutMenu,
	SolvedokuGameMenu,
	SolvedokuSettingsMenu,
	SolvedokuTopMenu,
} from '../components';
import { WindowMenuWrapper } from '../../devsktop';
import type { SolvedokuWindowProps } from './solvedoku-window-props';

/**
 * SolvedokuWindow component serves as the main container for the Solvedoku puzzle game interface.
 *
 * This component orchestrates the entire Solvedoku game experience, managing the puzzle board,
 * user interactions, solver functionality, and various menu systems. It integrates multiple hooks
 * for keyboard navigation, solution finding, and shortcut handling, while providing a responsive
 * layout that adapts to different screen sizes.
 *
 * Features:
 * - Interactive 9x9 Sudoku puzzle board with cell selection
 * - Automatic puzzle solving with step-by-step visualization
 * - Keyboard navigation and shortcut support
 * - Number input interface for manual puzzle solving
 * - Puzzle information display showing difficulty and progress
 * - About, settings, and game menu overlays
 * - Responsive design optimized for mobile and desktop
 * - Integration with site-wide theming and accent colors
 *
 * The component uses several specialized hooks to handle complex game logic:
 * - useSolutionFinder for automatic puzzle solving algorithms
 * - useArrowKeyListener for keyboard-based cell navigation
 * - useKeyboardShortcuts for game control shortcuts
 *
 * @param props - Component props for the Solvedoku window
 * @param props.windowState - State management object from useSolvedokuWindow hook containing game state and actions
 * @param props.siteSettings - Global site configuration including theme and accent color preferences
 */
export function SolvedokuWindow({
	windowState,
	siteSettings,
}: SolvedokuWindowProps) {
	// Hook listeners...(useEffects...)
	useSolutionFinder(windowState);
	useArrowKeyListener(windowState);
	useKeyboardShortcuts(windowState);

	return (
		<div
			className='flex flex-col pb-2'
			style={{ maxHeight: 'calc(100vh - 72px)' }}>
			{/* MAIN CONTAINER WITH SCROLLABLE CONTENT */}
			<div className='flex flex-1 flex-col overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-stone-400/80 [&::-webkit-scrollbar-thumb]:bg-stone-600/70 [&::-webkit-scrollbar]:bg-transparent [&::-webkit-scrollbar-track]:bg-transparent'>
				<div className='flex flex-col w-full  items-center relative py-2'>
					{/* HEADER */}
					<SolvedokuHeader {...windowState} />

					{/* TOP MENU SHOWN ON INIT */}
					{windowState.showTopMenu && (
						<SolvedokuTopMenu
							windowState={windowState}
							siteSettings={siteSettings}
						/>
					)}

					{/* GAME BOARD & CELL DATA TABLE */}
					<GameBoardTable
						windowState={windowState}
						siteSettings={siteSettings}
					/>

					{/* PUZZLE INFO DETAILS */}
					<PuzzleInfoDisplay
						windowState={windowState}
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
						windowState={windowState}
					/>
				</div>
			</div>

			{/* MENU's */}
			<WindowMenuWrapper
				setShowMenu={windowState.setShowAboutMenu}
				showMenu={windowState.showAboutMenu}
				siteSettings={siteSettings}
				menuMainTitle='About Solvedoku'
				Content={SolvedokuAboutMenu}
				windowState={windowState}
				Icon={SolvedokuIcon}
			/>
			<WindowMenuWrapper
				setShowMenu={windowState.setShowGameMenu}
				showMenu={windowState.showGameMenu}
				siteSettings={siteSettings}
				menuMainTitle='Solvedoku Menu'
				Content={SolvedokuGameMenu}
				windowState={windowState}
				Icon={SolvedokuIcon}
			/>
			<WindowMenuWrapper
				setShowMenu={windowState.setShowSettingsMenu}
				showMenu={windowState.showSettingsMenu}
				siteSettings={siteSettings}
				menuMainTitle='Settings'
				Content={SolvedokuSettingsMenu}
				windowState={windowState}
				Icon={SolvedokuIcon}
			/>
		</div>
	);
}
