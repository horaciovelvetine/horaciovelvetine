import type { Colors } from '../../../../types';

/**
 * List badge element intended for use in the about screens to denote a tool used in the development of that particular component
 *
 * @param {string} text - The text to display inside the badge
 * @param {Colors} color - derived from TailwindCSS colors list, string denoting the bg and ring color
 * @param {string} link - URL that the badge links to when clicked
 */

interface ToolBadgeProps {
	color: Colors;
	text: string;
	url: string;
}

export function ToolBadge({ color, text, url }: ToolBadgeProps) {
	return (
		<li
			className={`inline-flex w-fit items-center rounded-xl px-2 py-0.5 text-sm font-bold ring-1 ring-inset ${tailwindColors[color]} transition-all hover:scale-105 hover:drop-shadow-2xl duration-100 hover:-translate-y-1 text-nowrap m-0.5`}>
			<a
				href={url}
				className='transition-all hover:scale-105 duration-100'
				target='_blank'
				referrerPolicy='no-referrer'>
				{text}
			</a>
		</li>
	);
}

const tailwindColors = {
	red: 'bg-red-600/25 ring-red-500/40 text-red-400',
	orange: 'bg-orange-600/25 ring-orange-500/40 text-orange-400',
	amber: 'bg-amber-600/25 ring-amber-500/40 text-amber-400',
	yellow: 'bg-yellow-600/25 ring-yellow-500/40 text-yellow-400',
	lime: 'bg-lime-600/25 ring-lime-500/40 text-lime-400',
	green: 'bg-green-600/25 ring-green-500/40 text-green-400',
	emerald: 'bg-emerald-600/25 ring-emerald-500/40 text-emerald-400',
	teal: 'bg-teal-600/25 ring-teal-500/40 text-teal-400',
	cyan: 'bg-cyan-600/25 ring-cyan-500/40 text-cyan-400',
	sky: 'bg-sky-600/25 ring-sky-500/40 text-sky-400',
	blue: 'bg-blue-600/25 ring-blue-500/40 text-blue-400',
	indigo: 'bg-indigo-600/25 ring-indigo-500/40 text-indigo-400',
	violet: 'bg-violet-600/25 ring-violet-500/40 text-violet-400',
	purple: 'bg-purple-600/25 ring-purple-500/40 text-purple-400',
	fuchsia: 'bg-fuchsia-600/25 ring-fuchsia-500/40 text-fuchsia-400',
	pink: 'bg-pink-600/25 ring-pink-500/40 text-pink-400',
	rose: 'bg-rose-600/25 ring-rose-500/40 text-rose-400',
	slate: 'bg-slate-600/25 ring-slate-500/40 text-slate-400',
	gray: 'bg-gray-600/25 ring-gray-500/40 text-gray-400',
	zinc: 'bg-zinc-600/25 ring-zinc-500/40 text-zinc-400',
	neutral: 'bg-neutral-600/25 ring-neutral-500/40 text-neutral-400',
	stone: 'bg-stone-600/25 ring-stone-500/40 text-stone-400',
} as const;
