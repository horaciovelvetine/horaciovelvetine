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
		<div className='min-h-screen px-4 py-6 sm:px-6 lg:px-8'>
			<div className='mx-auto max-w-6xl'>
				<div className='overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950/92 shadow-2xl shadow-black/30'>
					{/* Header */}
					<div className='flex items-center space-x-2 border-b border-white/8 bg-white/[0.03] px-3 py-2 sm:px-4 sm:py-3'>
						<div className='ml-2 text-base leading-relaxed text-stone-400 sm:ml-4 sm:text-lg md:text-xl'>
							contact
						</div>
					</div>

					{/* Content */}
					<div className='p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10'>
						<div className='flex flex-col space-y-1.5 overflow-auto text-xs sm:text-sm md:text-base lg:text-lg'>
							<ContactContent
								className='overflow-hidden'
								showAdditionalInfo={true}
							/>
							{/* Breadcrumb footer */}
							<div className='pt-3 sm:mt-6 sm:pt-4 border-t border-white/8'>
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
