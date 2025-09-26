/**
 * Union type representing all valid window identifiers in the application
 *
 * Defines the complete set of unique window IDs that can be used throughout
 * the application for window management, navigation, and state tracking.
 * Each ID corresponds to a specific window or modal component that can be
 * opened, closed, or focused within the application.
 *
 * @type {string}
 */
export type WindowIDs =
	| 'main-landing-window'
	| 'solvedoku-window'
	| 'about-this-site-window'
	| 'rps-sketch-window'
	| 'writing-window'
	| 'about-window'
	| 'contact-window';
