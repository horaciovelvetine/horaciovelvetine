import { useArrowKeyListener, useKeyboardShortcuts, useSolutionFinder } from '../../hooks/solvedoku';
import type { SolvedokuGameState } from '../../types';

//Components
import { CreateNewPuzzleButton } from './components/create-new-puzzle-button';
import { DifficultySelectorControls } from './components/difficulty-selector-controls';
import { GameTable } from './components/game-table';
import { NumberInputsGrid } from './components/number-inputs-grid';
import { PuzzleFunctionControls } from './components/puzzle-functions-controls';
import { PuzzleStatusDisplay } from './components/puzzle-status-display';
import { SolutionFinderControls } from './components/solution-finder-controls';



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
