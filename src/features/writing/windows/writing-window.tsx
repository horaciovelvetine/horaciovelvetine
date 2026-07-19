import { useMemo } from 'react';
import { useFetchBlogPostDetails } from '../../../hooks/writing';
import { useElementSize } from '../../../hooks/site';
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
	const { sidebarOpen, selectedPost } = windowState;
	const { ref: containerRef, size: containerSize } =
		useElementSize<HTMLDivElement>();
	const allPosts = useMemo(() => windowState.getAllBlogPosts(), [windowState]);
	const isCompactLayout =
		containerSize.width > 0 && containerSize.width < 960;

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
			ref={containerRef}
			className='relative flex h-full min-h-0 flex-col bg-zinc-950/80'>
			<WritingHeader
				windowState={windowState}
				selectedPost={selectedPost}
				isCompactLayout={isCompactLayout}
			/>

			<div className='relative flex min-h-0 flex-1 overflow-hidden'>
				{!isCompactLayout && sidebarOpen && (
					<WritingSidebar
						windowState={windowState}
						siteSettings={siteSettings}
						filteredPosts={filteredPosts}
						className='h-full w-[clamp(250px,28vw,330px)] shrink-0 border-r border-white/8 bg-zinc-950/95'
					/>
				)}

				{isCompactLayout && sidebarOpen && (
					<>
						<button
							type='button'
							className='absolute inset-0 z-10 bg-black/45 backdrop-blur-[2px]'
							aria-label='Close writing sidebar'
							onClick={() => {
								windowState.setSidebarOpen(false);
							}}
						/>
						<WritingSidebar
							windowState={windowState}
							siteSettings={siteSettings}
							filteredPosts={filteredPosts}
							className='absolute inset-y-0 left-0 z-20 h-full w-[min(340px,86vw)] border-r border-white/10 bg-zinc-950 shadow-2xl shadow-black/50'
						/>
					</>
				)}

				<div className='min-w-0 flex-1 bg-zinc-950/45'>
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
