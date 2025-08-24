import type { Dispatch, RefObject, SetStateAction } from 'react';

/**
 * Handles clicks outside of a referenced element by setting a show/hide state to false
 * @param event - The mouse event that triggered the handler
 * @param ref - React ref object containing the element to check against
 * @param setShowState - React state setter function to update visibility state
 * @param showState - React state for early rescue to ignore if the menu is already closed
 */

export function unfocusedClickHandler(
	event: MouseEvent,
	ref: RefObject<HTMLElement | null>,
	setShowState: Dispatch<SetStateAction<boolean>>,
	showState: boolean
) {
	if (!showState) return;
	if (ref.current && !ref.current.contains(event.target as Node)) {
		setShowState(false);
	}
}
