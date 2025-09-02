/* eslint-disable @eslint-react/jsx-key-before-spread */
import type { SiteSettings, WindowManager } from '../../../../types';
import { ClockDisplay } from './components/clock-display';
import { NavBarMenuItemParent } from './components/nav-bar-menu-item-parent';

export interface NavigationBarProps {
	siteSettings: SiteSettings;
	windowManager: WindowManager;
}

/**
 * Navigation bar component that displays at the top of the screen.
 * Contains dropdown menu's for window management and a clock display.
 * @param props - Combined props from WindowManager and SiteSettings
 * @param props.navBarMenuItems - Array of top-level menu items to display
 * @param props.clockDisplaySettings - Settings for the clock display component
 * @returns Navigation bar React component
 */
export function NavigationBar(props: NavigationBarProps) {
	return (
		<nav
			className='fixed top-0 w-full bg-zinc-900/80 backdrop-blur-3xl h-9 items-center px-2.5 select-none'
			style={{ zIndex: 1000 }}>
			<div className='w-full h-full flex items-center justify-between text-lg select-none'>
				<ul className='flex items-center gap-1'>
					{props.windowManager.navBarMenuItems.map(item => (
						<NavBarMenuItemParent
							{...item}
							key={item.key}
						/>
					))}
				</ul>
				<ClockDisplay {...props.siteSettings.clockDisplaySettings} />
			</div>
		</nav>
	);
}
