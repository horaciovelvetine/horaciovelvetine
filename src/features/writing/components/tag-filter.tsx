import type { Dispatch, SetStateAction } from 'react';
import type { Colors } from '../../../types';

interface TagFilterProps {
	text: string;
	accentColor: Colors;
	onClick: Dispatch<SetStateAction<string[]>>;
}

/**
 * TagFilter Component
 *
 * A removable tag badge component used for displaying and managing selected filters
 * in the writing/blog posts interface. Each tag represents a filter that can be
 * clicked to remove it from the active filters list.
 *
 * Features:
 * - Displays tag text with customizable accent color theming
 * - Includes a dismiss button (X) for removing the tag from the filter set
 * - Hover animations with scale and translate effects
 * - Responsive design with rounded corners and ring styling
 * - Screen reader accessible with proper ARIA labels
 * - Integrates with the site's color system for consistent theming
 *
 * The component automatically handles removing itself from the selected tags array
 * when the dismiss button is clicked, updating the parent component's filter state.
 *
 * @component
 * @param {TagFilterProps} props - The component props
 * @param {string} props.text - The tag text to display
 * @param {Colors} props.accentColor - The accent color theme for styling the tag
 * @param {Dispatch<SetStateAction<string[]>>} props.onClick - Callback function to update the selected tags array
 */

export function TagFilter({ text, accentColor, onClick }: TagFilterProps) {
	const handleTagFilterClick = () => {
		onClick(prev => prev.filter(tag => tag !== text));
	};

	return (
		<span
			className={`inline-flex items-center gap-x-0.5 rounded-xl px-2 py-0.5 text-xs font-bold ${TagColors[accentColor]} ring-1 ring-inset text-nowrap m-0.5 transition-all hover:scale-105 duration-100 hover:t-ranslate-y-1 group`}>
			{text}
			<button
				type='button'
				onClick={handleTagFilterClick}
				className={`relative -mr-1 size-4 rounded-xl ${TagButtonColors[accentColor]} `}>
				<span className='sr-only'>Remove</span>
				<svg
					viewBox='0 0 14 14'
					className={`size-4 ${TagDismissColors[accentColor]}`}>
					<path d='M4 4l6 6m0-6l-6 6' />
				</svg>
				<span className='absolute -inset-1' />
			</button>
		</span>
	);
}

const TagColors = {
	red: 'bg-red-600/25 text-red-400 ring-red-500/40',
	orange: 'bg-orange-600/25 text-orange-400 ring-orange-500/40',
	amber: 'bg-amber-600/25 text-amber-400 ring-amber-500/40',
	yellow: 'bg-yellow-600/25 text-yellow-400 ring-yellow-500/40',
	lime: 'bg-lime-600/25 text-lime-400 ring-lime-500/40',
	green: 'bg-green-600/25 text-green-400 ring-green-500/40',
	emerald: 'bg-emerald-600/25 text-emerald-400 ring-emerald-500/40',
	teal: 'bg-teal-600/25 text-teal-400 ring-teal-500/40',
	cyan: 'bg-cyan-600/25 text-cyan-400 ring-cyan-500/40',
	sky: 'bg-sky-600/25 text-sky-400 ring-sky-500/40',
	blue: 'bg-blue-600/25 text-blue-400 ring-blue-500/40',
	indigo: 'bg-indigo-600/25 text-indigo-400 ring-indigo-500/40',
	violet: 'bg-violet-600/25 text-violet-400 ring-violet-500/40',
	purple: 'bg-purple-600/25 text-purple-400 ring-purple-500/40',
	fuchsia: 'bg-fuchsia-600/25 text-fuchsia-400 ring-fuchsia-500/40',
	pink: 'bg-pink-600/25 text-pink-400 ring-pink-500/40',
	rose: 'bg-rose-600/25 text-rose-400 ring-rose-500/40',
	slate: 'bg-slate-600/25 text-slate-400 ring-slate-500/40',
	gray: 'bg-gray-600/25 text-gray-400 ring-gray-500/40',
	zinc: 'bg-zinc-600/25 text-zinc-400 ring-zinc-500/40',
	neutral: 'bg-neutral-600/25 text-neutral-400 ring-neutral-500/40',
	stone: 'bg-stone-600/25 text-stone-400 ring-stone-500/40',
	black: 'bg-black/25 text-black ring-black/40',
	white: 'bg-white/25 text-white ring-white/40',
} as const;

const TagDismissColors = {
	red: 'stroke-red-400 group-hover:stroke-red-300/75',
	orange: 'stroke-orange-400 group-hover:stroke-orange-300/75',
	amber: 'stroke-amber-400 group-hover:stroke-amber-300/75',
	yellow: 'stroke-yellow-400 group-hover:stroke-yellow-300/75',
	lime: 'stroke-lime-400 group-hover:stroke-lime-300/75',
	green: 'stroke-green-400 group-hover:stroke-green-300/75',
	emerald: 'stroke-emerald-400 group-hover:stroke-emerald-300/75',
	teal: 'stroke-teal-400 group-hover:stroke-teal-300/75',
	cyan: 'stroke-cyan-400 group-hover:stroke-cyan-300/75',
	sky: 'stroke-sky-400 group-hover:stroke-sky-300/75',
	blue: 'stroke-blue-400 group-hover:stroke-blue-300/75',
	indigo: 'stroke-indigo-400 group-hover:stroke-indigo-300/75',
	violet: 'stroke-violet-400 group-hover:stroke-violet-300/75',
	purple: 'stroke-purple-400 group-hover:stroke-purple-300/75',
	fuchsia: 'stroke-fuchsia-400 group-hover:stroke-fuchsia-300/75',
	pink: 'stroke-pink-400 group-hover:stroke-pink-300/75',
	rose: 'stroke-rose-400 group-hover:stroke-rose-300/75',
	slate: 'stroke-slate-400 group-hover:stroke-slate-300/75',
	gray: 'stroke-gray-400 group-hover:stroke-gray-300/75',
	zinc: 'stroke-zinc-400 group-hover:stroke-zinc-300/75',
	neutral: 'stroke-neutral-400 group-hover:stroke-neutral-300/75',
	stone: 'stroke-stone-400 group-hover:stroke-stone-300/75',
	black: 'stroke-black group-hover:stroke-black/75',
	white: 'stroke-white group-hover:stroke-white/75',
} as const;

const TagButtonColors = {
	red: 'group-hover:bg-red-500/20',
	orange: 'group-hover:bg-orange-500/20',
	amber: 'group-hover:bg-amber-500/20',
	yellow: 'group-hover:bg-yellow-500/20',
	lime: 'group-hover:bg-lime-500/20',
	green: 'group-hover:bg-green-500/20',
	emerald: 'group-hover:bg-emerald-500/20',
	teal: 'group-hover:bg-teal-500/20',
	cyan: 'group-hover:bg-cyan-500/20',
	sky: 'group-hover:bg-sky-500/20',
	blue: 'group-hover:bg-blue-500/20',
	indigo: 'group-hover:bg-indigo-500/20',
	violet: 'group-hover:bg-violet-500/20',
	purple: 'group-hover:bg-purple-500/20',
	fuchsia: 'group-hover:bg-fuchsia-500/20',
	pink: 'group-hover:bg-pink-500/20',
	rose: 'group-hover:bg-rose-500/20',
	slate: 'group-hover:bg-slate-500/20',
	gray: 'group-hover:bg-gray-500/20',
	zinc: 'group-hover:bg-zinc-500/20',
	neutral: 'group-hover:bg-neutral-500/20',
	stone: 'group-hover:bg-stone-500/20',
	black: 'group-hover:bg-black/20',
	white: 'group-hover:bg-white/20',
} as const;
