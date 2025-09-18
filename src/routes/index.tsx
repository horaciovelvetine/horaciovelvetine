import { createFileRoute } from '@tanstack/react-router';
import { LandingPageIntro } from '../features/devsktop/components';

// root/index.tsx
export const Route = createFileRoute('/')({
	component: MobileHomePage,
});

/**
 * Mobile Home Page Component
 *
 * The main landing page component that provides an overview of the developer's skills,
 * projects, and contact information. Features a responsive design optimized for mobile-first
 * viewing with sections for introduction, skills showcase, and featured projects.
 *
 * The component includes:
 * - Landing page introduction with social media links (GitHub, LinkedIn)
 *
 * Uses a card-based layout with glass morphism effects, gradient backgrounds,
 * and hover animations for an engaging user experience.
 *
 * @component
 */
function MobileHomePage() {
	return (
		<div className='flex flex-col items-center gap-2 mx-0.5 sm:mx-1 md:mx-2 my-2'>
			<div className='bg-stone-900/60 py-3 rounded-xl max-w-[768px] border border-stone-300/15 drop-shadow-2xl'>
				<LandingPageIntro />
			</div>
		</div>
	);
}
