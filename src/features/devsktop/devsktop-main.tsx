import { AboutSolvedokuWindow, SolvedokuWindowMain } from '../../features';
import { MainLandingWindow } from './windows/main-landing-window';
import { AboutThisSiteWindow } from './windows/about-this-site-window';
import type { LayoutProps } from '../../types';
import { WindowFrame, NavigationBar } from './components';

export function DevsktopMain(props: LayoutProps) {
  const {
    devsktopWindow,
    aboutSolvedokuWindow,
    aboutThisSiteWindow,
    solvedokuWindow,
  } = props.windowManager;
  return (
    <main className='min-h-screen w-screen box-border text-white font-sans'>
      {/* <main className='min-h-screen w-screen bg-cover saturate-[1.5] box-border text-white brightness-90 font-sans'> */}
      <div
        id='devsktop-bounds'
        className='h-screen w-full'>
        {/* SITE */}
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
