import { useState, useCallback } from 'react';
import type {
	NavBarMenuParent,
	SolvedokuWindowState,
	WindowIDs,
	PuzzleDifficulty,
} from '../../types';
import { useSolvedokuGameState } from '../solvedoku/use-solvedoku-game-state';

export function useSolvedokuWindow(): SolvedokuWindowState {
	const windowID = 'solvedoku-window';
	const title = 'Solvedoku';
	const [zIndex, setZIndex] = useState('0');
	const [isShown, setIsShown] = useState(false);
	const solvedokuState = useSolvedokuGameState();

	// Mobile menu state management
	const [showSettingsMenu, setShowSettingsMenu] = useState(false);
	const [showAboutMenu, setShowAboutMenu] = useState(false);
	const [showGameMenu, setShowGameMenu] = useState(false);
	const [currentPuzzleDifficultyDisplay, setCurrentPuzzleDifficultyDisplay] =
		useState<PuzzleDifficulty>(solvedokuState.selectedDifficulty);

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
							parentWindowID: windowID,
							titleText: 'Settings',
							onClickAction: () => {
								setShowSettingsMenu(true)
							},
							displayMenuBreakAfter: true,
						},
						{
							key: 'solvedoku-about',
							parentWindowID: windowID,
							titleText: 'About Solvedoku',
							hoverExplainerTitle:
								'Open a window explaining this application and what it does',
							onClickAction: () => {
								openWindowByID('about-solvedoku-window');
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
							parentWindowID: windowID,
							titleText: 'New Game',
							hoverExplainerTitle:
								'Create a new puzzle based on the currently selected difficulty',
							onClickAction: () => {
								openWindowByID('solvedoku-window');
								solvedokuState.generateRandomPuzzle();
							},
							displayMenuBreakAfter: true,
						},
						{
							key: 'clear-game',
							parentWindowID: windowID,
							titleText: 'Clear Game',
							hoverExplainerTitle: 'Clear the current game board completely',
							isDisabled: solvedokuState.gameBoardEmpty,
							onClickAction: () => {
								openWindowByID('solvedoku-window');
								if (solvedokuState.gameBoardEmpty) return;
								solvedokuState.clearGameBoard();
							},
						},
						{
							key: 'reset-game',
							parentWindowID: windowID,
							titleText: 'Reset Game',
							hoverExplainerTitle:
								'Reset any moves/answers on the board, ignores the generated puzzle',
							isDisabled: !solvedokuState.canUndo,
							displayMenuBreakAfter: true,
							onClickAction: () => {
								if (!solvedokuState.canUndo) return;
								openWindowByID('solvedoku-window');
								solvedokuState.resetGameStepwise();
							},
						},
						{
							key: 'solve-puzzle',
							parentWindowID: windowID,
							titleText:
								solvedokuState.isFindingSolution ? 'Pause Solving' : (
									'Solve Puzzle'
								),
							hoverExplainerTitle:
								solvedokuState.isFindingSolution ?
									'Pause the current solution finder'
									: 'Solve the current puzzle',
							isDisabled: solvedokuState.isValidSolution,
							displaySectionHeader: 'Puzzle Solver',
							onClickAction: () => {
								openWindowByID('solvedoku-window');
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
							parentWindowID: windowID,
							titleText: 'Undo',
							displayKeyboardShortcut: '⌘ Z',
							hoverExplainerTitle: 'Undo the last move made',
							displayMenuBreakAfter: true,
							isDisabled: !solvedokuState.canUndo,
							onClickAction: () => {
								if (solvedokuState.canUndo) {
									openWindowByID('solvedoku-window');
									solvedokuState.undo();
								}
							},
						},
						{
							key: 'cut-puzzle',
							parentWindowID: windowID,
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
							parentWindowID: windowID,
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
							parentWindowID: windowID,
							titleText: 'Solvedoku Help',
							hoverExplainerTitle: 'Open the Solvedoku help window',
							onClickAction: () => {
								openWindowByID('about-solvedoku-window');
							},
						},
					],
				},
			];
		},
		[solvedokuState]
	);

	return {
		id: windowID,
		title,
		zIndex,
		setZIndex,
		navBarMenuItems,
		isShown,
		setIsShown,
		...solvedokuState,
		// Mobile menu state
		showSettingsMenu,
		setShowSettingsMenu,
		showAboutMenu,
		setShowAboutMenu,
		showGameMenu,
		setShowGameMenu,
		currentPuzzleDifficultyDisplay,
		setCurrentPuzzleDifficultyDisplay,
	};
}
