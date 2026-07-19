import { createFileRoute } from '@tanstack/react-router';
import {
	LandingPageContent
} from '../features/devsktop/components';

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
		<div className='min-h-screen px-4 py-6 sm:px-6 lg:px-8'>
			<div className='mx-auto max-w-6xl'>
				<div className='overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950/92 shadow-2xl shadow-black/30'>
					<div className='p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10'>
						<div className='flex flex-col overflow-hidden text-sm sm:text-base md:text-lg'>
							<LandingPageContent />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
