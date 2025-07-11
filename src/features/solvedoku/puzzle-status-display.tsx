import type { SolvedokuGameState } from '../../types';

export function PuzzleStatusDisplay({
  isFindingSolution,
  isValidGameBoard,
  isValidSolution,
}: SolvedokuGameState) {
  return (
    <div className='flex justify-center h-8 tracking-tight font-bold align-baseline items-center'>
      {isFindingSolution && <p className='bg-amber-500/70 rounded-lg py-0.5 px-2 border border-gray-300'>Solving...</p>}
      {!isValidGameBoard && <p className='bg-red-400/70 rounded-lg py-0.5 px-2 border border-gray-300'>Invalid!</p>}
      {isValidSolution && <p className='bg-emerald-500/70 rounded-lg py-0.5 px-2 border border-gray-300'>Solved!</p>}
    </div>
  );
}
