import { useWindowManager } from '../../hooks/site/use-window-manager';
import type { SiteSettings } from '../../types';
import { SiteNavigationMenuBar, WindowFrame } from '../../features';
import { DevsktopLandingWindow } from '../../features/windows/devsktop-landing-window';
import { SolvedokuWindow } from '../../features/windows/solvedoku-window';

export function MainDevsktopLayout(props: SiteSettings) {
  const { devsktopWindow, solvedokuWindow, focusedWindow, focusWindowByID, visibleWindows, closeWindowByID } =
    useWindowManager(props);

  return (
    <>
      <SiteNavigationMenuBar {...{ ...props, focusedWindow }} />
      <div
        id='devsktop-bounds'
        className='h-full w-full relative'>
        <WindowFrame
          {...{
            ...devsktopWindow,
            focusWindowByID,
            closeWindowByID,
            visibleWindows,
            component: <DevsktopLandingWindow />,
          }}
        />

        <WindowFrame
          {...{
            ...solvedokuWindow,
            focusWindowByID,
            closeWindowByID,
            visibleWindows,
            component: <SolvedokuWindow {...solvedokuWindow} />,
          }}
        />
      </div>
    </>
  );
}
