import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from '../routeTree.gen.ts';

import { DevsktopMain } from '../features/devsktop';
import { useSiteSettings } from '../hooks/site';

declare module '@tanstack/react-router' {
	interface Register {
		router: ReturnType<typeof createRouter<typeof routeTree>>;
	}
}

/**
 * Main site component that handles routing and desktop/mobile compatibility
 *
 * This component serves as the primary entry point for the application, managing the
 * conditional rendering between mobile-compatible routing and desktop-style interface.
 * It creates and configures the TanStack router with site settings context, enabling
 * different user experiences based on device compatibility preferences.
 *
 * Features:
 * - Dynamic router instantiation with updated site settings context
 * - Conditional rendering based on mobile compatibility settings
 * - Integration with DevsktopMain for desktop-style interface
 * - RouterProvider setup for mobile-compatible routing
 *
 * The component uses the useSiteSettings hook to determine user preferences and
 * configures the appropriate interface accordingly. When mobile compatibility is
 * enabled, it renders a standard router-based navigation system. Otherwise, it
 * displays the desktop-style windowed interface managed by DevsktopMain.
 */
export function SiteMain() {
	const siteSettings = useSiteSettings();

	//? Instantiate in component to ensure updated state access...
	const router = createRouter({
		routeTree,
		context: {
			siteSettings,
		},
	});

	return (
		<>
			{siteSettings.useMobileCompatability ?
				<RouterProvider
					router={router}
					context={{ siteSettings }}
				/>
			:	<DevsktopMain siteSettings={siteSettings} />}
		</>
	);
}
