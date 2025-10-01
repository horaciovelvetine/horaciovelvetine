import { Link } from '@tanstack/react-router';

/**
 * Project Breadcrumb Footer Component
 *
 * Displays a navigation breadcrumb footer for The Wikiverse project page.
 * This component provides a visual navigation trail showing the user's
 * current location within the site hierarchy.
 *
 * The breadcrumb navigation includes:
 * - Home page link (/)
 * - Projects section link (/projects)
 * - Current project page (the-wikiverse)
 *
 * Features:
 * - Clean, minimal design with developer-friendly styling
 * - Hover effects on all interactive elements
 * - Responsive text sizing (text-xs on mobile, text-sm on larger screens)
 * - Consistent color scheme using gray tones and blue accent for links
 * - Arrow separators between navigation levels
 * - Top border separator to distinguish from main content
 * - Responsive navigation text that abbreviates on small screens for better fit
 *
 * The component uses React Router's Link component for client-side navigation
 * and includes smooth transition effects for improved user experience.
 *
 * @component
 */

export function ProjectBreadcrumbFooter() {
	return (
		<div className='mt-6 pt-4 border-t border-gray-600/30'>
			<div className='flex items-center gap-2 text-sm sm:text-base md:text-lg text-gray-500'>
				<span className='text-gray-500 hover:text-gray-400 transition-colors duration-200'>
					{'//'}
				</span>
				<span className='text-gray-500 hover:text-gray-400 transition-colors duration-200'>
					<span className='hidden sm:inline'>Navigation:</span>
					<span className='sm:hidden'>Nav:</span>
				</span>
				<span className='text-gray-100 hover:text-white transition-colors duration-200'>
					/
				</span>
				<Link to='/'>
					<span className='text-blue-400 hover:text-blue-300 transition-colors duration-200'>
						home
					</span>
				</Link>
				<span className='text-gray-100 hover:text-white transition-colors duration-200'>
					{' '}
					→{' '}
				</span>
				<Link to='/projects'>
					<span className='text-blue-400 hover:text-blue-300 transition-colors duration-200'>
						<span className='hidden sm:inline'>projects</span>
						<span className='sm:hidden'>proj</span>
					</span>
				</Link>
				<span className='text-gray-100 hover:text-white transition-colors duration-200'>
					{' '}
					→{' '}
				</span>
				<Link to='/projects/the-wikiverse'>
					<span className='text-blue-400 hover:text-blue-300 transition-colors duration-200'>
						<span className='hidden sm:inline'>the-wikiverse</span>
						<span className='sm:hidden'>wikiverse</span>
					</span>
				</Link>
			</div>
		</div>
	);
}
