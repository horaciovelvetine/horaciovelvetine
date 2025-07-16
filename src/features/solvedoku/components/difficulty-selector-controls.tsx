import type { PuzzleDifficulty, SolvedokuGameState } from '../../../types';

export function DifficultySelectorControls({
	selectedDifficulty,
	setSelectedDifficulty,
}: Pick<SolvedokuGameState, 'selectedDifficulty' | 'setSelectedDifficulty'>) {
	return (
		<div className='text-center font-bold tracking-tighter my-2'>
			<h4 className='border-b mb-0.5'>Puzzle Difficulty Selector</h4>
			<ul className='flex gap-1 justify-center pt-1'>
				{(['easy', 'medium', 'hard'] as PuzzleDifficulty[]).map(level => (
					<DifficultyButton
						key={level}
						difficulty={level}
						isSelected={level === selectedDifficulty}
						onSelect={setSelectedDifficulty}
					/>
				))}
			</ul>
		</div>
	);
}

interface DifficultyButtonProps {
	difficulty: PuzzleDifficulty;
	isSelected: boolean;
	onSelect: (difficulty: PuzzleDifficulty) => void;
}

function DifficultyButton({
	difficulty,
	isSelected,
	onSelect,
}: DifficultyButtonProps) {
	const handleClick = () => {
		if (!isSelected) {
			onSelect(difficulty);
		}
	};

	const displayText =
		difficulty.charAt(0).toUpperCase() + difficulty.slice(1).toLowerCase();

	return (
		<li>
			<button
				type='button'
				className={`
		border border-gray-300 tracking-tight font-bold text-center rounded-lg px-2 py-0.5 
		transition-all duration-100 hover:scale-105 hover:-translate-y-1 select-none
		${isSelected ? 'bg-sky-500/60' : 'border-gray-300/70 bg-sky-500/30 text-white'}
	`}
				onClick={handleClick}
				aria-pressed={isSelected}>
				{displayText}
			</button>
		</li>
	);
}
