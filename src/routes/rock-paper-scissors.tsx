import { createFileRoute } from '@tanstack/react-router';
import { RPSSKetchWindow } from '../features';
import { useRPSSketchWindow } from '../hooks/windows';


export const Route = createFileRoute('/rock-paper-scissors')({
	component: RockPaperScissorsComponent,
});

function RockPaperScissorsComponent() {
	const { siteSettings } = Route.useRouteContext();
	const rpsWindow = useRPSSketchWindow();
	return (
		<div className='flex justify-center bg-stone-900/90 py-1 my-1 rounded-lg mx-0.25'>
			<RPSSKetchWindow siteSettings={siteSettings} windowState={rpsWindow} />
		</div>
	);
}
