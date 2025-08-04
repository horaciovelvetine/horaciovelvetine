import { CloseIcon } from '../../../assets';
import type { ManagedWindow, WindowManager } from '../../../types';

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
	const windowButtonStyle =
		'rounded-full transition-all duration-200 bg-zinc-500 group h-4 w-4 flex items-center justify-center';

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
						windowButtonStyle +
						' hover:bg-red-500 border border-gray-300/10 absolute -top-2'
					}
					onClick={handleWindowClose}
					onTouchStart={handleWindowClose}>
					<img
						src={CloseIcon}
						className='opacity-0 group-hover:opacity-100'
					/>
				</button>
			</div>
			<div className='tracking-tighter text-center w-full font-extrabold text-nowrap select-none'>
				{window.title}
			</div>
		</div>
	);
}
