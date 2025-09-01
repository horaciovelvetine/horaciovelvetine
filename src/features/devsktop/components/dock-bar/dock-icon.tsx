import type { ReactNode } from 'react';
import type { IconProps } from '../../../../types';

interface DockIconProps {
	Icon: (props: IconProps) => ReactNode;
	label: string;
	onClick: () => void;
	isOpen: boolean;
}

export function DockIcon({ Icon, label, onClick, isOpen }: DockIconProps) {
	return (
		<div className='relative group'>
			{/* Hover Title */}
			<div className='absolute opacity-0 -top-12 group-hover:opacity-100 pointer-events-none transition-all duration-200 w-full flex justify-center'>
				<span className='flex w-fit bg-zinc-900/80 rounded-lg px-2 py-0.5'>
					<h4 className='text-lg text-white text-nowrap'>{label}</h4>
				</span>
			</div>

			{/* Icon */}
			<button
				type='button'
				className='flex flex-col items-center group-hover:scale-105 group-hover:-translate-y-1 duration-200 transition-all'
				onTouchStart={onClick}
				onClick={onClick}>
				<Icon
					size='size-18 lg:size-22'
					classes='drop-shadow-lg drop-shadow-stone-900/30'
				/>
			</button>
			{/* Window Open Indicator */}
			<div
				className={`absolute -bottom-3 ${isOpen ? 'opacity-100' : 'opacity-0'} flex w-full justify-center transition-opacity duration-200 `}>
				<div className='size-2 bg-white rounded-full'></div>
			</div>
		</div>
	);
}
