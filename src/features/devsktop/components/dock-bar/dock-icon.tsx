import type { ReactNode } from 'react';
import type { IconProps, SiteSettings } from '../../../../types';

interface DockIconProps {
	Icon: (props: IconProps) => ReactNode;
	label: string;
	onClick: () => void;
	isOpen: boolean;
	siteSettings: SiteSettings;
}

/**
 * Individual dock icon component that renders an application icon with hover effects and active state indicator
 *
 * This component represents a single application icon within the dock bar. It provides visual feedback
 * through hover animations, displays the application name on hover, and shows an active indicator
 * when the corresponding window is open. The icon scales up and moves slightly upward on hover
 * for enhanced user interaction feedback.
 *
 * Features:
 * - Hover tooltip displaying the application label
 * - Scale and translate animations on hover
 * - Active state indicator (white dot) when window is open
 * - Touch and click event handling for mobile and desktop compatibility
 * - Customizable icon component with size and styling props
 *
 * @param props - The component props
 * @param props.Icon - React component that renders the application icon
 * @param props.label - Display name of the application shown in hover tooltip
 * @param props.onClick - Callback function executed when the icon is clicked or touched
 * @param props.isOpen - Boolean indicating whether the corresponding window is currently open
 * @returns A dock icon component with hover effects and active state visualization
 */

export function DockIcon({
	Icon,
	label,
	onClick,
	isOpen,
	siteSettings,
}: DockIconProps) {
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
					renderWithAppleCompatability={
						siteSettings.deviceInfo.isAppleDevice ||
						siteSettings.deviceInfo.isSafariBrowser
					}
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
