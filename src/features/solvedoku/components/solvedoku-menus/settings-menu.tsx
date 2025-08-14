import { FastForwardIcon, RewindIcon } from '../../../../assets';
import { TailwindBGs500, TailwindDropShadows } from '../../../../functions';
import type {
	SiteSettings,
	Colors,
	SolvedokuGameState,
} from '../../../../types';
import { PuzzleButton } from '../puzzle-button';

interface MobileSettingsMenuProps {
	windowState: SolvedokuGameState;
	siteSettings: SiteSettings;
}

/**
 * Mobile menu component that provides settings controls for the Solvedoku game
 * Contains accent color selection and solution speed controls
 * Allows users to customize the game appearance and solution animation speed
 * @param {SolvedokuGameState} props.solvedokuState - Current game state and methods
 * @param {SiteSettings} props.siteSettings - Global site settings like theme colors
 * @returns JSX element containing the settings menu controls
 */
export function SettingsMenu({
	windowState,
	siteSettings,
}: MobileSettingsMenuProps) {
	const colorOptions: Colors[] = [
		'red',
		'orange',
		'yellow',
		'green',
		'blue',
		'violet',
		'cyan',
		'rose',
	];

	const MIN_INTERVAL = 1;
	const MAX_INTERVAL = 300;
	const INTERVAL_STEP = 20;

	const handleSlowDownButtonClick = () => {
		let newSpeed;
		if (windowState.solutionFinderInterval <= INTERVAL_STEP) {
			newSpeed = MIN_INTERVAL;
		} else {
			newSpeed = windowState.solutionFinderInterval - INTERVAL_STEP;
		}
		windowState.setSolutionFinderInterval(newSpeed);
	};

	const handleSpeedUpClick = () => {
		let newSpeed;
		if (windowState.solutionFinderInterval === MIN_INTERVAL) {
			newSpeed = INTERVAL_STEP;
		} else if (windowState.solutionFinderInterval < MAX_INTERVAL) {
			newSpeed = Math.min(
				MAX_INTERVAL,
				windowState.solutionFinderInterval + INTERVAL_STEP
			);
		} else {
			newSpeed = MAX_INTERVAL;
		}
		windowState.setSolutionFinderInterval(newSpeed);
	};
	return (
		<ul className='flex flex-col items-center gap-2 sm:gap-2 mb-8'>
			<li className='flex items-center xs:gap-1 border-b border-white/35 pb-3'>
				<h4 className='font-semibold tracking-tighter mr-1.5 text-nowrap text-sm xs:text-base sm:text-lg'>
					Accent Color:
				</h4>
				<ul className='flex gap-1 xs:gap-2 items-center justify-center'>
					{colorOptions.map(color => (
						<li key={color.concat('-option')}>
							<button
								type='button'
								onClick={() => {
									siteSettings.setAccentColor(color);
								}}
								className={`flex items-center justify-center size-5 xs:size-6 sm:size-7 rounded-full border border-stone-300/40   ${TailwindBGs500[color]} ${siteSettings.accentColor === color ? TailwindDropShadows[color] : ''}`}>
								<span className='inline-flex mb-5 xs:mb-7 sm:mb-8.5 text-black/80 font-extrabold text-4xl xs:text-5xl sm:text-6xl'>
									{siteSettings.accentColor === color ? '.' : ''}
								</span>
							</button>
						</li>
					))}
				</ul>
			</li>
			<li className='flex-col xs:gap-1'>
				<div className='flex w-full justify-center items-center'>
					<h4 className='font-semibold tracking-tighter mr-1 xs:mr-2 text-sm xs:text-base sm:text-lg'>
						Solver Interval:
					</h4>
					<ul className='flex items-center gap-2 md:gap-3'>
						<li className='flex items-center'>
							<PuzzleButton
								Icon={RewindIcon}
								accentColor={siteSettings.accentColor}
								onClickFunction={handleSlowDownButtonClick}
								title='Slow down the puzzle solver'
								isDisabled={
									windowState.solutionFinderInterval === MIN_INTERVAL
								}
							/>
						</li>
						<li>
							<p className='text-nowrap tracking-tighter font-semibold text-sm xs:text-base sm:text-lg'>
								Speed [{windowState.solutionFinderInterval}ms]
							</p>
						</li>
						<li className='flex items-center'>
							<PuzzleButton
								Icon={FastForwardIcon}
								accentColor={siteSettings.accentColor}
								onClickFunction={handleSpeedUpClick}
								title='Speed up the puzzle solver'
								isDisabled={
									windowState.solutionFinderInterval === MAX_INTERVAL
								}
							/>
						</li>
					</ul>
				</div>
				<p className='tracking-tight leading-3.5 xs:leading-5 text-xs xs:text-sm sm:text-base text-white/50 md:text-lg mt-1 xs:mt-2 text-center mx-10 xs:mx-18 md:mx-24'>
					The amount of time waited between trying a number in a cell while
					solving a puzzle and moving on to the next cell.
				</p>
			</li>
		</ul>
	);
}
