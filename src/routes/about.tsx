import { createFileRoute, Link } from '@tanstack/react-router';
import {
	CloseBracket,
	CodeClass,
	CodeComment,
	CodeKeyword,
	CodeLine,
	CodeParameter,
	CodeProperty,
	CodePropertyLine,
	CodeSpace,
	CodeText,
	OpenBracket,
} from '../features/devsktop';
import { ABOUT_DATA } from '../consts/about-data';

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
							<div className='flex flex-col text-sm sm:text-base md:text-lg font-mono space-y-1 sm:space-y-2'>
								{/* Multi-line doc comment */}
								<div className='mb-4 rounded-lg p-4 sm:p-6 lg:p-8 border-l-4 border-emerald-500/30 w-full min-w-130'>
									<CodeLine>
										<CodeComment text='/**' />
									</CodeLine>
									<CodeLine>
										<CodeComment text=' * Represents a James object - a full-stack developer entity with comprehensive technical capabilities and creative vision.' />
									</CodeLine>
									<CodeLine>
										<CodeComment text=' * This class encapsulates the core attributes and behaviors of a modern software engineer, including technical' />
									</CodeLine>
									<CodeLine>
										<CodeComment text=' * skills, creative tools, and professional location data.' />
									</CodeLine>
									<CodeLine>
										<CodeComment text=' * ' />
									</CodeLine>
									<CodeLine>
										<CodeComment text=' * @constructor Creates a new Developer instance with essential coding fuel, debugging capabilities, and a passion for innovation' />
									</CodeLine>
									<CodeLine>
										<CodeComment text=' * ' />
									</CodeLine>
									<CodeLine>
										<CodeComment text=' * @param {string} dietCoke - Essential fuel for coding, and creative problem-solving' />
									</CodeLine>
									<CodeLine>
										<CodeComment text=' * ' />
									</CodeLine>
									<CodeLine>
										<CodeComment text=' * @returns {Developer} A fully initialized developer instance ready for action, problem-solving, innovation, and building amazing experiences' />
									</CodeLine>
									<CodeLine>
										<CodeComment text=' * ' />
									</CodeLine>
									<CodeLine>
										<CodeComment text=' * @since 2020 - Continuously evolving with new technologies, frameworks, development methodologies, and industry best practices' />
									</CodeLine>
									<CodeLine>
										<CodeComment text=' */' />
									</CodeLine>
								</div>

								{/* Class declaration */}
								<CodeLine>
									<CodeKeyword text='class' />
									<CodeSpace />
									<CodeClass text='Developer' />
									<CodeSpace />
									<OpenBracket />
								</CodeLine>

								{/* Constructor */}
								<div className='my-2'>
									<CodeLine indent={1}>
										<CodeKeyword text='constructor' />
										<CodeText text='(' />
										<CodeParameter text='dietCoke' />
										<CodeText text=') ' />
										<OpenBracket />
									</CodeLine>

									{/* Properties */}
									{Object.entries(ABOUT_DATA).map(([key, value]) => (
										<CodePropertyLine
											key={key}
											property={key}
											value={value}
										/>
									))}

									{/* Close constructor */}
									<CodeLine indent={1}>
										<CloseBracket />
									</CodeLine>
								</div>

								{/* Close class */}
								<CodeLine>
									<CloseBracket />
								</CodeLine>
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
