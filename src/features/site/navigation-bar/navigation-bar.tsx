/* eslint-disable @eslint-react/jsx-key-before-spread */
import type {
  SiteSettings,
  WindowManager,
} from '../../../types';
import { ClockDisplay } from './components/clock-display';
import { NavBarMenuItemParent } from './components/nav-bar-menu-item-parent';

export function NavigationBar(props: WindowManager & SiteSettings) {
  return (
    <nav className='fixed top-0 w-full bg-zinc-900/80 backdrop-blur-3xl h-9 items-center px-2.5'>
      <div className='w-full h-full flex items-center justify-between text-lg'>
        <ul className='flex items-center gap-1'>
          {props.navBarMenuItems.map(item => (
            <NavBarMenuItemParent
              {...item}
              key={item.key}
            />
          ))}
        </ul>
        <ClockDisplay {...props.clockDisplaySettings} />
      </div>
    </nav>
  );
}

