
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from '../routeTree.gen.ts';


import { DevsktopMain } from '../features/devsktop';
import { useSiteSettings, useWindowManager } from '../hooks/site';

declare module '@tanstack/react-router' {
	interface Register {
		router: ReturnType<typeof createRouter<typeof routeTree>>;
	}
}

export function SiteMain() {
	const siteSettings = useSiteSettings();
	const windowManager = useWindowManager();

	//? Instantiate in component to ensure updated state access...
	const router = createRouter({
		routeTree,
		context: {
			siteSettings,
			windowManager,
		},
	});

	return (
		<>
			{siteSettings.useMobileCompatability ?
				<RouterProvider
					router={router}
					context={{ siteSettings, windowManager }}
				/>
				: <DevsktopMain
					siteSettings={siteSettings}
					windowManager={windowManager}
				/>
			}
		</>
	);
}
