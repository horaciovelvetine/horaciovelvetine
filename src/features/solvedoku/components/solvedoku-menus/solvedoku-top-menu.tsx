import { CloseIcon } from '../../../../assets';
import type { PuzzleDifficulty } from '../../../../types';
import type { SolvedokuWindowProps } from '../../windows/solvedoku-window-props';
import { SolvedokuIcon } from '../solvedoku-icon';
import { GameMenuButton } from './components/game-menu-button';
import { SelectedDifficultyButton } from './components/selected-difficulty-button';

export function SolvedokuTopMenu({
	windowState,
	siteSettings,
}: SolvedokuWindowProps) {
	const handleNewGameClick = () => {
		windowState.generateRandomPuzzle();
		windowState.setCurrentPuzzleDifficultyDisplay(
			windowState.selectedDifficulty
		); // set displayed difficulty value
		windowState.setShowTopMenu(false);
	};
	return (
		<div className='absolute inset-0 z-20 flex items-center justify-center p-3'>
			<div className='w-full max-w-3xl rounded-[24px] border border-white/10 bg-zinc-950/96 p-4 shadow-2xl shadow-black/50'>
				<div className='flex flex-col items-center justify-center'>
					<button
						type='button'
						className='flex w-full justify-end'
						onClick={() => {
							windowState.setShowTopMenu(false);
						}}>
						<CloseIcon size='size-8 xs:size-10 sm:size-12' />
					</button>

					<SolvedokuIcon size='size-16 xs:size-20 sm:size-28 md:size-36' />
					<h2 className='text-3xl lg:text-4xl font-bold tracking-tighter'>
						Welcome to Solvedoku
					</h2>
				</div>

				<div className='flex flex-col gap-1 border-b border-white/10 px-3 py-2 text-center text-sm/5 font-medium tracking-tight text-stone-300/75 sm:text-base/6 md:gap-3 md:text-lg/6 lg:text-xl/6.5'>
					<p>
						Start by either generating a random puzzle to solve or entering
						your own puzzle, and watch Solvedoku work out the solution.
					</p>
					<p>
						There are 3 difficulties to select for the randomly generated
						puzzles: 'Easy', 'Medium', and 'Hard', which you can select below.
					</p>
					<p>
						Use the 'Solve Puzzle' button to watch Solvedoku work through a
						solution iteratively for you, and the arrows to speed up and slow
						down the solving process.
					</p>
				</div>

				<div className='mx-auto mt-4 flex max-w-md flex-col gap-3'>
					<ul className='flex flex-wrap justify-center gap-2'>
						{(['easy', 'medium', 'hard'] as PuzzleDifficulty[]).map(
							difficulty => (
								<SelectedDifficultyButton
									key={difficulty.concat('-selector')}
									difficulty={difficulty}
									isSelected={difficulty === windowState.selectedDifficulty}
									onSelect={windowState.setSelectedDifficulty}
									accentColor={siteSettings.accentColor}
								/>
							)
						)}
					</ul>
					<GameMenuButton
						buttonText='New Puzzle'
						buttonTitle={`Generates a brand new puzzle to solve based on the (above) selected difficulty`}
						clickHandler={handleNewGameClick}
						accentColor={siteSettings.accentColor}
					/>
				</div>
			</div>
		</div>
	);
}
