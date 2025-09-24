import { createFileRoute, Link } from '@tanstack/react-router';
import {
	PostListDisplay,
	PostSearchInput,
	TagFilter,
} from '../../features/writing';
import type { BlogPost } from '../../types';
import { useState } from 'react';
import { useBlogPosts } from '../../hooks/writing';

export const Route = createFileRoute('/writing/')({
	component: MobileWritingPage,
});

/**
 * MobileWritingPage Component
 *
 * A comprehensive blog posts listing page that provides search and filtering capabilities
 * for browsing published articles. This component serves as the main writing index page
 * with full-text search, tag-based filtering, and responsive design.
 *
 * Features:
 * - Real-time search functionality across post titles, descriptions, and tags
 * - Tag-based filtering with removable tag badges for easy filter management
 * - Combined search and tag filtering - posts must match search query AND selected tags
 * - Dynamic post filtering using getBlogPostsByFilterState utility function
 * - Empty state handling for no results vs. no posts scenarios
 * - Integration with site settings for consistent accent color theming
 * - Responsive layout optimized for mobile and desktop viewing
 * - State management for search queries and selected tag filters
 *
 * The component maintains local state for selectedTags and postSearch while accessing
 * global site settings through the route context. Posts are filtered in real-time as
 * users interact with search input or tag filters. The PostListDisplay component
 * handles rendering the filtered results with appropriate empty states.
 *
 * @component
 */
function MobileWritingPage() {
	const { siteSettings } = Route.useRouteContext(); // Writing and Blogs state
	const { getBlogPostsByFilterState } = useBlogPosts();
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const [postSearch, setPostSearch] = useState('');

	const blogPosts: BlogPost[] = getBlogPostsByFilterState(
		postSearch,
		selectedTags
	);

	// Determine if we have no posts at all vs no search result
	const activeSearch = postSearch.trim() !== '';
	const tagSelected = selectedTags.length !== 0;

	return (
		<div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 sm:p-6 lg:p-8'>
			<div className='max-w-7xl mx-auto'>
				<div className='bg-gray-900/95 backdrop-blur-sm rounded-xl border border-gray-600/50 shadow-2xl shadow-black/20 overflow-hidden'>
					{/* Header */}
					<div className='bg-gray-800/80 border-b border-gray-600/50 px-4 py-3 flex items-center space-x-2'>
						<div className='text-gray-400 text-lg sm:text-xl leading-relaxed ml-4'>writing</div>
					</div>

					{/* Main Content */}
					<div className='p-4 sm:p-6 lg:p-8 xl:p-10'>
						<div className='flex flex-col text-sm sm:text-base md:text-lg space-y-1 sm:space-y-2 overflow-auto'>
							<header className='my-4'>
								<div className='flex flex-col gap-y-1'>
									<PostSearchInput
										query={postSearch}
										setQuery={setPostSearch}
										label='Search'
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
							</header>

							<PostListDisplay
								posts={blogPosts}
								activeSearch={activeSearch}
								siteSettings={siteSettings}
								tagSelected={tagSelected}
								setSelectedTags={setSelectedTags}
							/>

							{/* Breadcrumb footer */}
							<div className='mt-6 pt-4 border-t border-gray-600/30'>
								<div className='flex items-center gap-2 text-xs sm:text-sm text-gray-500'>
									<span className='text-gray-500 hover:text-gray-400 transition-colors duration-200'>{'//'}</span>
									<span className='text-gray-500 hover:text-gray-400 transition-colors duration-200'>Navigation:</span>
									<span className='text-gray-100 hover:text-white transition-colors duration-200'>/</span>
									<Link to='/'>
										<span className='text-blue-400 hover:text-blue-300 transition-colors duration-200'>home</span>
									</Link>
									<span className='text-gray-100 hover:text-white transition-colors duration-200'> → </span>
									<Link to='/writing'>
										<span className='text-blue-400 hover:text-blue-300 transition-colors duration-200'>writing</span>
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
