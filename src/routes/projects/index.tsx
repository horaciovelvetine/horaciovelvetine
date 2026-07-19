import { createFileRoute, Link } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import { PROJECT_CONTENT } from '../../consts/site-content';

export const Route = createFileRoute('/projects/')({
	component: MobileProjectsPage,
});

const projectsData = [
	PROJECT_CONTENT.theWikiverse,
	PROJECT_CONTENT.solvedoku,
	PROJECT_CONTENT.rockPaperScissors,
];

/**
 * MobileProjectsPage Component
 *
 * A comprehensive projects listing page that displays available projects in a code editor theme.
 * This component serves as the main projects index page with project cards, technology badges,
 * and navigation to individual project pages.
 *
 * Features:
 * - Code editor themed interface matching site design
 * - Project cards with descriptions, technologies, and features
 * - Interactive navigation to individual project pages
 * - Technology badges with syntax highlighting
 * - Responsive layout optimized for mobile and desktop viewing
 * - Consistent styling with about and writing pages
 *
 * @component
 */
function MobileProjectsPage() {
	return (
		<div className='min-h-screen px-4 py-6 sm:px-6 lg:px-8'>
			<div className='mx-auto max-w-6xl'>
				<div className='overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950/92 shadow-2xl shadow-black/30'>
					{/* Header */}
					<div className='flex items-center space-x-2 border-b border-white/8 bg-white/[0.03] px-4 py-3'>
						<div className='ml-4 text-lg leading-relaxed text-stone-400 sm:text-xl'>
							projects
						</div>
					</div>

					{/* Code content */}
					<div className='p-4 sm:p-6 lg:p-8 xl:p-10'>
						<div className='flex flex-col space-y-4 text-sm sm:text-base md:text-lg'>
							<div className='max-w-3xl space-y-2'>
								<p className='text-xs font-semibold uppercase tracking-[0.3em] text-stone-500'>
									Selected Work
								</p>
								<h1 className='text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl'>
									Projects that mix engineering depth, playful interfaces, and visual experimentation.
								</h1>
							</div>
							{/* Projects grid */}
							<div className='grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6'>
								{projectsData.map(project => (
									<ProjectCard
										key={project.id}
										project={project}
									/>
								))}
							</div>

							{/* Breadcrumb footer */}
							<div className='mt-6 pt-4 border-t border-gray-600/30'>
								<CodeLine>
									<div className='flex flex-wrap items-center gap-2 text-xs text-gray-500 sm:text-sm'>
										<Comment text='//' />
										<Comment text='Navigation:' />
										<Text text='/' />
										<Link to='/'>
											<Property text='home' />
										</Link>
										<Text text=' → ' />
										<Link to='/projects'>
											<Property text='projects' />
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

/**
 * ProjectCard Component
 *
 * Renders an individual project as a visual card with modern styling.
 * Each project card includes description, technologies, features, and navigation.
 *
 * @param project - Project data object
 */
function ProjectCard({ project }: { project: (typeof projectsData)[0] }) {
	return (
		<Link
			to={project.route}
			className='group relative block overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-black/25'>
			{/* Card Header */}
			<div className='p-6 pb-4'>
				<div className='mb-3'>
					<h3 className='mb-2 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-stone-200'>
						{project.name}
					</h3>
					<div className='flex items-center space-x-2'>
						<div className='h-2 w-2 rounded-full bg-emerald-400 animate-pulse'></div>
						<span className='whitespace-nowrap text-xs uppercase tracking-wider text-stone-400'>
							{project.status}
						</span>
					</div>
				</div>

				<p className='mb-4 text-sm leading-relaxed text-stone-300 transition-colors duration-300 group-hover:text-stone-200'>
					{project.description}
				</p>
			</div>

			{/* Technologies */}
			<div className='px-6 pb-4'>
				<div className='flex flex-wrap gap-2 mb-4'>
					{project.technologies.map(tech => (
						<span
							key={tech}
							className='rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-xs font-medium text-stone-200 transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/[0.06]'>
							{tech}
						</span>
					))}
				</div>
			</div>

			{/* Features */}
			<div className='px-6 pb-6'>
				<div className='space-y-2'>
					{project.features.map(feature => (
						<div
							key={feature}
							className='flex items-start space-x-2'>
							<div className='mt-1.5 h-1.5 w-1.5 rounded-full bg-stone-400'></div>
							<span className='text-xs text-stone-400 transition-colors duration-300 group-hover:text-stone-300'>
								{feature}
							</span>
						</div>
					))}
				</div>
			</div>

			{/* Hover effect overlay */}
			<div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.05] opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
		</Link>
	);
}

function CodeLine({
	children,
	indent = 0,
}: {
	children: ReactNode;
	indent?: number;
}) {
	const indentClasses = {
		0: '',
		1: 'ml-4 sm:ml-6 lg:ml-8',
		2: 'ml-8 sm:ml-12 lg:ml-16',
		3: 'ml-12 sm:ml-18 lg:ml-24',
		4: 'ml-16 sm:ml-24 lg:ml-32',
	} as const;

	return (
		<div
			className={`${indentClasses[indent as keyof typeof indentClasses] || ''} leading-relaxed hover:bg-gray-800/30 transition-colors duration-200 rounded px-1 -mx-1 min-w-124`}>
			{children}
		</div>
	);
}

function Text({ text }: { text: string }) {
	return (
		<span className='text-gray-100 hover:text-white transition-colors duration-200'>
			{text}
		</span>
	);
}

function Property({ text }: { text: string }) {
	return (
		<span className='text-blue-400 hover:text-blue-300 transition-colors duration-200'>
			{text}
		</span>
	);
}

function Comment({ text }: { text: string }) {
	return (
		<span className='text-gray-500 hover:text-gray-400 transition-colors duration-200'>
			{text}
		</span>
	);
}
