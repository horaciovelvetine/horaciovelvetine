import { createFileRoute } from '@tanstack/react-router';
import {
	PostListDisplay,
	PostSearchInput,
	TagFilter,
} from '../../features/writing';
import type { BlogPost } from '../../types';
import { getBlogPostsByFilterState } from '../../functions';
import { useState } from 'react';

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
		<div className='min-h-screen bg-stone-900/50 text-white'>
			<div className='max-w-4xl mx-auto px-6 py-2'>
				<header className='mb-4'>
					<h1 className='text-4xl md:text-5xl font-bold mb-4 text-white'>
						Writing
					</h1>
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
					<div></div>
				</header>

				<PostListDisplay
					posts={blogPosts}
					activeSearch={activeSearch}
					siteSettings={siteSettings}
					tagSelected={tagSelected}
					setSelectedTags={setSelectedTags}
				/>
			</div>
		</div>
	);
}
