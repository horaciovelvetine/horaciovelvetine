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
			className={`absolute inset-0 z-30 flex items-center justify-center p-3 transition-all duration-200 ${showMenu ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
			<button
				type='button'
				className='absolute inset-0 bg-black/55 backdrop-blur-[2px]'
				aria-label={`Close ${menuMainTitle}`}
				onClick={() => {
					setShowMenu(false);
				}}
			/>
			<div className='relative flex max-h-full w-full max-w-2xl flex-col items-center gap-2 overflow-auto rounded-[24px] border border-white/10 bg-zinc-950/96 px-4 pt-2 shadow-2xl shadow-black/50'>
				<button
					type='button'
					className='flex w-full justify-end'
					onClick={() => {
						setShowMenu(false);
					}}>
					<CloseIcon size='size-8 xs:size-10 sm:size-12' />
				</button>

				<Icon
					size='size-16 xs:size-20 sm:size-28 md:size-36'
					renderWithAppleCompatability={
						siteSettings.deviceInfo.isAppleDevice ||
						siteSettings.deviceInfo.isSafariBrowser
					}
				/>

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
