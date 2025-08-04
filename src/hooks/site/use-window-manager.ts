import { useCallback, useMemo, useState } from 'react';
import { CodeBlockIcon } from '../../assets';
import type {
  WindowManager,
  ManagedWindow,
  SiteSettings,
  NavBarMenuParent,
} from '../../types';

import {
  useDevsktopLandingWindow,
  useSolvedokuWindow,
  useAboutSolvedokuWindow,
  useAboutThisSiteWindow,
} from '../windows';

/**
 * Custom hook that manages window state and focus for the Devsktop application
 * Handles window opening/closing, focus changes, and z-index management
 * @param props - The site settings object containing configuration options
 * @returns A WindowManager object with window state and control functions
 */
export function useWindowManager(props: SiteSettings): WindowManager {
  const [focusedWindowID, setFocusedWindowID] =
    useState<string>('solvedoku-window');
  const [openWindowIDs, setOpenWindowIDs] = useState<string[]>([
    'solvedoku-window',
  ]);

  //? INITIALIZE ALL WINDOWS
  const devsktopWindow = useDevsktopLandingWindow(props);
  const aboutThisSiteWindow = useAboutThisSiteWindow(props, devsktopWindow);
  // Solvedoku Windows...
  const solvedokuWindow = useSolvedokuWindow(props);
  const aboutSolvedokuWindow = useAboutSolvedokuWindow(props, solvedokuWindow);

  const ALL_WINDOWS: ManagedWindow[] = useMemo(
    () => [
      devsktopWindow,
      aboutThisSiteWindow,
      solvedokuWindow,
      aboutSolvedokuWindow,
    ],
    [aboutSolvedokuWindow, aboutThisSiteWindow, devsktopWindow, solvedokuWindow]
  );

  /**
   * The current {@see ManagedWindow } which the user is currently (clicked) focused on.
   */
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

  /**
   * The navBarMenu which is included with every menu as the first icon in the upper left hand of the 'devsktop'
   */
  const siteMenu: NavBarMenuParent = useMemo(
    () => ({
      key: 'site-menu',
      navbarDisplayIcon: CodeBlockIcon,
      dropdownOptions: [
        {
          key: 'landing-page',
          parentWindowID: 'velvet.dev',
          titleText: 'Home',
          onClickAction: () => {
            openWindowByID('devsktop-landing-window');
          },
        },
        {
          key: 'about-this-site',
          parentWindowID: 'Velvet.dev',
          titleText: 'About This Site',
          onClickAction: () => {
            openWindowByID('about-this-site-window');
          },
          displayMenuBreakAfter: true,
        },
        {
          key: 'site-settings',
          parentWindowID: 'Velvet.dev',
          titleText: 'Site Settings...',
          onClickAction: () => {
            console.log({ tgt: 'Velvet.dev -> Site Settings -> Open()' });
          },
          displayMenuBreakAfter: true,
        }, //? PROJECTS START
        {
          key: 'solvedoku-project',
          parentWindowID: 'solvedoku-window',
          titleText: 'Solvedoku',
          onClickAction: () => {
            openWindowByID('solvedoku-window');
          },
          displaySectionHeader: 'Projects',
        },
      ],
    }),
    [openWindowByID]
  );

  const navBarMenuItems: NavBarMenuParent[] =
    useMemo((): NavBarMenuParent[] => {
      return [siteMenu, ...focusedWindow.navBarMenuItems(openWindowByID)];
    }, [siteMenu, focusedWindow, openWindowByID]);

  return {
    devsktopWindow,
    aboutThisSiteWindow,
    solvedokuWindow,
    aboutSolvedokuWindow,
    focusedWindow,
    openWindowIDs,
    navBarMenuItems,
    focusWindowByID,
    closeWindowByID,
    openWindowByID,
  };
}
