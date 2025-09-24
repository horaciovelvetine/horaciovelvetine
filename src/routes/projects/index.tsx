import { createFileRoute, Link } from '@tanstack/react-router';
import type { ReactNode } from 'react';

export const Route = createFileRoute('/projects/')({
	component: MobileProjectsPage,
});

// Project data structure
const projectsData = [
	{
		id: 'solvedoku',
		name: 'Solvedoku',
		description:
			'Interactive Sudoku puzzle solver with real-time validation and backtrack solving in which can be sped up and slowed down in real-time',
		technologies: ['React', 'TypeScript', 'TailwindCSS'],
		route: '/projects/solvedoku',
		status: 'active',
		features: [
			'Real-time validation',
			'Backtrack solving',
			'Interactive UI',
			'Responsive design',
		],
	},
	{
		id: 'rock-paper-scissors',
		name: 'Rock Paper Scissors',
		description:
			'A self-playing game of Rock, Paper, Scissors and physicis simulation using P5.js animations done in the style of a DVD menu',
		technologies: ['TypeScript', 'P5.js', 'TailwindCSS'],
		route: '/projects/rock-paper-scissors',
		status: 'active',
		features: ['P5.js animations', 'Physics simulation', 'Responsive design'],
	},
	{
		id: 'the-wikiverse',
		name: 'The Wikiverse',
		description:
			"Interactive data visualization project that explores complex relationships within Wikipedia's knowledge graph using Wikidata",
		technologies: [
			'React',
			'TypeScript',
			'Wikidata Toolkit',
			'TailwindCSS',
			'P5.js',
			'Java',
			'Spring Boot',
		],
		route: '/projects/the-wikiverse',
		status: 'in development',
		features: [
			'Interactive 3D knowledge graph',
			'Real-time search and filtering',
			'Dynamic node clustering',
			'Multi-language support',
			'Export functionality',
			'Responsive design',
		],
	},
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
		<div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 sm:p-6 lg:p-8'>
			<div className='max-w-7xl mx-auto'>
				<div className='bg-gray-900/95 backdrop-blur-sm rounded-xl border border-gray-600/50 shadow-2xl shadow-black/20 overflow-hidden'>
					{/* Header */}
					<div className='bg-gray-800/80 border-b border-gray-600/50 px-4 py-3 flex items-center space-x-2'>
						<div className='text-gray-400 text-lg sm:text-xl leading-relaxed ml-4'>
							projects
						</div>
					</div>

					{/* Code content */}
					<div className='p-4 sm:p-6 lg:p-8 xl:p-10'>
						<div className='flex flex-col text-sm sm:text-base md:text-lg space-y-1 sm:space-y-2'>

							{/* Projects grid */}
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
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
									<div className='flex items-center gap-2 text-xs sm:text-sm text-gray-500'>
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
			className='group relative block bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm rounded-xl border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden'>
			{/* Card Header */}
			<div className='p-6 pb-4'>
				<div className='mb-3'>
					<h3 className='text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-2'>
						{project.name}
					</h3>
					<div className='flex items-center space-x-2'>
						<div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
						<span className='text-xs text-gray-400 uppercase tracking-wider whitespace-nowrap'>
							{project.status}
						</span>
					</div>
				</div>

				<p className='text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300'>
					{project.description}
				</p>
			</div>

			{/* Technologies */}
			<div className='px-6 pb-4'>
				<div className='flex flex-wrap gap-2 mb-4'>
					{project.technologies.map(tech => (
						<span
							key={tech}
							className='px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full border border-blue-500/30 group-hover:bg-blue-500/30 group-hover:text-blue-200 transition-all duration-300'>
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
							className='flex items-center space-x-2'>
							<div className='w-1.5 h-1.5 bg-yellow-400 rounded-full'></div>
							<span className='text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300'>
								{feature}
							</span>
						</div>
					))}
				</div>
			</div>

			{/* Hover effect overlay */}
			<div className='absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
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
