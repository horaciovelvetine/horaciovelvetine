import type { Colors, SiteSettings } from '../../types';

interface LoadingPageSpinnerProps {
	siteSettings: SiteSettings;
	pageTitle: string;
}

/**
 * Loading Page Spinner Component
 *
 * A reusable loading spinner component that displays a centered loading animation
 * with customizable accent colors and descriptive text. The spinner uses the site's
 * accent color for visual consistency and provides user feedback during page loading.
 *
 * Features:
 * - Animated spinning border with customizable color based on site settings
 * - Centered layout with responsive design
 * - Dynamic loading text based on the page being loaded
 * - Integration with site's color theme system
 * - Consistent styling with other loading components in the application
 *
 * @component
 * @param {Object} props - Component props
 * @param {SiteSettings} props.siteSettings - Site configuration settings including accent color
 * @param {string} props.pageTitle - The title of the page being loaded, used in loading text
 * @returns JSX element containing the loading spinner interface
 */

export function LoadingPageSpinner({
	siteSettings,
	pageTitle,
}: LoadingPageSpinnerProps) {
	return (
		<div className='absolute inset-0 flex items-center justify-center'>
			<div className='flex flex-col items-center gap-4'>
				<div
					className={`animate-spin rounded-full h-16 w-16 border-4 border-stone-300 ${TailwindBorderTopColors500[siteSettings.accentColor]}`}></div>
				<p className='text-stone-300 text-lg font-medium'>
					Loading {pageTitle}...
				</p>
			</div>
		</div>
	);
}

export const TailwindBorderTopColors500 = {
	red: 'border-t-red-500',
	orange: 'border-t-orange-500',
	amber: 'border-t-amber-500',
	yellow: 'border-t-yellow-500',
	lime: 'border-t-lime-500',
	green: 'border-t-green-500',
	emerald: 'border-t-emerald-500',
	teal: 'border-t-teal-500',
	cyan: 'border-t-cyan-500',
	sky: 'border-t-sky-500',
	blue: 'border-t-blue-500',
	indigo: 'border-t-indigo-500',
	violet: 'border-t-violet-500',
	purple: 'border-t-purple-500',
	fuchsia: 'border-t-fuchsia-500',
	pink: 'border-t-pink-500',
	rose: 'border-t-rose-500',
	slate: 'border-t-slate-500',
	gray: 'border-t-gray-500',
	zinc: 'border-t-zinc-500',
	neutral: 'border-t-neutral-500',
	stone: 'border-t-stone-500',
	white: 'border-t-white',
	black: 'border-t-black',
} as Record<Colors, string>;
