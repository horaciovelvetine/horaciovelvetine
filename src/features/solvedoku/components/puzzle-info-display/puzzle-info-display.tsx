import { useCallback, useMemo } from 'react';
import { EraserIcon } from '../../../../assets';
import { PuzzleButton } from '../puzzle-button/puzzle-button';
import {
	capitalize,
	parseFormattedCellIDString,
	TailwindBGs500,
} from '../../../../functions';
import type { SolvedokuWindowProps } from '../../windows/solvedoku-window-props';
import { MessageDisplay } from './message-display';

/**
 * Displays information about the current puzzle state and provides cell editing controls
 * Shows the current puzzle difficulty, solving status, and validation messages
 * Includes an eraser button for clearing non-locked cell values
 *
 * @param {PuzzleDifficulty} props.currentPuzzleDifficulty - The difficulty level of the current puzzle
 * @param {SolvedokuGameState} props.solvedokuState - Current game state including board data and solving status
 * @param {SiteSettings} props.siteSettings - Global site settings like theme colors
 * @returns JSX element containing the puzzle info display
 */

export function PuzzleInfoDisplay({
	windowState,
	siteSettings,
}: SolvedokuWindowProps) {
	const {
		gameBoard,
		isValidSolution,
		isValidGameBoard,
		isUnsolveable,
		isFindingSolution,
		showStoredSolution,
		selectedCellID,
		updateCellValue,
		selectedCellHasValue,
		currentPuzzleDifficultyDisplay,
		undo,
		canUndo,
	} = windowState;

	/**
	 * Handler for erasing the value in a selected cell
	 */
	const handleClearSelectedClick = useCallback(() => {
		if (!selectedCellID) return;
		const [row, col] = parseFormattedCellIDString(selectedCellID);
		const cell = gameBoard[row][col];
		if (cell.locked) return;
		updateCellValue(selectedCellID, null, false);
	}, [gameBoard, selectedCellID, updateCellValue]);

	/**
	 * Determine if the selected cell can be erased (i.e. is not a randomly generated cell)
	 */
	const canEraseCellValue = useMemo(() => {
		if (!selectedCellHasValue) return false;
		const [row, col] = parseFormattedCellIDString(selectedCellID);
		return !gameBoard[row][col].locked;
	}, [selectedCellHasValue, selectedCellID, gameBoard]);

	const solvingMessageBG = TailwindBGs500[siteSettings.accentColor];

	return (
		<div className='flex w-full items-center gap-1 mt-1 px-2'>
			<div className='flex w-3/4 font-semibold gap-2 xs:gap-3 sm:gap-4 justify-around text-lg xs:text-xl sm:text-2xl md:text-3xl pl-2'>
				<p>{capitalize(currentPuzzleDifficultyDisplay)}</p>
				<MessageDisplay
					text='Solving...'
					bgColor='bg-amber-500/70'
					isShown={isFindingSolution}
				/>
				<MessageDisplay
					text={'Invalid Puzzle'}
					bgColor='bg-red-400/70'
					isShown={!isValidGameBoard}
				/>
				<MessageDisplay
					text={'Unsolveable!'}
					bgColor='bg-red-400/70'
					isShown={isUnsolveable}
				/>
				<MessageDisplay
					text='Solved!'
					bgColor='bg-emerald-500/70'
					isShown={isValidSolution && !showStoredSolution}
				/>
				<MessageDisplay
					text='Showing Solution'
					bgColor={solvingMessageBG}
					isShown={showStoredSolution}
				/>
				{!isValidSolution &&
					isValidGameBoard &&
					!isUnsolveable &&
					!isFindingSolution &&
					!showStoredSolution && (
						<p className='py-0.5 px-2 text-transparent select-none'>
							Placeholder!
						</p>
					)}
			</div>
			{/* UNDO & ERASE */}
			<div className='flex justify-end gap-1 xs:gap-1.5 sm:gap-2'>
				<PuzzleButton
					text='Undo'
					title={canUndo ? 'Undo last move (Ctrl/⌘)+Z' : 'No moves to undo'}
					onClickFunction={undo}
					isDisabled={!canUndo}
					accentColor={siteSettings.accentColor}
				/>
				<PuzzleButton
					Icon={EraserIcon}
					title={
						selectedCellHasValue ?
							'Clear the currently selected cell'
							: 'Select a cell with a value to clear'
					}
					onClickFunction={handleClearSelectedClick}
					accentColor={siteSettings.accentColor}
					isDisabled={!canEraseCellValue}
				/>
			</div>
		</div>
	);
}
