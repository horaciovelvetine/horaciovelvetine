import { useMemo, useState } from 'react';
import type { Dimensions, RPSWindowState, SiteSettings } from '../../../types';
import { RPSSketchMain } from '../components/rps-sketch-main';
import { RPSHeader } from '../components/rps-header';
import { MenuWrapper } from '../components/rps-menus/menu-wrapper';
import { AboutMenu } from '../components/rps-menus/about-menu';
import { SettingsMenu } from '../components/rps-menus/settings-menu';
import { InitializeSketchMenu } from '../components/rps-menus/initialize-sketch-menu';

interface RPSSketchWindowProps {
	siteSettings: SiteSettings;
	windowState: RPSWindowState;
}

export function RPSSKetchWindow({
	siteSettings,
	windowState,
}: RPSSketchWindowProps) {
	const [sketchInitialized, setSketchInitialized] = useState(false);

	const canvasSize: Dimensions = useMemo(
		() =>
			siteSettings.useMobileCompatability ?
				{
					width: siteSettings.clientDimensions.width - 24,
					height: siteSettings.clientDimensions.height - 140,
				}
				: { width: 750, height: 560 },
		[siteSettings]
	);

	return (
		<div className='flex flex-col h-full justify-center items-center relative isolate'>
			{/* HEADER */}
			<RPSHeader
				setShowAboutMenu={windowState.setShowAboutMenu}
				setShowSettingsMenu={windowState.setShowSettingsMenu}
			/>

			{/* SKETCH */}
			<div className=''>
				{!sketchInitialized && (
					<InitializeSketchMenu siteSettings={siteSettings} />
				)}
				{sketchInitialized && <RPSSketchMain canvasSize={canvasSize} />}
			</div>

			{/* MENUS */}
			<MenuWrapper
				setShowMenu={windowState.setShowAboutMenu}
				showMenu={windowState.showAboutMenu}
				rpsState={windowState}
				siteSettings={siteSettings}
				menuMainTitle='About'
				Content={AboutMenu}
			/>

			<MenuWrapper
				setShowMenu={windowState.setShowSettingsMenu}
				showMenu={windowState.showSettingsMenu}
				rpsState={windowState}
				siteSettings={siteSettings}
				menuMainTitle='Settings'
				Content={SettingsMenu}
			/>
		</div>
	);
}
