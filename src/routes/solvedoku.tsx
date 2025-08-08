import { createFileRoute } from '@tanstack/react-router';
import { SolvedokuWindowMain } from '../features';

export const Route = createFileRoute('/solvedoku')({
  component: SolvedokuComponent,
});

function SolvedokuComponent() {
  const { siteSettings, windowManager } = Route.useRouteContext();

  return (
    <div className='flex justify-center bg-stone-900/90 pt-1 pb-3'>
      <SolvedokuWindowMain
        siteSettings={siteSettings}
        windowState={windowManager.solvedokuWindow}
      />
    </div>
  );
}
