import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import {
	PostListDisplay,
	PostSearchInput,
	TagFilter,
} from '../../features/writing';
import type { BlogPost } from '../../types';
import { useBlogPosts } from '../../hooks/writing';
import {
	ProjectHeader,
	ProjectSummary,
	ProjectBreadcrumbFooter,
	ProjectFeatureOverview,
	ProjectStackOverview,
} from '../../features/the-wikiverse';

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
	const { getBlogPostsByFilterState } = useBlogPosts();

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
							<ProjectHeader />

							{/* Project Summary */}
							<ProjectSummary />

							{/* Screenshots Section */}
							{/* <ProjectScreenshots /> */}

							{/* Technology Stack */}
							<ProjectStackOverview />

							{/* Key Features */}
							<ProjectFeatureOverview />

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
							<ProjectBreadcrumbFooter />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
