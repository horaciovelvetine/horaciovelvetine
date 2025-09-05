import { createFileRoute } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';
import { useRPSSketchWindow } from '../../hooks/windows';
import { MobilePageFallback } from '../../components';

// Lazy load the RPSSKetchWindow component
const RPSSKetchWindow = lazy(() =>
	import('../../features/rps/windows/rps-sketch-window').then(module => ({
		default: module.RPSSKetchWindow,
	}))
);

export const Route = createFileRoute('/projects/rock-paper-scissors')({
	component: MobileRockPaperScissorsPage,
});

/**
 * Rock Paper Scissors Game Page Component
 *
 * A game page that displays an interactive Rock, Paper, Scissors game in a desktop-style window.
 * The component uses lazy loading for performance optimization and integrates with the site's
 * window management system to provide a desktop-like experience.
 *
 * Features:
 * - Lazy-loaded game component for better initial page load performance
 * - Desktop-style window interface using the site's window management system
 * - Responsive layout with consistent styling matching the site theme
 * - Integration with site settings for customizable user experience
 * - Loading fallback during component lazy loading
 *
 * The game is rendered within a RPSSKetchWindow component that provides window functionality
 * such as dragging, resizing, and other desktop-style interactions.
 *
 * @component
 */
function MobileRockPaperScissorsPage() {
	const { siteSettings } = Route.useRouteContext();
	const rpsWindow = useRPSSketchWindow();
	return (
		<div className='flex justify-center bg-stone-900/90 py-1 my-1 rounded-lg mx-0.25'>
			<Suspense
				fallback={
					<MobilePageFallback
						pageTitle='Rock, Paper, Scissors'
						siteSettings={siteSettings}
					/>
				}>
				<RPSSKetchWindow
					siteSettings={siteSettings}
					windowState={rpsWindow}
				/>
			</Suspense>
		</div>
	)
}
