import { useCallback, useState } from 'react';
import type { ManagedWindow, NavBarMenuParent } from '../../types';

export function useAboutWindow(): ManagedWindow {
  const windowID = 'about-window';
  const title = 'About';
  const [zIndex, setZIndex] = useState('0');
  const [isFocused, setIsFocused] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const closeWindowCallback = useCallback(() => {
    // no cleanup needed
  }, []);

  const navBarMenuItems = useCallback(
    (): NavBarMenuParent[] => {
      return [
        {
          key: 'about',
          isAppTitledDisplayText: true,
          displayText: '@horaciovelvetine',
          dropdownOptions: [
          ],
        },
      ];
    },
    []
  );

  return {
    id: windowID,
    title,
    zIndex,
    setZIndex,
    isFocused,
    setIsFocused,
    isShown,
    setIsShown,
    closeWindowCallback,
    navBarMenuItems
  };
}
