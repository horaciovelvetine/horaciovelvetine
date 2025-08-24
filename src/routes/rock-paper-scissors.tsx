import { createFileRoute } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';
import { useRPSSketchWindow } from '../hooks/windows';

// Lazy load the RPSSKetchWindow component
const RPSSKetchWindow = lazy(() => import('../features/rps/windows/rps-sketch-window').then(module => ({ default: module.RPSSKetchWindow })));

export const Route = createFileRoute('/rock-paper-scissors')({
	component: RockPaperScissorsComponent,
});

function RockPaperScissorsComponent() {
	const { siteSettings } = Route.useRouteContext();
	const rpsWindow = useRPSSketchWindow('');
	return (
		<div className='flex justify-center bg-stone-900/90 py-1 my-1 rounded-lg mx-0.25'>
			<Suspense fallback={<div className="text-white">Loading Rock, Paper, Scissors...</div>}>
				<RPSSKetchWindow
					siteSettings={siteSettings}
					windowState={rpsWindow}
				/>
			</Suspense>
		</div>
	);
}
