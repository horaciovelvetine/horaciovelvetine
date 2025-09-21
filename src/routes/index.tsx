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
		<div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-2 sm:p-4 md:p-6 lg:p-8'>
			<div className='max-w-7xl mx-auto'>
				<div className='bg-gray-900/95 backdrop-blur-sm rounded-xl border border-gray-600/50 shadow-2xl shadow-black/20 overflow-hidden'>

					{/* Main Content */}
					<div className='p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10'>
						<div className='flex flex-col text-sm sm:text-base md:text-lg space-y-1 sm:space-y-2 overflow-hidden'>
							<LandingPageIntro />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
