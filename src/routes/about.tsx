import { createFileRoute, Link } from '@tanstack/react-router';
import {
	CodeComment,
	CodeLine,
	CodeProperty,
	CodeText,
	AboutContent,
} from '../features/devsktop';

export const Route = createFileRoute('/about')({
	component: MobileAboutPage,
});

/**
 * Main component for the About page that displays developer information in a code editor theme
 *
 * Renders a mobile-friendly about page with a simulated code editor interface showing
 * developer data including location, skills, and contact information. The component uses
 * a dark theme with syntax highlighting colors to create an immersive coding experience.
 *
 * @component
 */

function MobileAboutPage() {
	return (
		<div className='min-h-screen  p-4 sm:p-6 lg:p-8'>
			<div className='max-w-7xl mx-auto'>
				<div className='bg-gray-900/90 backdrop-blur-sm font-mono rounded-xl border border-gray-600/50 shadow-2xl shadow-black/20 overflow-hidden flex flex-col'>
					{/* Header */}
					<div className='bg-gray-800/80 border-b border-gray-600/50 px-4 py-3 flex items-center space-x-2'>
						<div className='text-gray-400 text-lg sm:text-xl leading-relaxed ml-4'>
							about
						</div>
					</div>

					{/* Main Code Content */}
					<div className='flex-1 overflow-auto'>
						<div className='p-4 sm:p-6 lg:p-8 xl:p-10'>
							<div className='overflow-x-auto'>
								<AboutContent
									className='min-w-max'
									showDocComment={true}
									textSize='text-sm sm:text-base md:text-lg'
									spacing='space-y-1 sm:space-y-2'
								/>
							</div>
						</div>
					</div>

					{/* Breadcrumb Footer */}
					<div className='px-4 sm:px-6 lg:px-8 xl:px-10 py-4 border-t border-gray-600/30 bg-gray-900/90'>
						<CodeLine>
							<div className='flex items-center gap-2 text-xs sm:text-sm text-gray-500'>
								<CodeComment text='//' />
								<CodeComment text='Navigation:' />
								<CodeText text='/' />
								<Link to='/'>
									<CodeProperty text='home' />
								</Link>
								<CodeText text=' → ' />
								<Link to='/about'>
									<CodeProperty text='about' />
								</Link>
							</div>
						</CodeLine>
					</div>
				</div>
			</div>
		</div>
	);
}
