import type { Dispatch, SetStateAction } from 'react';
import type { Colors, SpriteCountSelects } from '../../../../../types';
import {
	Field,
	Label,
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
} from '@headlessui/react';
import {
	capitalize,
	TailwindFocusBGs500,
	TailwindFocusOutlineColors,
} from '../../../../../functions';

interface SpriteCountSelectorProps {
	selected: SpriteCountSelects;
	setSelected: Dispatch<SetStateAction<SpriteCountSelects>>;
	accentColor: Colors;
}

/**
 * SpriteCountSelector component provides a dropdown interface for selecting the number of sprites
 * in the Rock Paper Scissors simulation.
 *
 * This component renders a listbox that allows users to choose from predefined sprite count options
 * ranging from "some" (15 sprites) to "lots!" (100 sprites). The selection affects the performance
 * and visual complexity of the simulation, with more sprites creating a more chaotic but
 * computationally intensive experience.
 *
 * Features:
 * - Dropdown selection with predefined sprite count options
 * - Clear descriptions showing exact sprite counts for each option
 * - Accessible form controls with proper labeling
 * - Responsive design that adapts to different screen sizes
 * - Integration with site's accent color theming for focus states
 * - Real-time updates to the simulation when changed during runtime
 *
 * @param props - Component props for sprite count selection
 * @param props.selected - Currently selected sprite count option
 * @param props.setSelected - Function to update the selected sprite count
 * @param props.accentColor - Site's accent color for styling focus states and highlights
 */
export function SpriteCountSelector({
	selected,
	setSelected,
	accentColor,
}: SpriteCountSelectorProps) {
	const options: { text: SpriteCountSelects; description: string }[] = [
		{ text: 'some', description: '15 total' },
		{ text: 'more', description: '30 total' },
		{ text: 'lots', description: '45 total' },
		{ text: 'lots!', description: '60 total' },
	];

	const focusBGClass = TailwindFocusBGs500[accentColor];
	const focusOutlineClass = TailwindFocusOutlineColors[accentColor];
	return (
		<Field className='flex items-center justify-between gap-3'>
			<div className='flex grow flex-col'>
				<Label
					id='set-sprite-set-label'
					htmlFor='set-sprite-set'
					className='block text-sm/4 sm:text-base md:text-lg lg:text-xl font-semibold text-white text-nowrap border-b border-stone-300/30'>
					Set Sprite Count:
				</Label>
				<span
					id='set-sprite-description'
					className='text-xs/4 xs:text-sm sm:text-base md:font-semibold text-stone-200/60'>
					The number of sprites you want on the screen
				</span>
			</div>
			<div className={'group relative inline-flex w-1/4 shrink-0'}>
				<Listbox
					value={selected}
					onChange={setSelected}>
					<ListboxButton
						id={'set-sprite-set'}
						className={`flex justify-center items-center w-full rounded-md px-2 py-2 text-sm md:text-lg font-extrabold outline-1 -outline-offset-1 outline-stone-300 placeholder:text-stone-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 bg-white/5 text-white ${focusOutlineClass} text-nowrap`}>
						{capitalize(selected)}
					</ListboxButton>
					<ListboxOptions
						anchor='bottom'
						className='absolute z-10 w-fit overflow-auto rounded-md text-base outline-1 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm bg-gray-800 shadow-none -outline-offset-1 outline-stone-300/10 empty:invisible'>
						{options.map(option => (
							<ListboxOption
								key={`${option.text}-selection`}
								value={option.text}
								className={`flex flex-col group relative cursor-default py-2 px-3 select-none data-focus:text-white data-focus:outline-hidden text-white text-base font-bold ${focusBGClass} tracking-tight`}>
								{capitalize(option.text)}
								<span className='font-normal text-sm text-stone-400'>
									{option.description}
								</span>
							</ListboxOption>
						))}
					</ListboxOptions>
				</Listbox>
			</div>
		</Field>
	);
}
