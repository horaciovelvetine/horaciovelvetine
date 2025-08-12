import { useCallback, useMemo } from 'react';
import { EraserIcon } from '../../../assets';
import type {
	PuzzleDifficulty,
	SiteSettings,
	SolvedokuGameState,
} from '../../../types';
import { PuzzleButton } from './puzzle-button';
import { parseFormattedCellIDString } from '../../../functions';

interface PuzzleInfoDisplayProps {
	currentPuzzleDifficulty: PuzzleDifficulty;
	solvedokuState: SolvedokuGameState;
	siteSettings: SiteSettings;
}

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
	currentPuzzleDifficulty,
	solvedokuState,
	siteSettings,
}: PuzzleInfoDisplayProps) {
	const formattedPuzzleDifficulty =
		currentPuzzleDifficulty.charAt(0).toUpperCase() +
		currentPuzzleDifficulty.slice(1);

	/**
	 * Handler for erasing the value in a selected cell
	 */
	const handleClearSelectedClick = useCallback(() => {
		if (!solvedokuState.selectedCellID) return;
		const [row, col] = parseFormattedCellIDString(
			solvedokuState.selectedCellID
		);
		const cell = solvedokuState.gameBoard[row][col];
		if (cell.locked) return;
		solvedokuState.updateCellValue(solvedokuState.selectedCellID, null, false);
	}, [solvedokuState]);

	/**
	 * Determine if the selected cell can be erased (i.e. is not a randomly generated cell)
	 */
	const canEraseCellValue = useMemo(() => {
		if (!solvedokuState.selectedCellHasValue) return false;
		const [row, col] = parseFormattedCellIDString(
			solvedokuState.selectedCellID
		);
		return !solvedokuState.gameBoard[row][col].locked;
	}, [solvedokuState.selectedCellHasValue, solvedokuState.selectedCellID, solvedokuState.gameBoard]);

	return (
		<div className='flex w-full items-center gap-1 mt-1 px-2'>
			<div className='flex w-3/4 font-semibold gap-2 xs:gap-3 sm:gap-4 justify-around text-lg xs:text-xl sm:text-2xl md:text-3xl pl-2'>
				<p>{formattedPuzzleDifficulty}</p>
				{solvedokuState.isFindingSolution && (
					<p className='bg-amber-500/70 rounded-lg py-0.5 px-2 border border-gray-300'>
						Solving...
					</p>
				)}
				{!solvedokuState.isValidGameBoard && (
					<p className='bg-red-400/70 rounded-lg py-0.5 px-2 border border-gray-300'>
						Invalid!
					</p>
				)}
				{solvedokuState.isUnsolveable && (
					<p className='bg-red-400/70 rounded-lg py-0.5 px-2 border border-gray-300'>
						Unable to Solve!
					</p>
				)}
				{solvedokuState.isValidSolution && (
					<p className='bg-emerald-500/70 rounded-lg py-0.5 px-2 border border-gray-300'>
						Solved!
					</p>
				)}
				{!solvedokuState.isValidSolution &&
					solvedokuState.isValidGameBoard &&
					!solvedokuState.isUnsolveable &&
					!solvedokuState.isFindingSolution && (
						<p className='py-0.5 px-2 text-transparent select-none'>Message!</p>
					)}
			</div>
			{/* UNDO & ERASE */}
			<div className='flex justify-end gap-1 xs:gap-1.5 sm:gap-2'>
				<PuzzleButton
					text='Undo'
					title={
						solvedokuState.canUndo ?
							'Undo last move (Ctrl+Z)'
							: 'No moves to undo'
					}
					onClickFunction={solvedokuState.undo}
					isDisabled={!solvedokuState.canUndo}
					accentColor={siteSettings.accentColor}
				/>
				<PuzzleButton
					Icon={EraserIcon}
					title={
						solvedokuState.selectedCellHasValue ?
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
