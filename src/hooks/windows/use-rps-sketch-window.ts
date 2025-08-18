import { useCallback, useState } from 'react';
import { useRPSSketchState } from '../rps/use-rps-sketch-state';
import type { NavBarMenuParent, WindowIDs, RPSWindowState } from '../../types';

/**
 * Custom hook for managing the Rock, Paper, Scissors sketch window state and functionality
 *
 * Provides comprehensive window management for the Rock, Paper, Scissors application, including
 * window display state, menu controls, navigation bar items, and integration with
 * the underlying RPS sketch state. Handles all window-specific interactions
 * and provides callbacks for sketch actions like creating new sketches and managing
 * settings menus.
 *
 * @returns {RPSWindowState} Complete window state object containing:
 *   - Basic window management (show/hide, z-index, title, etc.)
 *   - Menu state controls (settings, about menus)
 *   - Navigation bar menu configuration
 *   - Integrated RPS sketch state and controls
 */
export function useRPSSketchWindow(focusedWindowID: string): RPSWindowState {
	const windowID = 'rps-sketch-window';
	const title = 'Rock, Paper, Scissors';
	const [zIndex, setZIndex] = useState('0');
	const [isShown, setIsShown] = useState(() => {
		return windowID === focusedWindowID;
	});
	const sketchState = useRPSSketchState();

	const [showSettingsMenu, setShowSettingsMenu] = useState(false);
	const [showAboutMenu, setShowAboutMenu] = useState(false);
	const [showGameMenu, setShowGameMenu] = useState(false);

	/**
	 * Clean up menu's when window is closed
	 */
	const closeWindowCallback = useCallback(() => {
		setShowSettingsMenu(false);
		setShowAboutMenu(false);
		setShowGameMenu(false);
		sketchState.closeSketchCallback();
	}, [sketchState]);

	const navBarMenuItems = useCallback(
		(openWindowByID: (windowID: WindowIDs) => void): NavBarMenuParent[] => {
			return [
				{
					key: 'rps-menu',
					displayText: 'Rock, Paper, Scissors',
					isAppTitledDisplayText: true,
					dropdownOptions: [
						{
							key: 'rps-settings',
							titleText: 'Settings',
							onClickAction: () => {
								setShowSettingsMenu(true);
							},
							displayMenuBreakAfter: true,
						},
						{
							key: 'rps-about',
							titleText: 'About Rock, Paper, Scissors',
							onClickAction: () => {
								setShowAboutMenu(prev => !prev);
							},
						},
					],
				},
				{
					key: 'file-menu',
					displayText: 'File',
					dropdownOptions: [
						{
							key: 'new-sketch',
							titleText: 'New Sketch',
							hoverExplainerTitle: 'Reset the sketch and keep it paused.',
							onClickAction: () => {
								if (!isShown) openWindowByID('rps-sketch-window');
								sketchState.setResetRequested(true);
							},
							displayMenuBreakAfter: true,
						},
					],
				},
				{
					key: 'help-menu',
					displayText: 'Help',
					dropdownOptions: [
						{
							key: 'rps-help',
							titleText: 'Rock, Paper, Scissors Help',
							hoverExplainerTitle: 'Open the Rock, Paper, Scissors help window',
							onClickAction: () => {
								setShowAboutMenu(prev => !prev);
							},
						},
					],
				},
			];
		},
		[isShown, sketchState]
	);

	return {
		id: windowID,
		title,
		zIndex,
		setZIndex,
		isShown,
		setIsShown,
		navBarMenuItems,
		showAboutMenu,
		setShowAboutMenu,
		showSettingsMenu,
		setShowSettingsMenu,
		showGameMenu,
		setShowGameMenu,
		closeWindowCallback,
		...sketchState,
	};
}
