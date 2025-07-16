import { useWindowManager } from '../../hooks/site/use-window-manager';
import type { SiteSettings } from '../../types';
import { WindowFrame, NavigationBar, DevsktopLandingWindow, SolvedokuWindow } from '../../features';

export function MainDevsktopLayout(props: SiteSettings) {
  const WINDOW_MANAGER = useWindowManager(props);
  const { devsktopWindow, solvedokuWindow } = WINDOW_MANAGER;

  return (
    <>
      <div
        id='devsktop-bounds'
        className='h-full w-full'>
        <WindowFrame
          window={devsktopWindow}
          Component={DevsktopLandingWindow}
          {...WINDOW_MANAGER}
        />

        <WindowFrame
          window={solvedokuWindow}
          Component={SolvedokuWindow}
          {...WINDOW_MANAGER}
        />

      </div>
      <NavigationBar {...WINDOW_MANAGER} />
    </>
  );
}
