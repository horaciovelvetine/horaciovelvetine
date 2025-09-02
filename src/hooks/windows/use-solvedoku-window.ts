import { useState, useCallback } from 'react';
import type {
	NavBarMenuParent,
	SolvedokuWindowState,
	WindowIDs,
	PuzzleDifficulty,
} from '../../types';
import { useSolvedokuGameState } from '../solvedoku/use-solvedoku-game-state';

/**
 * Custom hook for managing the Solvedoku window state and functionality
 *
 * Provides comprehensive window management for the Solvedoku application, including
 * window display state, menu controls, navigation bar items, and integration with
 * the underlying Solvedoku game state. Handles all window-specific interactions
 * and provides callbacks for game actions like starting new games and managing
 * puzzle difficulty settings.
 *
 * @returns {SolvedokuWindowState} Complete window state object containing:
 *   - Basic window management (show/hide, z-index, title, etc.)
 *   - Menu state controls (settings, about, game menus)
 *   - Navigation bar menu configuration
 *   - Integrated Solvedoku game state and controls
 *   - Current puzzle difficulty display state
 */
export function useSolvedokuWindow(): SolvedokuWindowState {
	const windowID = 'solvedoku-window';
	const title = 'Solvedoku';
	const [zIndex, setZIndex] = useState('0');
	const [isFocused, setIsFocused] = useState(false);
	const [isShown, setIsShown] = useState(false);
	const solvedokuState = useSolvedokuGameState();

	// Mobile menu state management
	const [showSettingsMenu, setShowSettingsMenu] = useState(false);
	const [showAboutMenu, setShowAboutMenu] = useState(false);
	const [showGameMenu, setShowGameMenu] = useState(false);
	const [showTopMenu, setShowTopMenu] = useState(true);
	const [currentPuzzleDifficultyDisplay, setCurrentPuzzleDifficultyDisplay] =
		useState<PuzzleDifficulty>(solvedokuState.selectedDifficulty);

	/**
	 * Clean up menu's and window state when window is closed.
	 */
	const closeWindowCallback = useCallback(() => {
		setShowSettingsMenu(false);
		setShowAboutMenu(false);
		setShowGameMenu(false);
		solvedokuState.clearGameBoard();
		setShowTopMenu(true);
	}, [solvedokuState]);

	const navBarMenuItems = useCallback(
		(openWindowByID: (windowID: WindowIDs) => void): NavBarMenuParent[] => {
			return [
				{
					key: 'solvedoku-menu',
					displayText: 'Solvedoku',
					isAppTitledDisplayText: true,
					dropdownOptions: [
						{
							key: 'solvedoku-settings',
							titleText: 'Settings',
							onClickAction: () => {
								if (!isShown) openWindowByID('solvedoku-window');
								setShowSettingsMenu(true);
							},
							displayMenuBreakAfter: true,
						},
						{
							key: 'solvedoku-about',
							titleText: 'About Solvedoku',
							hoverExplainerTitle:
								'Open a window explaining this application and what it does',
							onClickAction: () => {
								if (!isShown) openWindowByID('solvedoku-window');
								setShowAboutMenu(prev => !prev);
							},
						},
					],
				},
				{
					key: 'file-menu',
					displayText: 'File',
					dropdownOptions: [
						{
							key: 'new-game',
							titleText: 'New Game',
							hoverExplainerTitle:
								'Create a new puzzle based on the currently selected difficulty',
							onClickAction: () => {
								if (isShown) openWindowByID('solvedoku-window');
								solvedokuState.generateRandomPuzzle();
							},
							displayMenuBreakAfter: true,
						},
						{
							key: 'clear-game',
							titleText: 'Clear Game',
							hoverExplainerTitle: 'Clear the current game board completely',
							isDisabled: solvedokuState.gameBoardEmpty,
							onClickAction: () => {
								if (!isShown) openWindowByID('solvedoku-window');
								if (solvedokuState.gameBoardEmpty) return;
								solvedokuState.clearGameBoard();
							},
						},
						{
							key: 'reset-game',
							titleText: 'Reset Game',
							hoverExplainerTitle:
								'Reset any moves/answers on the board, ignores the generated puzzle',
							isDisabled: !solvedokuState.canUndo,
							displayMenuBreakAfter: true,
							onClickAction: () => {
								if (!isShown) openWindowByID('solvedoku-window');
								if (!solvedokuState.canUndo) return;
								openWindowByID('solvedoku-window');
								solvedokuState.resetGameStepwise();
							},
						},
						{
							key: 'solve-puzzle',
							titleText:
								solvedokuState.isFindingSolution ? 'Pause Solving' : (
									'Solve Puzzle'
								),
							hoverExplainerTitle:
								solvedokuState.isFindingSolution ?
									'Pause the current solution finder'
								:	'Solve the current puzzle',
							isDisabled: solvedokuState.isValidSolution,
							displaySectionHeader: 'Puzzle Solver',
							onClickAction: () => {
								if (!isShown) openWindowByID('solvedoku-window');
								if (solvedokuState.isValidSolution) {
									return;
								}
								solvedokuState.setIsFindingSolution(prev => !prev);
							},
						},
					],
				},
				{
					key: 'edit-menu',
					displayText: 'Edit',
					dropdownOptions: [
						{
							key: 'undo',
							titleText: 'Undo',
							displayKeyboardShortcut: '⌘ Z',
							hoverExplainerTitle: 'Undo the last move made',
							displayMenuBreakAfter: true,
							isDisabled: !solvedokuState.canUndo,
							onClickAction: () => {
								if (solvedokuState.canUndo) {
									if (!isShown) openWindowByID('solvedoku-window');
									solvedokuState.undo();
								}
							},
						},
						{
							key: 'cut-puzzle',
							titleText: 'Cut',
							hoverExplainerTitle: 'Copy the current puzzle to the clipboard',
							isDisabled: solvedokuState.gameBoardEmpty,
							onClickAction: () => {
								const puzzleString = solvedokuState.gameBoard
									.map(row => row.map(cell => cell.value ?? '.').join(''))
									.join('\n');
								void navigator.clipboard.writeText(puzzleString);
								solvedokuState.clearGameBoard();
							},
						},
						{
							key: 'copy-puzzle',
							titleText: 'Copy',
							hoverExplainerTitle:
								'Copy the current puzzle to the clipboard and clear the board',
							isDisabled: solvedokuState.gameBoardEmpty,
							onClickAction: () => {
								const puzzleString = solvedokuState.gameBoard
									.map(row => row.map(cell => cell.value ?? '.').join(''))
									.join('\n');
								void navigator.clipboard.writeText(puzzleString);
							},
						},
					],
				},
				{
					key: 'help-menu',
					displayText: 'Help',
					dropdownOptions: [
						{
							key: 'solvedoku-help',
							titleText: 'Solvedoku Help',
							hoverExplainerTitle: 'Open the Solvedoku help window',
							onClickAction: () => {
								if (!isShown) openWindowByID('solvedoku-window');
								setShowAboutMenu(prev => !prev);
							},
						},
					],
				},
			];
		},
		[isShown, solvedokuState]
	);

	return {
		id: windowID,
		title,
		zIndex,
		setZIndex,
		navBarMenuItems,
		isShown,
		setIsShown,
		isFocused,
		setIsFocused,
		...solvedokuState,
		// Mobile menu state
		showSettingsMenu,
		setShowSettingsMenu,
		showAboutMenu,
		setShowAboutMenu,
		showGameMenu,
		setShowGameMenu,
		showTopMenu,
		setShowTopMenu,
		closeWindowCallback,
		currentPuzzleDifficultyDisplay,
		setCurrentPuzzleDifficultyDisplay,
	};
}
