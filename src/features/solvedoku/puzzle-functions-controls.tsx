import { UndoArrowIcon, EraserIcon } from '../../assets';
import type { SolvedokuGameState } from '../../types';

export function PuzzleFunctionControls({
	canUndo,
	undo,
	selectedCellHasValue,
	updateCellValue,
	selectedCellID,
	gameBoardEmpty,
	resetGameStepwise
}: SolvedokuGameState) {
	const handleClearSelectedClick = () => {
		if (!selectedCellID) return;
		updateCellValue(selectedCellID, null);
	};

	return (
		<div className='w-full flex flex-col items-center justify-center'>
			<label className='border-b leading-none font-extrabold tracking-tight text-lg'>Controls</label>
			<div className='flex my-2 gap-1.75'>
				<PuzzleFunctionButton
					title={canUndo ? 'Undo last move (Ctrl+Z)' : 'No moves to undo'}
					iconAltText='Undo'
					iconSource={UndoArrowIcon}
					onClickFunction={undo}
					disabledState={canUndo}
					aria-label='Undo last move'
				/>
				<PuzzleFunctionButton
					title={
						selectedCellHasValue ?
							'Clear selected cell'
							: 'Select a cell with a value to clear'
					}
					iconAltText='Eraser'
					iconSource={EraserIcon}
					onClickFunction={handleClearSelectedClick}
					disabledState={selectedCellHasValue}
					aria-label='Clear selected cell'
				/>
				<PuzzleFunctionButton
					title={gameBoardEmpty ? 'Fill out puzzle to reset' : 'Clear current puzzle'}
					iconAltText='reset'
					text={'Reset'}
					onClickFunction={resetGameStepwise}
					disabledState={!gameBoardEmpty}
					aria-label='Clear current puzzle' />
			</div>
		</div>
	);
}

interface PuzzleFunctionButtonProps {
	title: string;
	iconSource?: string;
	text?: string;
	iconAltText: string;
	onClickFunction: () => void;
	disabledState: boolean;
}

function PuzzleFunctionButton({
	title,
	iconAltText,
	iconSource,
	onClickFunction,
	disabledState,
	text
}: PuzzleFunctionButtonProps) {

	return (
		<button
			type='button'
			onClick={onClickFunction}
			disabled={!disabledState}
			title={title}
			className={`border border-gray-300 p-2 rounded-lg transition-all duration-100 bg-sky-500/60 select-none ${disabledState ? 'hover:scale-105 hover:-translate-y-1' : 'opacity-30 cursor-not-allowed'}`}>
			{iconSource && <img
				src={iconSource}
				alt={iconAltText}
				className='size-6'
			/>}
			{text && <p className='tracking-tighter'>{text}</p>}
		</button>
	);
}
