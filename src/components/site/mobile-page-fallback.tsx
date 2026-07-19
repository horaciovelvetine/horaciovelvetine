import type { SiteSettings } from '../../types';
import { LoadingPageSpinner } from './loading-page-spinner';

interface MobilePageFallbackProps {
	siteSettings: SiteSettings;
	pageTitle: string;
}

/**
 * Mobile Fallback Component
 *
 * A fallback component displayed while mobile page content is loading.
 * This component provides a loading state specifically designed for mobile
 * pages, maintaining visual consistency and smooth transitions when content loads.
 *
 * Features:
 * - Loading spinner with customizable page title
 * - Consistent mobile-responsive layout
 * - Smooth visual transition to loaded content
 * - Matching background and styling to prevent jarring transitions
 * - Integration with site's color theme system
 *
 * Used by mobile pages like Solvedoku and Rock Paper Scissors to provide
 * a seamless loading experience while lazy-loaded components are initialized.
 *
 * @component
 * @param {Object} props - Component props
 * @param {SiteSettings} props.siteSettings - Site configuration settings
 * @param {string} props.pageTitle - The title of the page being loaded
 * @returns JSX element containing the mobile loading fallback interface
 */
export function MobilePageFallback({
	siteSettings,
	pageTitle,
}: MobilePageFallbackProps) {
	return (
		<div className='flex min-h-[240px] justify-center rounded-[28px] border border-white/10 bg-zinc-950/92 p-2 shadow-xl shadow-black/20'>
			<div className='relative w-full'>
				<LoadingPageSpinner
					siteSettings={siteSettings}
					pageTitle={pageTitle}
				/>
			</div>
		</div>
	);
}
