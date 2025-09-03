import type { Dispatch, SetStateAction } from 'react';
import type { Colors } from '../../../../../types';
import {
	TailwindCheckedBGs500,
	TailwindOutlineColors,
	TailwindTextColors500,
} from '../../../../../functions';

interface ViewToggleSliderProps {
	toggleOn: boolean;
	setToggleOn: Dispatch<SetStateAction<boolean>>;
	label: string;
	description: string;
	accentColor: Colors;
}

/**
 * ViewToggleSlider component provides a toggle switch interface for boolean settings
 * in the Rock Paper Scissors simulation.
 *
 * This component renders an accessible toggle slider that allows users to enable or disable
 * various visual debugging features like velocity indicators and collision bounds. The toggle
 * features a smooth animation and clear visual feedback with customizable styling based on
 * the site's accent color theme.
 *
 * Features:
 * - Smooth toggle animation with visual feedback
 * - Keyboard accessibility (Enter key to toggle)
 * - Clear labeling with descriptive text
 * - Integration with site's accent color theming
 * - Real-time updates to simulation settings
 * - Responsive design that adapts to different screen sizes
 * - Visual indicators showing current state (on/off icons)
 *
 * @param props - Component props for the toggle slider
 * @param props.toggleOn - Current boolean state of the toggle
 * @param props.setToggleOn - Function to update the toggle state
 * @param props.label - Primary label text displayed for the toggle
 * @param props.description - Descriptive text explaining what the toggle controls
 * @param props.accentColor - Site's accent color for styling the active state
 */
export function ViewToggleSlider({
	toggleOn,
	setToggleOn,
	label,
	description,
	accentColor,
}: ViewToggleSliderProps) {
	const checkedBGColorClass = TailwindCheckedBGs500[accentColor];
	const outlineColorClass = TailwindOutlineColors[accentColor];
	const textColorClass = TailwindTextColors500[accentColor];

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			setToggleOn(prev => !prev);
		}
	};

	return (
		<div className='flex items-center justify-between gap-3'>
			<span className='flex grow flex-col'>
				<label
					id='availability-label'
					className='block text-sm/4 sm:text-base md:text-lg lg:text-xl font-semibold text-white text-nowrap border-b border-stone-300/30'>
					{label}
				</label>
				<span
					id='availability-description'
					className='text-xs/4 xs:text-sm sm:text-base md:font-semibold text-stone-200/60'>
					{description}
				</span>
			</span>
			<div
				className={`group relative inline-flex w-11 min-h-full shrink-0 rounded-full bg-stone-300 p-0.5 inset-ring inset-ring-gray-900/5 outline-offset-2 ${outlineColorClass} transition-colors duration-200 ease-in-out ${checkedBGColorClass} has-focus-visible:outline-2 bg-white/5 inset-ring-white/10 ${outlineColorClass} mt-6 ${toggleOn ? 'drop-shadow-lg drop-shadow-stone-300/10' : ''}`}>
				<span className='relative size-5 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-5 '>
					<span
						aria-hidden='true'
						className='absolute inset-0 flex size-full items-center justify-center opacity-100 transition-opacity duration-200 ease-in group-has-checked:opacity-0 group-has-checked:duration-100 group-has-checked:ease-out'>
						<svg
							fill='none'
							viewBox='0 0 12 12'
							className='size-3 text-stone-400'>
							<path
								d='M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2'
								stroke='currentColor'
								strokeWidth={2}
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</span>
					<span
						aria-hidden='true'
						className='absolute inset-0 flex size-full items-center justify-center opacity-0 transition-opacity duration-100 ease-out group-has-checked:opacity-100 group-has-checked:duration-200 group-has-checked:ease-in'>
						<svg
							fill='currentColor'
							viewBox='0 0 12 12'
							className={`size-3 ${textColorClass}`}>
							<path d='M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z' />
						</svg>
					</span>
				</span>
				<input
					name={label.concat('-setting')}
					type='checkbox'
					aria-label='Use setting'
					className='absolute inset-0 appearance-none focus:outline-hidden'
					checked={toggleOn}
					onChange={() => {
						setToggleOn(prev => !prev);
					}}
					onKeyDown={handleKeyDown}
				/>
			</div>
		</div>
	);
}
