import { RPSIcon } from '../../../rps';
import { SolvedokuIcon } from '../../../solvedoku';
import type { DevsktopIconsProps } from './devsktop-icons-props';
import type { Position } from '../../../../types';
import { HomeIcon } from './home-icon';
import { IconFrame } from './icon-frame';

/**
 * DevsktopIcons component that renders draggable application icons on the desktop
 * Displays a collection of application icons in a horizontal tray at the top right of the screen
 * Each icon can be clicked to open its corresponding window application
 *
 * Features:
 * - Responsive icon positioning based on screen dimensions
 * - Dynamic tray positioning in upper right corner with automatic spacing between icons
 * - Integration with WindowManager for opening application windows
 * - Icons handle their own repositioning when screen dimensions change
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

	/**
	 * Calculate the base tray position in the upper right corner
	 * Icons are positioned horizontally from right to left with proper spacing
	 */
	function calculateTrayPosition(width: number): Position {
		const iconWidth = 130; // Width of each icon including spacing
		const trayWidth = iconWidth * ICONS.length;
		const margin = 20; // Margin from screen edges

		// Position tray in upper right corner
		const x = width - trayWidth - margin;
		const y = margin;

		return { x, y };
	}

	const { width } = props.siteSettings.clientDimensions;
	const baseTrayPosition = calculateTrayPosition(width);

	return (
		<div className='absolute min-h-full min-w-full'>
			{ICONS.map((icon, index) => (
				<IconFrame
					key={icon.label}
					Icon={icon.component}
					label={icon.label}
					onClickAction={icon.onClick}
					baseTrayPosition={baseTrayPosition}
					iconIndex={index}
					siteSettings={props.siteSettings}
				/>
			))}
		</div>
	);
}
