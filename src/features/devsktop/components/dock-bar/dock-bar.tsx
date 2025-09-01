import type { SiteSettings, WindowManager } from '../../../../types';
import { HomeIcon } from './home-icon';
import { SolvedokuIcon } from '../../../solvedoku';
import { RPSIcon } from '../../../rps';
import { DockIcon } from './dock-icon';

interface DockBarProps {
  siteSettings: SiteSettings;
  windowManager: WindowManager;
}

/**
 * Desktop dock bar component that provides quick access to applications
 * 
 * Renders a translucent dock at the bottom of the desktop interface containing
 * application icons for launching windows. Each icon displays an active indicator
 * when its corresponding window is open and handles click events to open or focus windows.
 * 
 * The dock is positioned absolutely at the bottom of the devsktop bounds and centers
 * itself horizontally with a rounded background and subtle ring border for visual appeal.
 * 
 * @param props - The component props
 * @param props.siteSettings - Global site configuration and theme settings
 * @param props.windowManager - Window management system for controlling application windows
 * @returns A dock bar component with application icons for window management
 */

export function DockBar({ windowManager }: DockBarProps) {
  return (
    <div className='absolute min-w-full bottom-2'>
      <div className='flex mx-auto justify-center'>
        <div className='flex gap-4 rounded-xl bg-zinc-900/70 px-4 pt-2.5 pb-4.5 ring ring-stone-300/10'>
          <DockIcon
            label='Home'
            Icon={HomeIcon}
            onClick={() => {
              windowManager.openWindowByID('main-landing-window');
            }}
            isOpen={windowManager.devsktopWindow.isShown}
          />
          <DockIcon
            label='Solvedoku'
            Icon={SolvedokuIcon}
            onClick={() => {
              windowManager.openWindowByID('solvedoku-window');
            }}
            isOpen={windowManager.solvedokuWindow.isShown}
          />
          <DockIcon
            label='Rock, Paper, Scissors'
            Icon={RPSIcon}
            onClick={() => {
              windowManager.openWindowByID('rps-sketch-window');
            }}
            isOpen={windowManager.rpsSketchWindow.isShown}
          />
        </div>
      </div>
    </div>
  );
}
