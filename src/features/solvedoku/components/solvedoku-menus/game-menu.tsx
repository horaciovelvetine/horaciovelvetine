import { type Dispatch, type SetStateAction } from 'react';
import type {
	PuzzleDifficulty,
	SiteSettings,
	SolvedokuWindowState,
} from '../../../../types';
import { SelectedDifficultyButton } from './selected-difficulty-button';
import { GameMenuButton } from './game-menu-button';

interface GameMenuProps {
	setShowMenu: Dispatch<SetStateAction<boolean>>;
	windowState: SolvedokuWindowState;
	siteSettings: SiteSettings;
}

/**
 * Mobile menu component that provides game controls and difficulty selection
 * Contains buttons for starting new games, resetting progress, and showing solutions
 * Includes a difficulty selector for generating new puzzles
 * @param {Dispatch<SetStateAction<boolean>>} props.setShowMenu - Function to control menu visibility
 * @param {SolvedokuGameState} props.solvedokuState - Current game state and methods
 * @param {SiteSettings} props.siteSettings - Global site settings like theme colors
 * @param {Dispatch<SetStateAction<PuzzleDifficulty>>} props.setCurrentPuzzleDifficultyDisplay - Updates displayed difficulty
 * @returns JSX element containing the game menu controls
 */
export function GameMenu({
	setShowMenu,
	windowState,
	siteSettings,
}: GameMenuProps) {
	const cannotShowSolutionBoard = windowState.solutionBoard ? false : true;

	/**
	 * Creates a new game, sets the local state display of what difficulty that puzzle is
	 */
	const handleNewGameClick = () => {
		windowState.generateRandomPuzzle();
		windowState.setCurrentPuzzleDifficultyDisplay(windowState.selectedDifficulty); // set displayed difficulty value
		setShowMenu(false);
	};

	/**
	 * Soft reset the puzzle progress back to empty (leaving generated puzzle in place)
	 */
	const handleResetClick = () => {
		windowState.resetGameStepwise();
		setShowMenu(false);
	};

	/**
	 * Check if the toggleShowStoredSolution can be called, then toggle it on or off based off of the local state
	 */
	const handleShowSolutionClick = () => {
		if (cannotShowSolutionBoard && !windowState.showStoredSolution) return;
		windowState.toggleShowStoredPuzzleSolution(
			!windowState.showStoredSolution
		);
		windowState.setShowStoredSolution(prev => !prev);
		setShowMenu(false);
	};

	return (
		<ul className='flex flex-col w-full tracking-tighter gap-2 px-8 mb-6'>
			{/* NEW GAME W/ DIFFICULTY SELECTOR */}
			<li className='flex justify-center items-center w-full'>
				<div className='flex flex-col items-center my-1 md:my-2 '>
					<h6 className='text-white/50 text-xs border-b md:text-base'>
						Select a Difficulty
					</h6>
					<p className='text-xs leading-4 xs:w-2/3 md:text-sm md:leading-5 text-white/50 text-center tracking-tight'>
						The difficulty determines the number of cells which remain filled
						when creating a new puzzle. Select a difficulty, then click "New
						Puzzle" below.
					</p>
					<ul className='flex w-7/8 justify-around sm:justify-center gap-2 xs:w-2/3'>
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
				</div>
			</li>
			<GameMenuButton
				buttonText='New Puzzle'
				buttonTitle={`Generates a brand new puzzle to solve based on the (above) selected difficulty`}
				clickHandler={handleNewGameClick}
				accentColor={siteSettings.accentColor}
			/>
			<GameMenuButton
				buttonText={
					windowState.showStoredSolution ? 'Hide Solution' : (
						'Reveal Solution'
					)
				}
				buttonTitle='Show the (intended) solution for the current puzzle'
				accentColor={siteSettings.accentColor}
				isDisabled={cannotShowSolutionBoard}
				clickHandler={handleShowSolutionClick}
			/>
			<GameMenuButton
				buttonTitle={`Resets the current puzzle's progress`}
				buttonText='Reset Puzzle'
				accentColor={siteSettings.accentColor}
				clickHandler={handleResetClick}
				isDisabled={windowState.gameBoardEmpty}
			/>
		</ul>
	);
}
