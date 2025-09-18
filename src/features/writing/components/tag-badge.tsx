import type { Colors } from '../../../types';

export interface TagBadgeProps {
  text: string;
  accentColor: Colors;
  onClick: (target: string) => void;
}

/**
 * TagBadge Component
 *
 * A clickable badge component for displaying tags in blog posts and writing content.
 * When clicked, the badge triggers an onClick callback with the tag text, making it
 * suitable for filtering or selection interactions in blog post listings.
 *
 * Features:
 * - Clickable button behavior with accessible onClick handling
 * - Customizable text content and accent colors from the site's color system
 * - Hover animations with scale and upward translation effects
 * - Responsive design with consistent spacing and rounded styling
 * - Semi-transparent background with ring borders for visual hierarchy
 * - Integration with Tailwind CSS color variants for theming consistency
 *
 * @component
 * @param {TagBadgeProps} props - The component props
 * @param {string} props.text - The tag text to display inside the badge
 * @param {Colors} props.accentColor - The accent color theme for styling the badge
 * @param {(target: string) => void} props.onClick - Callback function called with the tag text when clicked
 */

export function TagBadge({ text, accentColor, onClick }: TagBadgeProps) {

  return (
    <button
      type='button'
      onClick={() => { onClick(text) }}
      className={`inline-flex w-fit items-center rounded-xl px-2 py-0.5 text-sm font-bold ring-1 ring-inset ${tailwindColors[accentColor]} text-nowrap m-0.5 transition-all duration-100 hover:scale-105 hover:-translate-y-1`}>
      <p>{text}</p>
    </button>
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
  black: 'bg-black/25 ring-black/40 text-black',
  white: 'bg-white/25 ring-white/40 text-white',
} as const;
