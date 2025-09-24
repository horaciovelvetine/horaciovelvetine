import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import {
	PostListDisplay,
	PostSearchInput,
	TagFilter,
} from '../../features/writing';
import type { BlogPost } from '../../types';
import { getBlogPostsByFilterState } from '../../functions';

export const Route = createFileRoute('/projects/the-wikiverse')({
	component: TheWikiverseProjectPage,
});

/**
 * The Wikiverse Project Page Component
 *
 * A comprehensive project showcase page for The Wikiverse project that displays
 * project information, screenshots, and dev-log posts. This component serves as
 * the main project page with project details, visual assets, and a filtered
 * dev-log section using the existing writing components.
 *
 * Features:
 * - Project summary with description and key features
 * - Screenshot gallery with placeholder images
 * - Dev-log section with search and filtering capabilities
 * - Technology stack display with badges
 * - Responsive layout optimized for mobile and desktop viewing
 * - Integration with site settings for consistent accent color theming
 * - State management for dev-log search queries and selected tag filters
 *
 * The component maintains local state for selectedTags and postSearch while accessing
 * global site settings through the route context. Dev-log posts are filtered in real-time
 * as users interact with search input or tag filters.
 *
 * @component
 */
function TheWikiverseProjectPage() {
	const { siteSettings } = Route.useRouteContext();
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const [postSearch, setPostSearch] = useState('');

	// Filter dev-log posts (posts tagged with "the Wikiverse" project)
	const devLogPosts: BlogPost[] = getBlogPostsByFilterState(
		postSearch,
		selectedTags
	).filter(post => post.tags.includes('the Wikiverse'));

	// Determine if we have no posts at all vs no search result
	const activeSearch = postSearch.trim() !== '';
	const tagSelected = selectedTags.length !== 0;

	return (
		<div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 sm:p-6 lg:p-8'>
			<div className='max-w-7xl mx-auto'>
				<div className='bg-gray-900/95 backdrop-blur-sm rounded-xl border border-gray-600/50 shadow-2xl shadow-black/20 overflow-hidden'>
					{/* Header */}
					<div className='bg-gray-800/80 border-b border-gray-600/50 px-4 py-3 flex items-center space-x-2'>
						<div className='text-gray-400 text-lg sm:text-xl leading-relaxed ml-4'>
							the-wikiverse
						</div>
					</div>

					{/* Main Content */}
					<div className='p-4 sm:p-6 lg:p-8 xl:p-10'>
						<div className='flex flex-col text-sm sm:text-base md:text-lg space-y-1 sm:space-y-2 overflow-auto'>
							{/* Project Header */}
							<header className='mb-8'>
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
							</header>

							{/* Project Summary */}
							<section className='mb-8'>
								<div className='bg-gray-800/40 rounded-lg p-6 border-l-4 border-blue-500/30'>
									<h2 className='text-2xl font-bold text-white mb-4'>
										Project Overview
									</h2>
									<p className='text-gray-300 leading-relaxed mb-4'>
										The Wikiverse is an interactive data visualization project
										that explores the complex relationships within Wikipedia's
										knowledge graph. By leveraging Wikidata's rich structured
										data, this project creates an immersive, navigable universe
										where users can discover connections between concepts,
										people, places, and ideas.
									</p>
									<p className='text-gray-300 leading-relaxed mb-4'>
										Built with modern web technologies and data visualization
										libraries, The Wikiverse transforms abstract knowledge into
										an intuitive, visual experience that makes learning and
										discovery both engaging and accessible.
									</p>
								</div>
							</section>

							{/* Screenshots Section */}
							<section className='mb-8'>
								<h2 className='text-2xl font-bold text-white mb-6'>
									Screenshots
								</h2>
								<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
									{/* Placeholder screenshots */}
									{Array.from({ length: 6 }, (_, i) => (
										<div
											key={i}
											className='bg-gray-800/50 rounded-lg p-4 border border-gray-600/30 hover:border-blue-500/50 transition-colors duration-300'>
											<div className='aspect-video bg-gray-700/50 rounded-lg mb-3 flex items-center justify-center'>
												<span className='text-gray-400 text-sm'>
													Screenshot {i + 1} Placeholder
												</span>
											</div>
											<p className='text-gray-300 text-sm'>
												{
													[
														'Main dashboard view',
														'Interactive node graph',
														'Search and filter interface',
														'Detail view with connections',
														'Mobile responsive design',
														'Data export options',
													][i]
												}
											</p>
										</div>
									))}
								</div>
							</section>

							{/* Technology Stack */}
							<section className='mb-8'>
								<h2 className='text-2xl font-bold text-white mb-6'>
									Technology Stack
								</h2>
								<div className='flex flex-wrap gap-3'>
									{[
										'React',
										'TypeScript',
										'D3.js',
										'Wikidata Toolkit',
										'TailwindCSS',
										'Node.js',
										'PostgreSQL',
										'Spring Boot',
									].map(tech => (
										<span
											key={tech}
											className='px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-medium rounded-full border border-blue-500/30 hover:bg-blue-500/30 hover:text-blue-200 transition-all duration-300'>
											{tech}
										</span>
									))}
								</div>
							</section>

							{/* Key Features */}
							<section className='mb-8'>
								<h2 className='text-2xl font-bold text-white mb-6'>
									Key Features
								</h2>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
									{[
										'Interactive 3D knowledge graph visualization',
										'Real-time search and filtering capabilities',
										'Dynamic node clustering and layout algorithms',
										'Multi-language support for international content',
										'Export functionality for research and analysis',
										'Responsive design for all device types',
										'Performance optimization for large datasets',
										'User-friendly navigation and exploration tools',
									].map(feature => (
										<div
											key={feature}
											className='flex items-start space-x-3 p-4 bg-gray-800/30 rounded-lg border border-gray-600/20 hover:border-gray-500/40 transition-colors duration-300'>
											<div className='w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0'></div>
											<span className='text-gray-300 text-sm leading-relaxed'>
												{feature}
											</span>
										</div>
									))}
								</div>
							</section>

							{/* Dev-Log Section */}
							<section className='mb-8'>
								<div className='border-t border-gray-600/30 pt-8'>
									<h2 className='text-2xl font-bold text-white mb-6'>
										Development Log
									</h2>
									<div className='flex flex-col gap-y-4 mb-6'>
										<PostSearchInput
											query={postSearch}
											setQuery={setPostSearch}
											label='Search Dev-Log Posts'
											accentColor={siteSettings.accentColor}
										/>
										<div className='flex flex-wrap'>
											{selectedTags.map(tag => (
												<TagFilter
													key={`selected-${tag}-filter`}
													text={tag}
													accentColor={siteSettings.accentColor}
													onClick={setSelectedTags}
												/>
											))}
										</div>
									</div>

									<PostListDisplay
										posts={devLogPosts}
										activeSearch={activeSearch}
										siteSettings={siteSettings}
										tagSelected={tagSelected}
										setSelectedTags={setSelectedTags}
									/>
								</div>
							</section>

							{/* Breadcrumb footer */}
							<div className='mt-6 pt-4 border-t border-gray-600/30'>
								<div className='flex items-center gap-2 text-xs sm:text-sm text-gray-500'>
									<span className='text-gray-500 hover:text-gray-400 transition-colors duration-200'>
										{'//'}
									</span>
									<span className='text-gray-500 hover:text-gray-400 transition-colors duration-200'>
										Navigation:
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
											projects
										</span>
									</Link>
									<span className='text-gray-100 hover:text-white transition-colors duration-200'>
										{' '}
										→{' '}
									</span>
									<Link to='/projects/the-wikiverse'>
										<span className='text-blue-400 hover:text-blue-300 transition-colors duration-200'>
											the-wikiverse
										</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
