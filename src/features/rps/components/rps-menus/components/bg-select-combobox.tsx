import {
	Combobox,
	ComboboxInput,
	ComboboxOption,
	ComboboxOptions,
	Field,
	Label,
} from '@headlessui/react';
import { useState, type Dispatch, type SetStateAction } from 'react';
import type { Colors } from '../../../../../types';
import {
	capitalize,
	TailwindCanvasColorHexMap,
	TailwindColors,
	TailwindFocusBGs500,
	TailwindFocusOutlineColors,
} from '../../../../../functions';

interface BGSelectComboboxProps {
	color: Colors;
	setColor: Dispatch<SetStateAction<Colors>>;
	accentColor: Colors;
}

/**
 * BGSelectCombobox component provides a dropdown interface for selecting background colors
 * for the Rock Paper Scissors sketch canvas.
 *
 * This component renders a searchable combobox that allows users to choose from available
 * Tailwind color options. It features real-time filtering based on user input and displays
 * a preview of the selected color. The component integrates with the sketch's color system
 * and applies the selected background color to the canvas in real-time.
 *
 * Features:
 * - Searchable dropdown with color filtering
 * - Live preview of selected background color
 * - Accessible form controls with proper labeling
 * - Responsive design that adapts to different screen sizes
 * - Integration with site's accent color theming
 *
 * @param props - Component props for background color selection
 * @param props.color - Currently selected background color
 * @param props.setColor - Function to update the selected background color
 * @param props.accentColor - Site's accent color for styling focus states and borders
 */
export function BGSelectCombobox({
	color,
	setColor,
	accentColor,
}: BGSelectComboboxProps) {
	const [query, setQuery] = useState('');

	const filteredColors =
		query === '' ? TailwindColors : (
			TailwindColors.filter(color => {
				return color.toLowerCase().includes(query.toLowerCase());
			})
		);

	const focusOutlineClass = TailwindFocusOutlineColors[accentColor];
	const focusBGclass = TailwindFocusBGs500[accentColor];

	return (
		<Field className='flex items-center justify-between gap-3'>
			<div className='flex grow flex-col'>
				<Label
					id='color-select-label'
					className='block text-sm/4 sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white text-nowrap  border-b border-stone-300/30'>
					Background Color:
				</Label>
				<span
					id='color-select-description'
					className='text-xs/4 xs:text-sm sm:text-base md:font-semibold text-stone-200/60'>
					Set the color for the background of the sketch
				</span>
			</div>
			<div className='group relative inline-flex w-1/4 shrink-0'>
				<Combobox
					value={color}
					onChange={(value: Colors) => {
						setColor(value);
					}}
					onClose={() => {
						setQuery('');
					}}
					immediate>
					<ComboboxInput
						className={`flex justify-center items-center w-full rounded-md px-2 py-2 text-sm md:text-lg font-extrabold text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 text-center ${focusOutlineClass} text-nowrap`}
						aria-label='color-select'
						displayValue={(color: Colors) => capitalize(color)}
						onChange={event => {
							setQuery(event.target.value);
						}}></ComboboxInput>
					<ComboboxOptions
						anchor='bottom'
						className={`absolute z-10 mt-1 h-fit max-h-64 w-fit overflow-auto rounded-md bg-white py-1 text-base shadow-lg outline-1 outline-stone-300/30 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-stone-300/30 empty:invisible ${focusOutlineClass} [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-700/50 [&::-webkit-scrollbar-thumb]:bg-gray-500/70 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-gray-400/80 dark:[&::-webkit-scrollbar-track]:bg-gray-800/50 dark:[&::-webkit-scrollbar-thumb]:bg-gray-600/70 dark:[&::-webkit-scrollbar-thumb]:hover:bg-gray-500/80`}>
						{filteredColors.map(color => (
							<ComboboxOption
								key={`select-${color}`}
								value={color}
								className={`group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none  data-focus:text-white data-focus:outline-hidden dark:text-white ${focusBGclass}`}>
								<div className='flex items-center justify-between gap-2'>
									{capitalize(color)}
									<span
										className='w-4 h-4 rounded border border-gray-300 dark:border-gray-600'
										style={{
											backgroundColor: TailwindCanvasColorHexMap[color],
										}}
									/>
								</div>
							</ComboboxOption>
						))}
					</ComboboxOptions>
				</Combobox>
			</div>
		</Field>
	);
}
