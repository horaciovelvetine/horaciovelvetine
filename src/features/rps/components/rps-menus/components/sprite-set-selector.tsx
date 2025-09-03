import {
	Field,
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
	Label,
} from '@headlessui/react';
import type { Dispatch, SetStateAction } from 'react';
import type { Colors, SpriteCharSet } from '../../../../../types';
import {
	TailwindFocusBGs500,
	TailwindFocusOutlineColors,
} from '../../../../../functions';

interface SpriteSetSelectorProps {
	accentColor: Colors;
	spriteCharSet: SpriteCharSet;
	setSpriteCharSet: Dispatch<SetStateAction<SpriteCharSet>>;
}

/**
 * SpriteSetSelector component provides a dropdown interface for selecting sprite character sets
 * in the Rock Paper Scissors simulation.
 *
 * This component renders a listbox that allows users to choose between different visual representations
 * of the Rock, Paper, Scissors elements. Users can select between hand gesture emojis (✌️✊✋) or
 * object-based emojis (🪨📄✂️). The selection affects the visual appearance of all sprites in the
 * simulation while maintaining the same game mechanics.
 *
 * Features:
 * - Dropdown selection between predefined sprite character sets
 * - Real-time preview of selected sprite set in the button
 * - Accessible form controls with proper labeling
 * - Responsive design that adapts to different screen sizes
 * - Integration with site's accent color theming for focus states
 * - Live updates to simulation when changed during runtime
 *
 * @param props - Component props for sprite set selection
 * @param props.accentColor - Site's accent color for styling focus states and highlights
 * @param props.spriteCharSet - Currently selected array of sprite characters [rock, paper, scissors]
 * @param props.setSpriteCharSet - Function to update the selected sprite character set
 */
export function SpriteSetSelector({
	accentColor,
	spriteCharSet,
	setSpriteCharSet,
}: SpriteSetSelectorProps) {
	const focusBGClass = TailwindFocusBGs500[accentColor];
	const focusOutlineClass = TailwindFocusOutlineColors[accentColor];

	return (
		<Field className='flex items-center justify-between gap-3'>
			<div className='flex grow flex-col'>
				<Label
					id='set-sprite-set-label'
					htmlFor='set-sprite-set'
					className='block text-sm/4 sm:text-base md:text-lg lg:text-xl font-semibold text-white text-nowrap border-b border-stone-300/30'>
					Set Sprites:
				</Label>
				<span
					id='set-sprite-description'
					className='text-xs/4 xs:text-sm/4.5 sm:text-base/5 md:font-semibold text-stone-200/60'>
					Pick the sprites you want zooming around the screen
				</span>
			</div>
			<div className={'group relative inline-flex shrink-0 w-1/4'}>
				<Listbox
					value={spriteCharSet}
					onChange={setSpriteCharSet}>
					<ListboxButton
						id={'set-sprite-set'}
						className={`flex justify-center items-center w-full rounded-md px-2 py-2 text-sm md:text-lg outline-1 -outline-offset-1 outline-stone-300 focus:outline-2 focus:-outline-offset-2 bg-white/5 placeholder:text-gray-500 ${focusOutlineClass} text-nowrap`}>
						{spriteCharSet.join(' ')}
					</ListboxButton>
					<ListboxOptions
						anchor='bottom'
						className='absolute z-10 w-fit overflow-auto rounded-md text-base outline-1 outline-stone-300/5 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm bg-gray-800 -outline-offset-1 empty:invisible'>
						{[
							['✌️', '✊', '✋'],
							['🪨', '📄', '✂️'],
						].map(set => (
							<ListboxOption
								key={set.join('-')}
								value={set}
								className={`group relative cursor-default py-2 px-3 select-none data-focus:text-white data-focus:outline-hidden text-white text-lg font-bold ${focusBGClass} text-nowrap`}>
								{set.join(' ')}
							</ListboxOption>
						))}
					</ListboxOptions>
				</Listbox>
			</div>
		</Field>
	);
}
