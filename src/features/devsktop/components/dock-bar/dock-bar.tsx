import type { SiteSettings, WindowManager } from '../../../../types';
import { HomeIcon } from './home-icon';
import { SolvedokuIcon } from '../../../solvedoku';
import { RPSIcon } from '../../../rps';
import { DockIcon } from './dock-icon';
import { NotesIcon } from '../../../writing/components/notes-icon';

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

export function DockBar({ windowManager, siteSettings }: DockBarProps) {
	return (
		<div className='absolute bottom-4 min-w-full'>
			<div className='flex justify-center'>
				<div className='flex gap-4 rounded-[28px] border border-white/10 bg-black/35 px-4 pb-4 pt-2.5 shadow-2xl shadow-black/35 backdrop-blur-2xl'>
					<DockIcon
						label='Home'
						Icon={HomeIcon}
						onClick={() => {
							windowManager.openWindowByID('landing-page-window');
						}}
						isOpen={windowManager.mainLandingWindow.isShown}
						siteSettings={siteSettings}
					/>
					<DockIcon
						label='Solvedoku'
						Icon={SolvedokuIcon}
						onClick={() => {
							windowManager.openWindowByID('solvedoku-window');
						}}
						isOpen={windowManager.solvedokuWindow.isShown}
						siteSettings={siteSettings}
					/>
					<DockIcon
						label='Rock, Paper, Scissors'
						Icon={RPSIcon}
						onClick={() => {
							windowManager.openWindowByID('rps-sketch-window');
						}}
						isOpen={windowManager.rpsSketchWindow.isShown}
						siteSettings={siteSettings}
					/>
					<DockIcon
						label='Writing'
						Icon={NotesIcon}
						onClick={() => {
							windowManager.openWindowByID('writing-window');
						}}
						isOpen={windowManager.writingWindow.isShown}
						siteSettings={siteSettings}
					/>
				</div>
			</div>
		</div>
	);
}
