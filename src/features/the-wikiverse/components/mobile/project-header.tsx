import { SimpleInlineLink } from '../../../../components';
import { GITHUB } from '../../../../consts/urls';

/**
 * Project Header Component
 *
 * A hero header component for The Wikiverse project page that displays the project
 * title, development status, project type, and external project links. Features a
 * prominent title with responsive typography, visual status indicators, and convenient
 * access to project repositories to provide comprehensive project information at a glance.
 *
 * Features:
 * - Large responsive title with scaling typography across breakpoints
 * - Development status indicator with animated pulse dot for visual feedback
 * - Project type designation clearly labeled beneath the status
 * - Project links section with frontend and backend repository access
 * - SimpleInlineLink components with arrow indicators for external navigation
 * - Centered layout with consistent spacing for visual hierarchy
 * - Mobile-optimized responsive design with multiple breakpoint considerations
 * - Consistent styling with project page theme using gray/white color palette
 *
 * The component serves as the main header for project showcase pages and provides
 * immediate context about the project's name, current development status,
 * classification, and quick access to source code repositories. The animated status
 * indicator helps draw attention to the project's active development state while
 * the project links facilitate easy navigation to the codebase.
 *
 * @component
 */
export function ProjectHeader() {
	return (
		<header className='mb-4'>
			<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white text-center'>
				The Wikiverse
			</h1>
			<div className='flex flex-col items-center space-x-4 mb-6'>
				<div className='flex items-center space-x-2'>
					<div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
					<span className='text-sm xs:text-base sm:text-lg md:text-xl text-gray-400 uppercase tracking-wider'>
						In Development
					</span>
				</div>
				<span className='text-sm xs:text-base sm:text-lg md:text-xl text-gray-400'>
					Data Visualization Project
				</span>
			</div>

			<div className='flex flex-col w-full items-center justify-center'>
				<h3 className='text-xl sm:text-2xl tracking-tighter font-semibold text-stone-300/75'>
					Project Links
				</h3>
				<div className='flex gap-2 text-base sm:text-lg font-semibold'>
					<SimpleInlineLink
						text='Frontend'
						href={GITHUB}
						showArrow
					/>
					<span className='text-stone-300/50'> | </span>
					<SimpleInlineLink
						text='Backend'
						href={GITHUB}
						showArrow
					/>
				</div>
			</div>
		</header>
	);
}
