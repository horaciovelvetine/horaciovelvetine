import { useState } from 'react';
import type { ManagedWindow, SolvedokuGameState, Position, SiteSettings } from '../../types';
import { setInitialWindowPosition } from '../../functions/site/set-initial-window-position';
import { useSolvedokuGameState } from './use-solvedoku-game-state';

export function useSolvedokuWindow(props: SiteSettings): ManagedWindow & SolvedokuGameState {
	const windowID = 'solvedoku-window'
	const [position, setPosition] = useState<Position>(() => setInitialWindowPosition(props));
	const [zIndex, setZIndex] = useState('0')
	const solvedokuState = useSolvedokuGameState();

	return {
		id: windowID,
		title: 'Solvedoku',
		position,
		setPosition,
		zIndex,
		setZIndex,
		...solvedokuState
	};
}
