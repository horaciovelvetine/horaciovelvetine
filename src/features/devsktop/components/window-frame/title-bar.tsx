import { CloseIcon } from '../../../../assets';
import type { ManagedWindow, WindowManager } from '../../../../types';

interface TitleBarProps {
	window: ManagedWindow;
	manager: WindowManager;
}
/**
 * Title bar component that displays at the top of each window frame.
 * Contains a close button and the window title.
 * @param props - The component props
 * @param props.window - The window state object
 * @param props.manager - The window manager instance
 */
export function TitleBar({ window, manager }: TitleBarProps) {
	const handleWindowClose = () => {
		manager.closeWindowByID(window.id);
	};
	return (
		<div className='flex gap-1 bg-zinc-800/80 rounded-t-md py-1 px-2 items-center'>
			<div className='flex gap-1.5 justify-self-start relative'>
				<button
					type='button'
					title={`Close the ${window.title} window`}
					className={
						'rounded-full transision-all duration-200 group size-4 flex items-center justify-center bg-red-500 border border-stone-300/10 absolute -top-2'
					}
					onClick={handleWindowClose}
					onTouchStart={handleWindowClose}>
					<CloseIcon classes='text-gray-800 opacity-0 group-hover:opacity-100' />
				</button>
			</div>
			<div className='tracking-tighter text-center w-full font-extrabold text-nowrap select-none'>
				{window.title}
			</div>
		</div>
	);
}
