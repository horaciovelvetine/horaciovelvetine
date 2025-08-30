import { RPSIcon } from '../../../rps';
import { SolvedokuIcon } from '../../../solvedoku';
import type { Position, SiteSettings, WindowManager } from '../../../../types';
import { HomeIcon } from './home-icon';
import { IconFrame } from './icon-frame';
import { useState, useEffect } from 'react';

// Local hook for window dimensions to prevent unnecessary re-renders
function useWindowDimensions() {
	const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

	useEffect(() => {
		const handleResize = () => {
			setDimensions({ width: window.innerWidth, height: window.innerHeight });
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return dimensions;
}

interface DevsktopIconsProps {
	siteSettings: SiteSettings;
	windowManager: WindowManager;
}

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
 * @param {SiteSettings} props.siteSettings - Global site settings for icon behavior
 * @param {WindowManager} props.windowManager - Window manager instance for opening windows when icons are clicked
 * @returns JSX element containing positioned desktop application icons
 */
export function DevsktopIcons(props: DevsktopIconsProps) {
	const iconSpacing = 120;
	const iconMargin = 10;
	const { width } = useWindowDimensions();

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
		const trayWidth = iconSpacing * ICONS.length;

		// Position tray in upper right corner
		const x = width - trayWidth - iconMargin;
		const y = iconMargin;

		return { x, y };
	}

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
					iconCount={ICONS.length}
					iconSpacing={iconSpacing}
					iconMargin={iconMargin}
				/>
			))}
		</div>
	);
}
