/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { CloseIcon } from '../../../assets';
import type { IconProps, ManagedWindow, SiteSettings } from '../../../types';

export interface WindowMenuWrapperProps {
	siteSettings: SiteSettings;
	windowState: ManagedWindow;
	showMenu: boolean;
	setShowMenu: Dispatch<SetStateAction<boolean>>;
	menuMainTitle: string;
	Content: (props: any) => ReactNode;
	Icon: (props: IconProps) => ReactNode;
}

/**
 * A wrapper component that renders a menu overlay for window components.
 * Provides a modal-like interface with a close button, icon, title, and dynamic content.
 *
 * @param props - The component props
 * @param props.siteSettings - Global site configuration settings
 * @param props.windowState - The current state of the managed window
 * @param props.showMenu - Boolean flag controlling menu visibility
 * @param props.setShowMenu - State setter function to toggle menu visibility
 * @param props.menuMainTitle - The main title displayed in the menu header
 * @param props.Content - React component to render as the main menu content
 * @param props.Icon - React component to render as the menu icon
 *
 * @returns A positioned menu overlay with header, icon, title and dynamic content
 */
export function WindowMenuWrapper({
	siteSettings,
	windowState,
	showMenu,
	setShowMenu,
	menuMainTitle,
	Content,
	Icon,
}: WindowMenuWrapperProps) {
	return (
		<div
			className={`absolute w-full -bottom-1.5 md:bottom-9 transition-all duration-200 pb-2 ${showMenu ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'}`}>
			<div className='flex flex-col rounded-lg bg-stone-900 px-2 pt-1 items-center gap-1 border border-stone-300/30'>
				<button
					type='button'
					className='flex w-full justify-end'
					onClick={() => {
						setShowMenu(false);
					}}>
					<CloseIcon size='size-5 xs:size-8 sm:size-10' />
				</button>

				<Icon size='size-16 xs:size-20 sm:size-28 md:size-36' />

				<h3 className='font-semibold tracking-tighter xs:text-lg sm:text-2xl'>
					{menuMainTitle}
				</h3>
				{/* ADD MAIN CONTENT */}
				<Content
					setShowMenu={setShowMenu}
					windowState={windowState}
					siteSettings={siteSettings}
				/>
			</div>
		</div>
	);
}
