import { RPSIcon } from '../../../rps';
import { SolvedokuIcon } from '../../../solvedoku';
import type { DevsktopIconsProps } from './devsktop-icons-props';
import { HomeIcon } from './home-icon';
import { IconFrame } from './icon-frame';

/**
 * DevsktopIcons component that renders draggable application icons on the desktop
 * Displays a collection of application icons in a horizontal tray at the bottom of the screen
 * Each icon can be clicked to open its corresponding window application
 *
 * Features:
 * - Responsive icon positioning based on screen dimensions
 * - Dynamic tray centering with automatic spacing between icons
 * - Integration with WindowManager for opening application windows
 * - Adaptive vertical positioning for different screen heights
 *
 * @param {DevsktopIconsProps} props - Component properties
 * @param {SiteSettings} props.siteSettings - Global site settings including client dimensions for calculating icon positions
 * @param {WindowManager} props.windowManager - Window manager instance for opening windows when icons are clicked
 * @returns JSX element containing positioned desktop application icons
 */
export function DevsktopIcons(props: DevsktopIconsProps) {
	const ICONS = [
		{
			component: HomeIcon,
			label: 'Home',
			onClick: () => {
				props.windowManager.openWindowByID('main-landing-window');
			},
		},
		{
			component: SolvedokuIcon,
			label: 'Solvedoku',
			onClick: () => {
				props.windowManager.openWindowByID('solvedoku-window');
			},
		},
		{
			component: RPSIcon,
			label: 'Rock, Paper, Scissors',
			onClick: () => {
				props.windowManager.openWindowByID('rps-sketch-window');
			},
		},
	];

	const { width, height } = props.siteSettings.clientDimensions;
	//
	const trayXPosStart = width / 2 - 98 * (ICONS.length / 2);
	const trayYPosStart = height - (height >= 500 ? 200 : 130);

	return (
		<div className='absolute min-h-full min-w-full'>
			{ICONS.map((icon, index) => (
				<IconFrame
					key={icon.label}
					Icon={icon.component}
					label={icon.label}
					onClickAction={icon.onClick}
					initialPosition={{ x: trayXPosStart + index * 130, y: trayYPosStart }}
				/>
			))}
		</div>
	);
}
