import { useCallback, useState } from 'react';
import { useRPSSketchState } from '../rps/use-rps-sketch-state';
import type { NavBarMenuParent, WindowIDs, RPSWindowState } from '../../types';
import { GH_NEW_ISSUES, MAILTO } from '../../consts/urls';

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
export function useRPSSketchWindow(): RPSWindowState {
	const windowID: WindowIDs = 'rps-sketch-window';
	const title = 'Rock, Paper, Scissors';
	const [zIndex, setZIndex] = useState('0');
	const [isFocused, setIsFocused] = useState(false);
	const [isShown, setIsShown] = useState(false);
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
							key: 'show-rps-window',
							titleText: 'Show Rock, Paper, Scissors Window',
							isDisabled: isFocused && isShown,
							hoverExplainer:
								'Show or focus the Rock, Paper, Scissors window on top of the devsktop',
							onClickAction: () => {
								openWindowByID('rps-sketch-window');
							},
							displayMenuBreakAfter: true,
						},
						{
							key: 'rps-settings',
							titleText: 'Settings',
							isDisabled: !sketchState.sketchIsInitialized,
							hoverExplainer:
								'Open the Rock, Paper, Scissors sketch settings menu',
							onClickAction: () => {
								sketchState.setSketchIsPaused(true);
								setShowSettingsMenu(true);
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
							hoverExplainer:
								'Create an entirely new game, returning to the initialization menu',
							isDisabled:
								(!sketchState.sketchIsInitialized && isShown) || isShown,
							onClickAction: () => {
								if (!isShown) openWindowByID('rps-sketch-window');
								closeWindowCallback();
							},
							displayMenuBreakAfter: true,
						},
						{
							key: 'reset-game',
							titleText: 'Reset Game',
							hoverExplainer: 'Reset the game with the current settings',
							isDisabled: !sketchState.sketchIsInitialized || !isShown,
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
							hoverExplainer:
								sketchState.sketchIsPaused ?
									'Resumes the current game'
								:	'Pauses the current game',
							isDisabled: !sketchState.sketchIsInitialized || !isShown,
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
							hoverExplainer: 'Select the traditional hand sprite charcter set',
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
							hoverExplainer: 'Select the pictogram sprite charcter set',
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
							hoverExplainer:
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
							hoverExplainer:
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
							hoverExplainer:
								'Adjust the number of sprites in the sketch to 15',
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
							hoverExplainer:
								'Adjust the number of sprites in the sketch to 30',
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
							hoverExplainer:
								'Adjust the number of sprites in the sketch to 45',
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
							hoverExplainer:
								'Adjust the number of sprites in the sketch to 60',
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
							key: 'contact',
							titleText: 'Contact',
							hoverExplainer: 'Send @horaciovelvetine an email',
							onClickAction: () => {
								window.open(MAILTO);
							},
							displayMenuBreakAfter: true,
						},
						{
							key: 'rps-help',
							titleText: 'Rock, Paper, Scissors Help',
							hoverExplainer: 'Open the Rock, Paper, Scissors help window',
							onClickAction: () => {
								if (!isShown) openWindowByID('rps-sketch-window');
								if (!sketchState.sketchIsInitialized) {
									// 'initialize' the sketch before showing the menu
									sketchState.setSketchIsInitialized(Date.now());
								}
								sketchState.setSketchIsPaused(true);
								setShowAboutMenu(prev => !prev);
							},
							displayMenuBreakAfter: true,
						},
						{
							key: 'submit-issue',
							titleText: 'Submit Github Issue',
							hoverExplainer: 'Let me know about any issues on the site',
							onClickAction: () => {
								window.open(GH_NEW_ISSUES, '_blank');
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
		isFocused,
		setIsFocused,
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
