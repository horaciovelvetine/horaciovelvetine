import { useEffect } from 'react';
import { FastForwardIcon, RewindIcon } from '../../../../assets';
import { tailwindBGColors } from '../../../../functions';
import type {
	SiteSettings,
	Colors,
	SolvedokuGameState,
} from '../../../../types';
import { PuzzleButton } from '../puzzle-button';

interface MobileSettingsMenuProps {
	solvedokuState: SolvedokuGameState;
	siteSettings: SiteSettings;
}

export function MobileSettingsMenu({
	siteSettings,
	solvedokuState,
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

	useEffect(() => {
		// console.log({ msg: 'mobile settings menu', siteSettings })
	}, [siteSettings]);

	const MIN_INTERVAL = 1;
	const MAX_INTERVAL = 300;
	const INTERVAL_STEP = 20;

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
		<ul className='flex flex-col items-center gap-1 sm:gap-2 mb-8'>
			<li className='flex items-center xs:gap-1'>
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
								className={`flex items-center justify-center size-5 xs:size-6 sm:size-7 rounded-full border border-stone-300/40   ${tailwindBGColors[color]} ${siteSettings.accentColor === color ? tailwindDropShadowColors[color] : ''}`}>
								<span className='inline-flex mb-5 xs:mb-7 sm:mb-8.5 text-black/80 font-extrabold text-4xl xs:text-5xl sm:text-6xl'>
									{siteSettings.accentColor === color ? '.' : ''}
								</span>
							</button>
						</li>
					))}
				</ul>
			</li>
			<li>
				<hr className='text-white' />
			</li>
			<li className='flex-col xs:gap-1'>
				<div className='flex w-full items-center'>
					<h4 className='font-semibold tracking-tighter mr-0.5 text-sm xs:text-base sm:text-lg'>
						Solver Step Interval:
					</h4>
					<ul className='flex items-center text-white gap-2 md:gap-3'>
						<li className='flex items-center'>
							<PuzzleButton
								Icon={RewindIcon}
								accentColor={siteSettings.accentColor}
								onClickFunction={handleSlowDownButtonClick}
								title='Slow down the puzzle solver'
								isDisabled={
									solvedokuState.isValidSolution ||
									solvedokuState.solutionFinderInterval === MIN_INTERVAL
								}
							/>
						</li>
						<li>
							<p className='text-nowrap tracking-tighter font-semibold text-sm xs:text-base sm:text-lg'>
								Speed [{solvedokuState.solutionFinderInterval} ms.]
							</p>
						</li>
						<li className='flex items-center'>
							<PuzzleButton
								Icon={FastForwardIcon}
								accentColor={siteSettings.accentColor}
								onClickFunction={handleSpeedUpClick}
								title='Speed up the puzzle solver'
								isDisabled={
									solvedokuState.isValidSolution ||
									solvedokuState.solutionFinderInterval === MAX_INTERVAL
								}
							/>
						</li>
					</ul>
				</div>
				<p className='tracking-tight leading-3.5 text-xs xs:text-sm sm:text-base text-white/50 text-center mx-4 xs:mx-18'>
					The amount of time waited between trying a number in a cell while
					solving a puzzle and moving on to the next cell.
				</p>
			</li>
		</ul>
	);
}

const tailwindDropShadowColors = {
	red: 'drop-shadow-lg drop-shadow-red-500/30',
	orange: 'drop-shadow-lg drop-shadow-orange-500/30',
	amber: 'drop-shadow-lg drop-shadow-amber-500/30',
	yellow: 'drop-shadow-lg drop-shadow-yellow-500/30',
	lime: 'drop-shadow-lg drop-shadow-lime-500/30',
	green: 'drop-shadow-lg drop-shadow-green-500/30',
	emerald: 'drop-shadow-lg drop-shadow-emerald-500/30',
	teal: 'drop-shadow-lg drop-shadow-teal-500/30',
	cyan: 'drop-shadow-lg drop-shadow-cyan-500/30',
	sky: 'drop-shadow-lg drop-shadow-sky-500/30',
	blue: 'drop-shadow-lg drop-shadow-blue-500/30',
	indigo: 'drop-shadow-lg drop-shadow-indigo-500/30',
	violet: 'drop-shadow-lg drop-shadow-violet-500/30',
	purple: 'drop-shadow-lg drop-shadow-purple-500/30',
	fuchsia: 'drop-shadow-lg drop-shadow-fuchsia-500/30',
	pink: 'drop-shadow-lg drop-shadow-pink-500/30',
	rose: 'drop-shadow-lg drop-shadow-rose-500/30',
	slate: 'drop-shadow-lg drop-shadow-slate-500/30',
	gray: 'drop-shadow-lg drop-shadow-gray-500/30',
	zinc: 'drop-shadow-lg drop-shadow-zinc-500/30',
	neutral: 'drop-shadow-lg drop-shadow-neutral-500/30',
	stone: 'drop-shadow-lg drop-shadow-stone-500/30',
} as const;
