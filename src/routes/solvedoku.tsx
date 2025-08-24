import { createFileRoute } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';
import { useSolvedokuWindow } from '../hooks/windows';

// Lazy load the SolvedokuWindow component
const SolvedokuWindow = lazy(() => import('../features/solvedoku/windows/solvedoku-window').then(module => ({ default: module.SolvedokuWindow })));

export const Route = createFileRoute('/solvedoku')({
  component: SolvedokuComponent,
});

function SolvedokuComponent() {
  const { siteSettings } = Route.useRouteContext();
  const solvedokuWindow = useSolvedokuWindow('');

  return (
    <div className='flex justify-center bg-stone-900/90 pt-1 pb-3 my-1 rounded-lg mx-0.25'>
      <Suspense fallback={<div className="text-white">Loading Solvedoku...</div>}>
        <SolvedokuWindow
          siteSettings={siteSettings}
          windowState={solvedokuWindow}
        />
      </Suspense>
    </div>
  );
}
