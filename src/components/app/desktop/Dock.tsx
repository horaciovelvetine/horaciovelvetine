import { CodeIcon } from '@heroicons/react/solid';
import { DESKTOP_STATE } from '../../../interfaces/DesktopState';
import { AboutDockIcon, FinderDockIcon, SystemPreferencesDockIcon, TrashDockIcon } from '../../screens';

const dockCSS =
	'absolute w-fit inset-x-0 bottom-0 bg-bg-primary-900/90 transition-all mx-auto my-2 px-4 pt-2 pb-3 rounded-xl shadow-2xl border-[0.25px] border-white/[0.27] ';

export const Dock = (desktopState: DESKTOP_STATE) => {
	return (
		<div id='dock-container' className={dockCSS}>
			<div className='flex flex-row justify-center gap-3 items-center relative'>
				<FinderDockIcon {...desktopState} />
				<AboutDockIcon {...desktopState} />
				<SystemPreferencesDockIcon {...desktopState} />
        <div className='border-r border-white/[0.35] h-16'></div>
				<TrashDockIcon {...desktopState} />

			</div>
		</div>
	);
};
