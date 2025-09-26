import { SiteInfoWindow, WritingWindow, AboutWindow } from '../../features';
import { useWindowManager } from '../../hooks/site';
import type { SiteContext } from '../../types';
import {
	WindowFrame,
	NavigationBar,
	DockBar,
	LandingPageIntro,
} from './components';
import { lazy } from 'react';

// Lazy load heavy application windows (but keep P5.js as static import)
const SolvedokuWindow = lazy(() =>
	import('../../features/solvedoku/windows/solvedoku-window').then(module => ({
		default: module.SolvedokuWindow,
	}))
);
const RPSSKetchWindow = lazy(() =>
	import('../../features/rps/windows/rps-sketch-window').then(module => ({
		default: module.RPSSKetchWindow,
	}))
);

/**
 * Main desktop component that renders the entire devsktop interface
 * Manages multiple application windows and provides a desktop-like experience
 * Includes navigation bar, desktop icons, and various application windows
 *
 * #devsktop-bounds height is set to the clients view height minus the {@see NavigationBar } component @ 36px
 *
 * @param {SiteSettings} props.siteSettings - Global site settings including theme and accent colors
 */
export function DevsktopMain({ siteSettings }: SiteContext) {
	const windowManager = useWindowManager();

	return (
		<main className='min-h-screen w-screen box-border text-white font-sans'>
			{/* SITE MAIN */}
			<div
				id='devsktop-bounds'
				className='h-[calc(100vh-36px)] w-full translate-y-[36px] relative isolate'>
				<DockBar
					siteSettings={siteSettings}
					windowManager={windowManager}
				/>

				<WindowFrame
					window={windowManager.mainLandingWindow}
					Component={LandingPageIntro}
					siteSettings={siteSettings}
					windowManager={windowManager}
				/>

				<WindowFrame
					window={windowManager.aboutThisSiteWindow}
					Component={SiteInfoWindow}
					siteSettings={siteSettings}
					windowManager={windowManager}
				/>

				{/* SOLVEDOKU - Lazy Loaded */}
				<WindowFrame
					window={windowManager.solvedokuWindow}
					Component={SolvedokuWindow}
					siteSettings={siteSettings}
					windowManager={windowManager}
				/>

				{/* ROCK, PAPER, SCISSORS - Lazy Loaded */}
				<WindowFrame
					window={windowManager.rpsSketchWindow}
					Component={RPSSKetchWindow}
					siteSettings={siteSettings}
					windowManager={windowManager}
				/>

				<WindowFrame
					window={windowManager.writingWindow}
					Component={WritingWindow}
					siteSettings={siteSettings}
					windowManager={windowManager}
				/>

				<WindowFrame
					window={windowManager.aboutWindow}
					Component={AboutWindow}
					siteSettings={siteSettings}
					windowManager={windowManager}
				/>
			</div>

			{/* NAVBAR */}
			<NavigationBar
				windowManager={windowManager}
				siteSettings={siteSettings}
			/>
		</main>
	);
}
