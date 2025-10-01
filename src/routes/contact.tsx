import { createFileRoute, Link } from '@tanstack/react-router';
import {
	CodeComment,
	CodeLine,
	CodeProperty,
	CodeText,
	ContactContent,
} from '../features/devsktop';

export const Route = createFileRoute('/contact')({
	component: MobileContactPage,
});

/**
 * Mobile Contact Page Component
 *
 * A contact page that displays contact information in a code editor theme.
 * This component follows the same design pattern as the about and projects pages,
 * featuring a simulated code editor interface with syntax highlighting.
 *
 * Features:
 * - Code editor themed interface matching site design
 * - Contact information displayed as JavaScript object properties
 * - Clickable links for email, GitHub, and LinkedIn
 * - Responsive layout optimized for mobile and desktop viewing
 * - Consistent styling with about and projects pages
 *
 * @component
 */
function MobileContactPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-2 sm:p-4 lg:p-8'>
			<div className='max-w-7xl mx-auto'>
				<div className='bg-gray-900/95 backdrop-blur-sm font-mono rounded-lg sm:rounded-xl border border-gray-600/50 shadow-2xl shadow-black/20 overflow-hidden'>
					{/* Header */}
					<div className='bg-gray-800/80 border-b border-gray-600/50 px-3 py-2 sm:px-4 sm:py-3 flex items-center space-x-2'>
						<div className='text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed ml-2 sm:ml-4'>
							contact
						</div>
					</div>

					{/* Content */}
					<div className='p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10'>
						<div className='flex flex-col text-xs sm:text-sm md:text-base lg:text-lg font-mono space-y-1.5 sm:space-y-2 overflow-auto'>
							<ContactContent
								className='rounded-xl overflow-hidden'
								showAdditionalInfo={true}
							/>
							{/* Breadcrumb footer */}
							<div className='sm:mt-6 pt-3 sm:pt-4 border-t border-gray-600/30'>
								<CodeLine>
									<div className='flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500 flex-wrap'>
										<CodeComment text='//' />
										<CodeComment text='Navigation:' />
										<CodeText text='/' />
										<Link
											to='/'
											className='hover:text-gray-300 transition-colors'>
											<CodeProperty text='home' />
										</Link>
										<CodeText text=' → ' />
										<Link
											to='/contact'
											className='hover:text-gray-300 transition-colors'>
											<CodeProperty text='contact' />
										</Link>
									</div>
								</CodeLine>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
