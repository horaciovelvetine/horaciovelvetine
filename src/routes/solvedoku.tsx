import { createFileRoute } from '@tanstack/react-router';
import { SolvedokuWindow } from '../features/solvedoku/windows/solvedoku-window';
import { useSolvedokuWindow } from '../hooks/windows';

export const Route = createFileRoute('/solvedoku')({
  component: SolvedokuComponent,
});

function SolvedokuComponent() {
  const { siteSettings } = Route.useRouteContext();
  const solvedokuWindow = useSolvedokuWindow('');

  return (
    <div className='flex justify-center bg-stone-900/90 pt-1 pb-3 my-1 rounded-lg mx-0.25'>
      <SolvedokuWindow
        siteSettings={siteSettings}
        windowState={solvedokuWindow}
      />
    </div>
  );
}
