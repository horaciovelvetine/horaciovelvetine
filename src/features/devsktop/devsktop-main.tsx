import {
	SolvedokuWindow,
	MainLandingWindow,
	AboutThisSiteWindow,
	RPSSKetchWindow,
} from '../../features';
import { useWindowManager } from '../../hooks/site';
import type { SiteContext } from '../../types';
import { WindowFrame, NavigationBar, DevsktopIcons } from './components';

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
				<DevsktopIcons
					windowManager={windowManager}
					siteSettings={siteSettings}
				/>

				<WindowFrame
					window={windowManager.devsktopWindow}
					Component={MainLandingWindow}
					siteSettings={siteSettings}
					windowManager={windowManager}
				/>

				<WindowFrame
					window={windowManager.aboutThisSiteWindow}
					Component={AboutThisSiteWindow}
					siteSettings={siteSettings}
					windowManager={windowManager}
				/>

				{/* SOLVEDOKU */}
				<WindowFrame
					window={windowManager.solvedokuWindow}
					Component={SolvedokuWindow}
					siteSettings={siteSettings}
					windowManager={windowManager}
				/>

				{/* ROCK, PAPER, SCISSORS */}
				<WindowFrame
					window={windowManager.rpsSketchWindow}
					Component={RPSSKetchWindow}
					siteSettings={siteSettings}
					windowManager={windowManager}
				/>
			</div>
			<NavigationBar
				windowManager={windowManager}
				siteSettings={siteSettings}
			/>
		</main>
	);
}
