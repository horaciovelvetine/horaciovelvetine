import type { SolvedokuGameState } from '../../types';

export function PuzzleStatusDisplay({
	isFindingSolution,
	isValidGameBoard,
	isValidSolution,
}: SolvedokuGameState) {
	return (
		<div className='absolute bottom-1'>
			{isFindingSolution && <p>Solving</p>}
			{!isValidGameBoard && <p>Invalid</p>}
			{isValidSolution && <p>Solved!</p>}
		</div>
	);
}
