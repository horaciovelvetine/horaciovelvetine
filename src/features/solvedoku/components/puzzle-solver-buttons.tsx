import { FastForwardIcon, RewindIcon } from '../../../assets';
import type { SiteSettings, SolvedokuGameState } from '../../../types';
import { PuzzleButton } from './puzzle-button';

interface PuzzleSolverInputsProps {
	solvedokuState: SolvedokuGameState;
	siteSettings: SiteSettings;
}

export function PuzzleSolverButtons({
	solvedokuState,
	siteSettings,
}: PuzzleSolverInputsProps) {
	const MIN_INTERVAL = 1;
	const MAX_INTERVAL = 300;
	const INTERVAL_STEP = 20;

	const handleSolveButtonClick = () => {
		if (solvedokuState.isValidSolution) return;
		solvedokuState.setIsUnsolveable(false);
		solvedokuState.setIsFindingSolution(!solvedokuState.isFindingSolution);
	};

	const handleSlowDownButtonClick = () => {
		let newSpeed;
		if (solvedokuState.solutionFinderInterval <= INTERVAL_STEP) {
			newSpeed = MIN_INTERVAL;
		} else {
			newSpeed = solvedokuState.solutionFinderInterval - INTERVAL_STEP;
		}
		solvedokuState.setSolutionFinderInterval(newSpeed);
	};

	const handleSpeedUpClick = () => {
		let newSpeed;
		if (solvedokuState.solutionFinderInterval === MIN_INTERVAL) {
			newSpeed = INTERVAL_STEP;
		} else if (solvedokuState.solutionFinderInterval < MAX_INTERVAL) {
			newSpeed = Math.min(
				MAX_INTERVAL,
				solvedokuState.solutionFinderInterval + INTERVAL_STEP
			);
		} else {
			newSpeed = MAX_INTERVAL;
		}
		solvedokuState.setSolutionFinderInterval(newSpeed);
	};

	return (
		<div className='flex w-full justify-center mt-1 md:mb-2 gap-2'>
			<PuzzleButton
				text={
					solvedokuState.isFindingSolution ? 'Pause Solution' : 'Solve Puzzle'
				}
				title={(solvedokuState.isFindingSolution ? 'Pause ' : 'Start ').concat(
					'the puzzle solver'
				)}
				accentColor={siteSettings.accentColor}
				isDisabled={solvedokuState.isValidSolution}
				onClickFunction={handleSolveButtonClick}
			/>

			<ul className='flex items-center gap-2 md:gap-3'>
				<li className='flex items-center'>
					<PuzzleButton
						Icon={RewindIcon}
						accentColor={siteSettings.accentColor}
						onClickFunction={handleSlowDownButtonClick}
						title='Slow down the puzzle solver'
						isDisabled={solvedokuState.solutionFinderInterval === MIN_INTERVAL}
					/>
				</li>
				<li>
					<p className='text-nowrap tracking-tighter font-semibold text-sm xs:text-base sm:text-lg'>
						Speed [{solvedokuState.solutionFinderInterval}ms.]
					</p>
				</li>
				<li className='flex items-center'>
					<PuzzleButton
						Icon={FastForwardIcon}
						accentColor={siteSettings.accentColor}
						onClickFunction={handleSpeedUpClick}
						title='Speed up the puzzle solver'
						isDisabled={solvedokuState.solutionFinderInterval === MAX_INTERVAL}
					/>
				</li>
			</ul>
		</div>
	);
}
