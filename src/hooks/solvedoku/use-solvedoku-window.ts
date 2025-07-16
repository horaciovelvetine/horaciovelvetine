import { useState, useMemo } from 'react';
import type {
	ManagedWindow,
	SolvedokuGameState,
	Position,
	SiteSettings,
	NavBarMenuParent,
} from '../../types';
import { setInitialWindowPosition } from '../../functions/site/set-initial-window-position';
import { useSolvedokuGameState } from './use-solvedoku-game-state';

export function useSolvedokuWindow(
	props: SiteSettings
): ManagedWindow & SolvedokuGameState {
	const windowID = 'solvedoku-window';
	const [position, setPosition] = useState<Position>(() =>
		setInitialWindowPosition(props)
	);
	const [zIndex, setZIndex] = useState('0');
	const solvedokuState = useSolvedokuGameState();

	const navBarMenuItems: NavBarMenuParent[] = useMemo((): NavBarMenuParent[] => [
		{
			key: 'solvedoku-menu',
			navbarDisplayText: 'Solvedoku',
			isAppTitledDisplayText: true,
			dropdownOptions: [
				{
					key: 'solvedoku-settings',
					parentWindowID: windowID,
					titleText: 'Settings',
					onClickAction: () => {
						console.log({
							target: 'Solvedoku -> Settings -> Open()',
						});
					},
					displayMenuBreakAfter: true,
				},
				{
					key: 'solvedoku-about',
					parentWindowID: windowID,
					titleText: 'About Solvedoku',
					hoverExplainerTitle: 'Open a window explaining this application and what it does',
					onClickAction: () => {
						console.log({
							tgt: 'Solvedoku -> About Solvedoku -> Open()',
						});
					},
				},
			],
		},
		{
			key: 'file-menu',
			navbarDisplayText: 'File',
			dropdownOptions: [
				{
					key: 'new-game',
					parentWindowID: windowID,
					titleText: 'New Game',
					hoverExplainerTitle: 'Create a new puzzle based on the currently selected difficulty',
					onClickAction: () => {
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
						if (solvedokuState.gameBoardEmpty) return;
						solvedokuState.clearGameBoard();
					},
				},
				{
					key: 'reset-game',
					parentWindowID: windowID,
					titleText: 'Reset Game',
					hoverExplainerTitle: 'Reset any moves/answers on the board, ignores the generated puzzle',
					isDisabled: !solvedokuState.canUndo,
					displayMenuBreakAfter: true,
					onClickAction: () => {
						if (!solvedokuState.canUndo) return;
						solvedokuState.resetGameStepwise();
					},
				},
				{
					key: 'solve-puzzle',
					parentWindowID: windowID,
					titleText: solvedokuState.isFindingSolution ? 'Pause Solving' : 'Solve Puzzle',
					hoverExplainerTitle: solvedokuState.isFindingSolution ? 'Pause the current solution finder' : 'Solve the current puzzle',
					isDisabled: solvedokuState.isValidSolution,
					displaySectionHeader: 'Puzzle Solver',
					onClickAction: () => {
						if (solvedokuState.isValidSolution) {
							return
						}
						solvedokuState.setIsFindingSolution(prev => !prev);
					},
				},
			],
		},
		{
			key: 'edit-menu',
			navbarDisplayText: 'Edit',
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
						solvedokuState.undo();
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
							.map(row =>
								row.map(cell => cell.value ?? '.').join('')
							)
							.join('\n');
						void navigator.clipboard.writeText(puzzleString);
						solvedokuState.clearGameBoard();
					},
				},
				{
					key: 'copy-puzzle',
					parentWindowID: windowID,
					titleText: 'Copy',
					hoverExplainerTitle: 'Copy the current puzzle to the clipboard and clear the board',
					isDisabled: solvedokuState.gameBoardEmpty,
					onClickAction: () => {
						const puzzleString = solvedokuState.gameBoard
							.map(row =>
								row.map(cell => cell.value ?? '.').join('')
							)
							.join('\n');
						void navigator.clipboard.writeText(puzzleString);
					},
				},
			]
		},
		{
			key: 'help-menu',
			navbarDisplayText: 'Help',
			dropdownOptions: [
				{
					key: 'solvedoku-help',
					parentWindowID: windowID,
					titleText: 'Solvedoku Help',
					hoverExplainerTitle: 'Open the Solvedoku help window',
					onClickAction: () => {
						console.log({ tgt: 'Solvedoku => Help => Solvedoku Help()' })
					},
				},
			]
		}
	], [solvedokuState]);

	return {
		id: windowID,
		title: 'Solvedoku',
		position,
		setPosition,
		zIndex,
		setZIndex,
		navBarMenuItems,
		...solvedokuState,
	};
}
