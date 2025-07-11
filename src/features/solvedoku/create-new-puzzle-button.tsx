import type { SolvedokuGameState } from "../../types";

export function CreateNewPuzzleButton({ generateRandomPuzzle }: Pick<SolvedokuGameState, 'generateRandomPuzzle'>) {
  return (
    <li className='border border-gray-300 rounded-lg px-2 py-0.5 transition-all duration-100 select-none bg-sky-500/60 hover:scale-105 hover:-translate-y-1'
      onClick={generateRandomPuzzle}>
      <button
        type='button'
        title='Create a new randomly generated puzzle'>
        Create New Puzzle
      </button>
    </li>
  );
}
