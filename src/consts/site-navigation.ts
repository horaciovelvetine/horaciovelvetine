import type { SiteRoute } from '../types';

/**
 * Site navigation configuration for the application
 *
 * Defines the primary navigation menu items displayed in the site header and mobile menu.
 * Each route includes a display title and URL path for consistent navigation across
 * the application. Used by the root component to render navigation links and enable
 * client-side routing through TanStack Router.
 *
 * @constant {SiteRoute[]} SiteNavigation - Array of navigation route objects
 */
export const SiteNavigation: SiteRoute[] = [
	{ title: 'Home', href: '/' },
	{ title: 'About', href: '/about' },
	{ title: 'Projects', href: '/projects' },
	{ title: 'Writing', href: '/writing' },
	{ title: 'Contact', href: '/contact' },
];
