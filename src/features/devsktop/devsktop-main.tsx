import { AboutSolvedokuWindow, SolvedokuWindowMain } from '../../features';
import { MainLandingWindow } from './windows/main-landing-window';
import { AboutThisSiteWindow } from './windows/about-this-site-window';
import type { LayoutProps } from '../../types';
import { WindowFrame, NavigationBar } from './components';
import { DevsktopIcons } from './components/devsktop-icons/devsktop-icons';

export function DevsktopMain(props: LayoutProps) {
  const {
    devsktopWindow,
    aboutSolvedokuWindow,
    aboutThisSiteWindow,
    solvedokuWindow,
  } = props.windowManager;
  return (
    <main className='min-h-screen w-screen box-border text-white font-sans'>
      {/* SITE MAIN */}
      <div
        id='devsktop-bounds'
        className='h-[calc(100vh-36px)] w-full translate-y-[36px] relative isolate'>
        <DevsktopIcons
          windowManager={props.windowManager}
          siteSettings={props.siteSettings}
        />

        <WindowFrame
          window={devsktopWindow}
          Component={MainLandingWindow}
          siteSettings={props.siteSettings}
          windowManager={props.windowManager}
        />

        <WindowFrame
          window={aboutThisSiteWindow}
          Component={AboutThisSiteWindow}
          siteSettings={props.siteSettings}
          windowManager={props.windowManager}
        />

        {/* SOLVEDOKU */}
        <WindowFrame
          window={solvedokuWindow}
          Component={SolvedokuWindowMain}
          siteSettings={props.siteSettings}
          windowManager={props.windowManager}
        />

        <WindowFrame
          window={aboutSolvedokuWindow}
          Component={AboutSolvedokuWindow}
          siteSettings={props.siteSettings}
          windowManager={props.windowManager}
        />
      </div>
      <NavigationBar
        windowManager={props.windowManager}
        siteSettings={props.siteSettings}
      />
    </main>
  );
}
