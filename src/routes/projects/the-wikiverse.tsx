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

	return (
		<div className='min-h-screen px-4 py-6 sm:px-6 lg:px-8'>
			<div className='mx-auto max-w-6xl'>
				<div className='overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950/92 shadow-2xl shadow-black/30'>
					{/* Header */}
					<div className='flex items-center space-x-2 border-b border-white/8 bg-white/[0.03] px-4 py-3'>
						<div className='ml-4 text-lg leading-relaxed text-stone-400 sm:text-xl'>
							the-wikiverse
						</div>
					</div>

					{/* Main Content */}
					<div className='p-4 sm:p-6 lg:p-8 xl:p-10'>
						<div className='flex flex-col space-y-4 text-sm sm:text-base md:text-lg overflow-auto'>
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
									<div className='mb-6 flex flex-col gap-y-4'>
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
										selectedTags={selectedTags}
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
