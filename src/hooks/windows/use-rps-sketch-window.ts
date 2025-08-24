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
							isDisabled: !sketchState.sketchIsInitialized,
							onClickAction: () => {
								sketchState.setSketchIsPaused(true);
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
							key: 'new-game',
							titleText: 'New Game',
							hoverExplainerTitle:
								'Create an entirely new game, returning to the initialization menu',
							isDisabled: !sketchState.sketchIsInitialized,
							onClickAction: () => {
								if (!isShown) openWindowByID('rps-sketch-window');
								closeWindowCallback();
							},
							displayMenuBreakAfter: true,
						},
						{
							key: 'reset-game',
							titleText: 'Reset Game',
							hoverExplainerTitle: 'Reset the game with the current settings',
							isDisabled: !sketchState.sketchIsInitialized,
							onClickAction: () => {
								if (!isShown) openWindowByID('rps-sketch-window');
								sketchState.setResetRequested(true);
							},
							displayMenuBreakAfter: true,
						},
						{
							key: 'pause-sketch',
							titleText:
								sketchState.sketchIsPaused ? 'Resume Game' : 'Pause Game',
							hoverExplainerTitle:
								sketchState.sketchIsPaused ?
									'Resumes the current game'
								:	'Pauses the current game',
							isDisabled: !sketchState.sketchIsInitialized,
							onClickAction: () => {
								if (!isShown) openWindowByID('rps-sketch-window');
								if (!sketchState.sketchIsInitialized) return;
								sketchState.setSketchIsPaused(prev => !prev);
							},
						},
					],
				},
				{
					key: 'edit-menu',
					displayText: 'Edit',
					dropdownOptions: [
						{
							key: 'sprite-set-1-select',
							titleText: '✌️ ✊ ✋',
							hoverExplainerTitle:
								'Select the traditional hand sprite charcter set',
							displaySectionHeader: 'Charcter Set Selection',
							isDisabled: !sketchState.sketchIsInitialized,
							onClickAction: () => {
								if (!isShown) openWindowByID('rps-sketch-window');
								sketchState.setSpriteChars(['✌️', '✊', '✋']);
							},
						},
						{
							key: 'sprite-set-1-select',
							titleText: '🪨 📄 ✂️',
							hoverExplainerTitle: 'Select the pictogram sprite charcter set',
							isDisabled: !sketchState.sketchIsInitialized,
							onClickAction: () => {
								if (!isShown) openWindowByID('rps-sketch-window');
								sketchState.setSpriteChars(['🪨', '📄', '✂️']);
							},
							displayMenuBreakAfter: true,
						},
						{
							key: 'toggle-bounds',
							titleText: (sketchState.showCollisionRadius ? 'Hide' : 'Show'
							).concat(' Collision Bounds'),
							displaySectionHeader: 'View Options',
							hoverExplainerTitle:
								'Show or Hide the radius used to detect collisions between sprites',
							isDisabled: !sketchState.sketchIsInitialized,
							onClickAction() {
								if (!isShown) openWindowByID('rps-sketch-window');
								sketchState.setShowCollisionRadius(prev => !prev);
							},
						},
						{
							key: 'toggle-velocity',
							titleText: (sketchState.showCollisionRadius ? 'Hide' : 'Show'
							).concat(' Velocity Indicator'),
							hoverExplainerTitle:
								'Show or Hide the Velocity and Heading indicator arrow',
							isDisabled: !sketchState.sketchIsInitialized,
							onClickAction() {
								if (!isShown) openWindowByID('rps-sketch-window');
								sketchState.setShowVelocityIndicators(prev => !prev);
							},
							displayMenuBreakAfter: true,
						},
						{
							key: 'adjust-sprite-count-some',
							displaySectionHeader: 'Change Sprite Count',
							titleText: 'Some',
							displayKeyboardShortcut: '(15)',
							isDisabled: !sketchState.sketchIsInitialized,
							onClickAction: () => {
								if (!isShown) openWindowByID('rps-sketch-window');
								sketchState.setSpriteCount('some');
							},
						},
						{
							key: 'adjust-sprite-count-more',
							titleText: 'More',
							displayKeyboardShortcut: '(30)',
							isDisabled: !sketchState.sketchIsInitialized,
							onClickAction: () => {
								if (!isShown) openWindowByID('rps-sketch-window');
								sketchState.setSpriteCount('more');
							},
						},
						{
							key: 'adjust-sprite-count-lots',
							titleText: 'Lots',
							displayKeyboardShortcut: '(45)',
							isDisabled: !sketchState.sketchIsInitialized,
							onClickAction: () => {
								if (!isShown) openWindowByID('rps-sketch-window');
								sketchState.setSpriteCount('lots');
							},
						},
						{
							key: 'adjust-sprite-count-lots!',
							titleText: 'Lots!',
							displayKeyboardShortcut: '(60)',
							isDisabled: !sketchState.sketchIsInitialized,
							onClickAction: () => {
								if (!isShown) openWindowByID('rps-sketch-window');
								sketchState.setSpriteCount('lots!');
							},
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
								if (!isShown) openWindowByID('rps-sketch-window');
								sketchState.setSketchIsPaused(true);
								setShowAboutMenu(prev => !prev);
							},
						},
					],
				},
			];
		},
		[closeWindowCallback, isShown, sketchState]
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
