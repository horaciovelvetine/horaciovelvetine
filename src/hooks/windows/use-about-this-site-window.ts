import { useState } from 'react';
import type {
  ManagedWindow,
} from '../../types';

export function useAboutThisSiteWindow(
  parentWindow: ManagedWindow
): ManagedWindow {
  const windowID = 'about-this-site-window';
  const title = 'About This Site';
  const [zIndex, setZIndex] = useState('0');
  const [isShown, setIsShown] = useState(false);

  return {
    id: windowID,
    title,
    zIndex,
    setZIndex,
    isShown,
    setIsShown,
    navBarMenuItems: parentWindow.navBarMenuItems,
  };
}
