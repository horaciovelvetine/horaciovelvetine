import { SimpleInlineLink } from '../../../../components';
import { GITHUB } from '../../../../consts/urls';
import { PROJECT_CONTENT } from '../../../../consts/site-content';

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
	const project = PROJECT_CONTENT.theWikiverse;

	return (
		<header className='mb-4'>
			<h1 className='mb-4 text-balance text-4xl font-bold text-white md:text-5xl lg:text-6xl'>
				{project.name}
			</h1>
			<div className='mb-6 flex flex-wrap items-center gap-4'>
				<div className='flex items-center space-x-2'>
					<div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
					<span className='text-sm xs:text-base sm:text-lg md:text-xl text-gray-400 uppercase tracking-wider'>
						{project.status}
					</span>
				</div>
				<span className='text-sm xs:text-base sm:text-lg md:text-xl text-gray-400'>
					{project.projectType}
				</span>
				<span className='text-sm xs:text-base sm:text-lg md:text-xl text-gray-500'>
					{project.timeline}
				</span>
			</div>

			<div className='flex flex-col gap-2'>
				<h3 className='text-xl font-semibold tracking-tight text-stone-300/75 sm:text-2xl'>
					Project Links
				</h3>
				<div className='flex flex-wrap gap-2 text-base font-semibold sm:text-lg'>
					<SimpleInlineLink
						text='GitHub Profile'
						href={GITHUB}
						showArrow
					/>
				</div>
			</div>
		</header>
	);
}
