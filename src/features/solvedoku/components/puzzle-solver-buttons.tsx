import { FastForwardIcon, RewindIcon } from '../../../assets';
import type { SolvedokuWindowProps } from '../windows/solvedoku-window-props';
import { PuzzleButton } from './puzzle-button';

/**
 * Component that provides controls for the automated puzzle solver
 * Includes buttons for starting/pausing solution, adjusting solution speed
 * Manages solution interval timing between MIN_INTERVAL and MAX_INTERVAL
 *
 * @param {SolvedokuGameState} props.solvedokuState - Current game state including solver status and timing
 * @param {SiteSettings} props.siteSettings - Global site settings like theme colors
 * @returns JSX element containing the puzzle solver control buttons
 */
export function PuzzleSolverButtons({
	windowState,
	siteSettings,
}: SolvedokuWindowProps) {
	const {
		isValidSolution,
		setIsUnsolveable,
		setIsFindingSolution,
		isFindingSolution,
		solutionFinderInterval,
		speedUpSolutionFinder,
		slowDownSolutionFinder,
		MIN_SOLVER_INTERVAL,
		MAX_SOLVER_INTERVAL,
	} = windowState;

	const handleSolveButtonClick = () => {
		if (isValidSolution) return;
		setIsUnsolveable(false);
		setIsFindingSolution(!isFindingSolution);
	};

	return (
		<div className='flex w-full justify-center mt-1 md:mb-2 gap-2'>
			<PuzzleButton
				text={isFindingSolution ? 'Pause Solution' : 'Solve Puzzle'}
				title={(isFindingSolution ? 'Pause ' : 'Start ').concat(
					'the puzzle solver'
				)}
				accentColor={siteSettings.accentColor}
				isDisabled={isValidSolution}
				onClickFunction={handleSolveButtonClick}
			/>

			<ul className='flex items-center gap-2 md:gap-3'>
				<li className='flex items-center'>
					<PuzzleButton
						Icon={RewindIcon}
						accentColor={siteSettings.accentColor}
						onClickFunction={slowDownSolutionFinder}
						title='Slow down the puzzle solver'
						isDisabled={solutionFinderInterval === MIN_SOLVER_INTERVAL}
					/>
				</li>
				<li>
					<p className='text-nowrap tracking-tighter font-semibold text-sm xs:text-base sm:text-lg'>
						Speed [{solutionFinderInterval}ms.]
					</p>
				</li>
				<li className='flex items-center'>
					<PuzzleButton
						Icon={FastForwardIcon}
						accentColor={siteSettings.accentColor}
						onClickFunction={speedUpSolutionFinder}
						title='Speed up the puzzle solver'
						isDisabled={solutionFinderInterval === MAX_SOLVER_INTERVAL}
					/>
				</li>
			</ul>
		</div>
	);
}
