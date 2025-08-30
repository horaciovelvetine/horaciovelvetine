import {
  useEffect,
  type Dispatch,
  type RefObject,
  type SetStateAction,
} from 'react';

/**
 * Custom hook that handles clicks outside of a referenced element
 * Automatically sets up and cleans up the event listener
 *
 * @param ref - React ref object containing the element to check against
 * @param setShowState - React state setter function to update visibility state
 * @param showState - React state for early rescue to ignore if the menu is already closed
 */
export function useUnfocusedClickListener(
  ref: RefObject<HTMLElement | null>,
  setShowState: Dispatch<SetStateAction<boolean>>,
  showState: boolean
) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const clickHandler = (event: MouseEvent) => {
      if (!showState) return;
      if (!element.contains(event.target as Node)) {
        setShowState(false);
      }
    };

    document.addEventListener('mousedown', clickHandler);

    return () => {
      document.removeEventListener('mousedown', clickHandler);
    };
  }, [ref, setShowState, showState]);
}
