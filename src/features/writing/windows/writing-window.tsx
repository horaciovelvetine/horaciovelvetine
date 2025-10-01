import { useMemo } from 'react';
import { useFetchBlogPostDetails } from '../../../hooks/writing';
import type {
	BlogPost,
	SiteSettings,
	WritingWindowState,
} from '../../../types';
import {
	WritingContentBody,
	WritingHeader,
	WritingSidebar,
} from '../components';

interface WritingWindowProps {
	siteSettings: SiteSettings;
	windowState: WritingWindowState;
}

/**
 * WritingWindow Component
 *
 * A comprehensive blog reading interface that provides post browsing, searching, and content display functionality.
 * This component serves as the main window for the writing feature, integrating sidebar navigation with content viewing.
 *
 * Features:
 * - Dynamic post filtering based on search queries using fuzzy matching
 * - Collapsible sidebar for post navigation and discovery
 * - Real-time markdown content fetching and rendering from external sources
 * - Responsive header with post metadata and GitHub source links
 * - Integration with window state management for UI persistence
 * - Error handling and loading states for content fetching
 *
 * @component
 * @param {WritingWindowProps} props - The component props
 * @param {SiteSettings} props.siteSettings - Global site configuration including theming and display preferences
 * @param {WritingWindowState} props.windowState - Window-specific state including sidebar visibility, selected post, and search query
 */

export function WritingWindow({
	siteSettings,
	windowState,
}: WritingWindowProps) {
	// Extract the setter to avoid dependency issues
	const { sidebarOpen, selectedPost } = windowState;
	const allPosts = useMemo(() => windowState.getAllBlogPosts(), [windowState]);

	/**
	 * Blog posts filtered by the current search query
	 *
	 * This memoized value applies the search filter to the blog posts based on the
	 * current search query. If no search query is provided (empty or whitespace),
	 * it returns all posts. Otherwise, it uses getBlogPostsByMatching() to perform
	 * fuzzy matching against post titles, descriptions, and tags.
	 *
	 * The dependency array includes both allPosts and the search query to ensure
	 * the filter updates when either the posts or search criteria change.
	 *
	 * @type {BlogPost[]} Array of blog posts matching the current search query
	 */
	const filteredPosts: BlogPost[] = useMemo(() => {
		return windowState.getBlogPostsByFilterState(
			windowState.searchQuery,
			windowState.selectedTags
		);
	}, [windowState]);

	/**
	 * Determines which blog post to fetch content for
	 *
	 * Returns the currently selected post if one exists, otherwise defaults to
	 * the first post in the sorted list. This ensures there's always a post
	 * to display when the component mounts or when no specific post is selected.
	 * The value is memoized to prevent unnecessary re-fetching when dependencies
	 * haven't changed.
	 *
	 * @returns {BlogPost} The blog post to fetch and display content for
	 */
	const selectedPostForFetch = useMemo(
		() => selectedPost ?? allPosts[0],
		[allPosts, selectedPost]
	);

	const { isLoading, error, markdownContent } =
		useFetchBlogPostDetails(selectedPostForFetch);

	return (
		<div
			className='flex flex-col'
			style={{ height: 'calc(100vh - 72px)' }}>
			{/* LAYOUT SIDE BY SIDE */}
			<div className='flex flex-1 overflow-hidden'>
				{/* SIDEBAR CONTENT */}
				<WritingSidebar
					windowState={windowState}
					siteSettings={siteSettings}
					filteredPosts={filteredPosts}
				/>

				{/* MAIN CONTAINER */}
				<div
					className={`flex flex-col flex-1 bg-gray-900 transition-all duration-300 relative overflow-hidden ${sidebarOpen ? 'w-[516px]' : 'w-[756px]'}`}>
					{/* HEADER */}
					<WritingHeader
						windowState={windowState}
						selectedPost={selectedPost}
					/>

					{/* MAIN CONTENT BODY */}
					<WritingContentBody
						markdownContent={markdownContent}
						siteSettings={siteSettings}
						isLoading={isLoading}
						error={error}
						selectedPost={selectedPost}
					/>
				</div>
			</div>
		</div>
	);
}
