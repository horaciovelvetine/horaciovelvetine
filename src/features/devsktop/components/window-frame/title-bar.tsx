import type { ManagedWindow, WindowManager } from '../../../../types';

interface TitleBarProps {
	window: ManagedWindow;
	manager: WindowManager;
}

interface TrafficLightButtonProps {
	title: string;
	symbol: string;
	buttonClasses: string;
	onClick: () => void;
}

function TrafficLightButton({
	title,
	symbol,
	buttonClasses,
	onClick,
}: TrafficLightButtonProps) {
	return (
		<button
			type='button'
			title={title}
			className={`group/traffic relative flex size-3.5 items-center justify-center rounded-full border border-black/20 transition-transform duration-150 hover:scale-105 ${buttonClasses}`}
			onPointerDown={event => {
				event.stopPropagation();
			}}
			onClick={event => {
				event.stopPropagation();
				onClick();
			}}>
			<span className='text-[10px] font-black text-black/65 opacity-0 transition-opacity duration-150 group-hover/traffic:opacity-100'>
				{symbol}
			</span>
		</button>
	);
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

	const handleWindowMinimize = () => {
		manager.minimizeWindowByID(window.id);
	};

	const handleWindowZoom = () => {
		manager.toggleZoomWindowByID(window.id);
	};

	return (
		<div
			className={`window-drag-handle flex items-center gap-3 rounded-t-[18px] border-b px-3 py-2 select-none ${
				window.isFocused ?
					'border-white/10 bg-zinc-900/92'
				:	'border-white/6 bg-zinc-950/88'
			}`}
			onDoubleClick={handleWindowZoom}>
			<div className='flex items-center gap-2'>
				<TrafficLightButton
					title={`Close the ${window.title} window`}
					symbol='x'
					buttonClasses='bg-rose-500'
					onClick={handleWindowClose}
				/>
				<TrafficLightButton
					title={`Minimize the ${window.title} window`}
					symbol='-'
					buttonClasses='bg-amber-400'
					onClick={handleWindowMinimize}
				/>
				<TrafficLightButton
					title={`${window.isZoomed ? 'Restore' : 'Zoom'} the ${window.title} window`}
					symbol={window.isZoomed ? 'o' : '+'}
					buttonClasses='bg-emerald-400'
					onClick={handleWindowZoom}
				/>
			</div>
			<div className='min-w-0 flex-1 text-center'>
				<p
					className={`truncate text-[13px] font-semibold tracking-[0.02em] ${
						window.isFocused ? 'text-white/80' : 'text-white/50'
					}`}>
					{window.title}
				</p>
			</div>
			<div
				className='h-5 w-14 shrink-0 rounded-full border border-white/8 bg-white/[0.03]'
				aria-hidden='true'
			/>
		</div>
	);
}
