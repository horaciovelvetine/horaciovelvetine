import { useCallback, useMemo, useState } from 'react';
import type {
	WindowManager,
	ManagedWindow,
	SiteSettings,
	NavBarMenuParent,
} from '../../types';
import { useDevsktopLandingWindow } from './use-devsktop-landing-window';
import { useSolvedokuWindow } from '../solvedoku';
import { CodeBlockIcon } from '../../assets';

export function useWindowManager(
	props: SiteSettings
): WindowManager & SiteSettings {
	const [focusedWindowID, setFocusedWindowID] = useState<string>('solvedoku-window');
	const [openWindowIDs, setOpenWindowIDs] = useState<string[]>([
		'solvedoku-window'
	]);

	const devsktopWindow = useDevsktopLandingWindow(props);
	const solvedokuWindow = useSolvedokuWindow(props);

	const ALL_WINDOWS: ManagedWindow[] = useMemo(
		() => [devsktopWindow, solvedokuWindow],
		[solvedokuWindow, devsktopWindow]
	);

	const focusedWindow = useMemo(() => {
		return (
			ALL_WINDOWS.find(window => window.id === focusedWindowID) ??
			devsktopWindow
		);
	}, [ALL_WINDOWS, focusedWindowID, devsktopWindow]);

	/**
	 * Focuses a window by its ID, changes { @see SiteNavigationMenuBar } to display relevant menu-ing and adjust its Z-Index state to be visible on top of the other windows. zIndex is '1' for the window on top, and 0 (sorted by the order rendered in {@see MainDevsktopLayout }) for all other visibleWindows.
	 * @param windowID - The unique ID of the window to focus
	 * @returns void
	 */
	const focusWindowByID = useCallback(
		(windowID: string): void => {
			const windowToFocus = ALL_WINDOWS.find(window => window.id === windowID);
			if (!windowToFocus) return;

			setFocusedWindowID(windowID);
			windowToFocus.setZIndex('1');
			//? Send all other windows to back
			ALL_WINDOWS.filter(window => window.id !== windowToFocus.id).forEach(
				window => {
					window.setZIndex('0');
				}
			);
		},
		[ALL_WINDOWS]
	);

	/**
	 * Closes a window by its ID, removing it from the visible windows array
	 * @param windowID - The unique ID of the window to close
	 * @returns void
	 */
	const closeWindowByID = useCallback((id: string): void => {
		setOpenWindowIDs(prevIDs => prevIDs.filter(windowID => windowID !== id));
	}, []);

	/**
	 * Opens a window by its ID, adding it to the visible windows array and focusing it
	 * @param windowID - The unique ID of the window to open
	 * @returns void
	 */
	const openWindowByID = useCallback(
		(windowID: string): void => {
			focusWindowByID(windowID);
			setOpenWindowIDs(prev => [...prev, windowID]);
		},
		[focusWindowByID]
	);

	//?? NAVBAR MENUING
	//?? NAVBAR MENUING
	//?? NAVBAR MENUING
	const navBarMenuItems: NavBarMenuParent[] =
		useMemo((): NavBarMenuParent[] => {
			return [
				{
					//? SITE MENU INCLUDED AS FIRST OPTION ALWAYS
					key: crypto.randomUUID(),
					navbarDisplayIcon: CodeBlockIcon,
					dropdownOptions: [
						{
							key: crypto.randomUUID(),
							parentWindowID: 'Velvet.dev',
							titleText: 'About Velvet.dev',
							onClickAction: () => {
								console.log({
									tgt: 'Velvet.dev -> About Velvet.dev -> Open()',
								});
								openWindowByID(devsktopWindow.id);
							},
							displayMenuBreakAfter: true,
						},
						{
							key: crypto.randomUUID(),
							parentWindowID: 'Velvet.dev',
							titleText: 'Site Settings...',
							onClickAction: () => {
								console.log({ tgt: 'Velvet.dev -> Site Settings -> Open()' });
							},
							displayMenuBreakAfter: true,
						}, //? PROJECTS START
						{
							key: crypto.randomUUID(),
							parentWindowID: solvedokuWindow.id,
							titleText: solvedokuWindow.title,
							onClickAction: () => {
								console.log({ tgt: 'Velvet.dev -> Solvedoku -> Open()' });
								openWindowByID(solvedokuWindow.id);
							},
							displaySectionHeader: 'Projects',
						},
					],
				}, //? SPREAD FOCUSED WINDOW MENU ITEMS...
				...focusedWindow.navBarMenuItems,
			];
		}, [focusedWindow, openWindowByID, solvedokuWindow, devsktopWindow]);

	return {
		devsktopWindow,
		solvedokuWindow,
		focusedWindow,
		openWindowIDs,
		navBarMenuItems,
		focusWindowByID,
		closeWindowByID,
		openWindowByID,
		...props,
	};
}
