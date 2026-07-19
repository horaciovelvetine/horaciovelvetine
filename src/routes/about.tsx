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
		<div className='min-h-screen px-4 py-6 sm:px-6 lg:px-8'>
			<div className='mx-auto max-w-6xl'>
				<div className='flex flex-col overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950/92 shadow-2xl shadow-black/30'>
					{/* Header */}
					<div className='flex items-center space-x-2 border-b border-white/8 bg-white/[0.03] px-4 py-3'>
						<div className='ml-4 text-lg leading-relaxed text-stone-400 sm:text-xl'>
							about
						</div>
					</div>

					{/* Main Code Content */}
					<div className='flex-1 overflow-auto'>
						<div className='p-4 sm:p-6 lg:p-8 xl:p-10'>
							<AboutContent
								showDocComment={true}
								textSize='text-sm sm:text-base'
								spacing='space-y-5'
							/>
						</div>
					</div>

					{/* Breadcrumb Footer */}
					<div className='bg-white/[0.02] px-4 py-4 sm:px-6 lg:px-8 xl:px-10'>
						<CodeLine>
							<div className='flex flex-wrap items-center gap-2 text-xs text-gray-500 sm:text-sm'>
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
