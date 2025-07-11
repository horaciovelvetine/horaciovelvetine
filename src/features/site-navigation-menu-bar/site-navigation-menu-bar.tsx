import type { ManagedWindow, SiteSettings } from '../../types';
import { SiteMenuDropdown, ClockDisplay } from './components';

interface SiteNavMenuBarProps extends SiteSettings {
	focusedWindow: ManagedWindow
}

export function SiteNavigationMenuBar({ clockDisplaySettings }: SiteNavMenuBarProps) {
	return (
		<nav className='flex w-screen bg-zinc-900/80 backdrop-blur-2xl h-8 items-center px-2.5' style={{ zIndex: '99' }}>
			<div className='flex items-center-safe w-screen justify-between text-shadow-2xs'>
				<div className='flex items-center-safe gap-1'>
					{/* <SiteMenuDropdown /> */}
					{/* <ul className='flex list-none gap-x-3'>
						{focusedWindow.navigationMenus.map(menu => (
							<NavigationMenuDropdownOption
								key={menu.id}
								{...menu}
							/>
						))}
					</ul> */}
				</div>

				<ClockDisplay {...clockDisplaySettings} />
			</div>
		</nav>
	);
}



