import type { SolvedokuGameState } from '../../types';
import {
  useArrowKeyListener,
  useKeyboardShortcuts,
} from '../../hooks/solvedoku';
import { GameTable } from '../solvedoku/game-table';
import { NumberInputsGrid } from '../solvedoku/number-inputs-grid';
import { CreateNewPuzzleButton } from '../solvedoku/create-new-puzzle-button';
import { PuzzleFunctionControls } from '../solvedoku/puzzle-functions-controls';
import { DifficultySelectorControls } from '../solvedoku/difficulty-selector-controls';
import { useSolutionFinder } from '../../hooks/solvedoku/use-solution-finder';
import { SolutionFinderControls } from '../solvedoku/solution-finder-controls';
import { PuzzleStatusDisplay } from '../solvedoku/puzzle-status-display';

export function SolvedokuWindow(props: SolvedokuGameState) {

  useArrowKeyListener(props);
  useKeyboardShortcuts(props);
  useSolutionFinder(props);

  return (
    <div className='flex w-full'>
      <GameTable {...props} />
      <div className='flex flex-col items-center justify-center w-full ml-1.5 relative rounded-lg border border-gray-300 px-2 bg-zinc-800/70'>
        <PuzzleFunctionControls {...props} />
        <NumberInputsGrid {...props} />
        <DifficultySelectorControls {...props}
        />
        <div className=''>
          <ul className='flex gap-1.5 text-lg font-bold tracking-tight justify-center'>
            <CreateNewPuzzleButton {...props} />
          </ul>
          <SolutionFinderControls {...props} />
          <PuzzleStatusDisplay {...props} />
        </div>
      </div>
    </div>
  );
}
