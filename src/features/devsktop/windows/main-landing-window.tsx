import { LandingPageIntro } from '../components';

/**
 * MainLandingWindow Component
 *
 * The primary window component for the devsktop application's main landing page.
 * This component serves as a wrapper that renders the LandingPageIntro component,
 * providing the core entry point for users visiting the devsktop interface.
 *
 * Features:
 * - Renders the main landing page introduction content
 * - Serves as the root component for the devsktop landing experience
 * - Provides a clean, focused entry point for the application
 *
 * The component acts as a simple container that delegates the main content
 * rendering to the LandingPageIntro component, maintaining separation of
 * concerns and component composition patterns.
 *
 * @component
 */
export function MainLandingWindow() {
	return <LandingPageIntro />;
}
