import { createFileRoute } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';
import { useSolvedokuWindow } from '../hooks/windows';

// Lazy load the SolvedokuWindow component
const SolvedokuWindow = lazy(() =>
	import('../features/solvedoku/windows/solvedoku-window').then(module => ({
		default: module.SolvedokuWindow,
	}))
);

export const Route = createFileRoute('/solvedoku')({
	component: SolvedokuComponent,
});

/**
 * Solvedoku Game Page Component
 *
 * A game page that displays an interactive Sudoku puzzle solver in a desktop-style window.
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
 * The game is rendered within a SolvedokuWindow component that provides window functionality
 * such as dragging, resizing, and other desktop-style interactions.
 *
 * @component
 */
function SolvedokuComponent() {
	const { siteSettings } = Route.useRouteContext();
	const solvedokuWindow = useSolvedokuWindow('');

	return (
		<div className='flex justify-center bg-stone-900/90 pt-1 pb-3 my-1 rounded-lg mx-0.25'>
			<Suspense
				fallback={<div className='text-white'>Loading Solvedoku...</div>}>
				<SolvedokuWindow
					siteSettings={siteSettings}
					windowState={solvedokuWindow}
				/>
			</Suspense>
		</div>
	);
}
