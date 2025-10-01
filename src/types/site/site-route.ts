/**
 * Interface representing a site navigation route or page
 *
 * This interface defines the structure for site navigation items used in tanstack
 * to route pages the application, providing consistent typing for menu items, links,
 * and routing components. Each route contains essential navigation metadata including display
 * text and URL path information.
 *
 * @interface SiteRoute
 */

export interface SiteRoute {
	title: string;
	href: string;
}
