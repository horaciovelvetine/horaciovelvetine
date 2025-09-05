import { ClockDisplay } from '../../features/devsktop/components/navigation-bar/components/clock-display';
import type { SiteSettings } from '../../types';
import { LoadingPageSpinner } from './loading-page-spinner';

/**
 * Fallback component displayed while the main desktop interface is loading
 *
 * This component provides a loading state that mimics the structure and appearance
 * of the main DevsktopMain component, ensuring visual consistency during the
 * loading process. It displays a spinner with loading text and maintains the
 * same navigation bar layout as the full desktop interface.
 *
 * Features:
 * - Loading spinner with descriptive text
 * - Navigation bar placeholder with site branding
 * - Clock display using the same component as the main interface
 * - Identical styling and layout structure to DevsktopMain
 * - Proper z-index and positioning for seamless transition
 *
 * @param {SiteSettings} props - Site settings containing clock display configuration
 * @param {ClockDisplaySettings} props.clockDisplaySettings - Settings for the clock display component
 * @returns JSX element containing the loading fallback interface
 */

export function DevsktopFallback(props: SiteSettings) {
	return (
		<main className='min-h-screen w-screen box-border text-white font-sans'>
			<div
				id='devsktop-bounds'
				className='h-[calc(100vh-36px)] w-full translate-y-[36px] relative isolate'>
				{/* LOADING SPINNER */}
				<LoadingPageSpinner
					pageTitle='Devsktop'
					siteSettings={props}
				/>
			</div>
			{/* NAVBAR PLACEHOLDER */}
			<nav
				className='fixed top-0 w-full bg-zinc-900/80 backdrop-blur-3xl h-9 items-center px-2.5 select-none'
				style={{ zIndex: 1000 }}>
				<div className='w-full h-full flex items-center justify-between text-lg select-none'>
					<ul className='flex items-center gap-1'>
						<li className='relative flex mr-1 px-2 rounded select-none'>
							<p className='font-extrabold'>@horaciovelvetine</p>
						</li>
					</ul>
					<ClockDisplay {...props.clockDisplaySettings} />
				</div>
			</nav>
		</main>
	);
}
