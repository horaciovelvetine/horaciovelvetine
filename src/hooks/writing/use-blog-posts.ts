import { useCallback } from 'react';
import { BLOG_POSTS } from '../../consts/blog-posts';
import type { BlogPost, BlogPosts } from '../../types';
import { fuzzyMatch } from '../../functions';

/**
 * Custom hook for managing and accessing blog posts with search and filtering capabilities
 *
 * This hook provides a comprehensive set of functions for retrieving, searching, and filtering
 * blog posts from the BLOG_POSTS constant. It offers both individual post retrieval and
 * batch operations with advanced search functionality including fuzzy matching for handling
 * typos and variations in search terms.
 *
 * Features:
 * - Individual blog post retrieval by slug
 * - Batch retrieval of all posts with automatic sorting by publication date
 * - Fuzzy search across titles, descriptions, and tags with configurable threshold
 * - Combined search and tag filtering functionality
 * - Automatic sorting by publication date (newest first) for all operations
 * - Optimized with useCallback for performance in React components
 *
 * @returns {BlogPosts} Object containing blog post management functions
 */

export function useBlogPosts(): BlogPosts {
	/**
	 * Retrieves a blog post by its unique slug identifier
	 *
	 * @param slug - The unique identifier for the blog post
	 * @returns The blog post if found, otherwise undefined
	 */
	const getBlogPost = useCallback((slug: string): BlogPost | undefined => {
		return BLOG_POSTS.find(post => post.slug === slug);
	}, []);

	/**
	 * Retrieves all blog posts sorted by publication date (newest first)
	 *
	 * @returns A new array of all blog posts sorted by publishedDate in descending order
	 */
	const getAllBlogPosts = useCallback((): BlogPost[] => {
		return [...BLOG_POSTS].sort(
			(a, b) =>
				new Date(b.publishedDate).getTime() -
				new Date(a.publishedDate).getTime()
		);
	}, []);

	/**
	 * Searches for blog posts that match the given search term in title, description, or tags
	 * Uses fuzzy matching to handle small typos and variations with a fixed threshold of 0.65
	 *
	 * @param match - The search term to match against post titles, descriptions, and tags
	 * @returns An array of matching blog posts sorted by publication date (newest first)
	 */
	const getBlogPostsByMatching = useCallback((match: string): BlogPost[] => {
		const matchThreshold = 0.65;
		if (!match.trim()) {
			return [];
		}

		return [...BLOG_POSTS]
			.filter(
				post =>
					fuzzyMatch(match, post.title, matchThreshold) ||
					fuzzyMatch(match, post.description, matchThreshold) ||
					post.tags.some(tag => fuzzyMatch(match, tag, matchThreshold))
			)
			.sort(
				(a, b) =>
					new Date(b.publishedDate).getTime() -
					new Date(a.publishedDate).getTime()
			);
	}, []);

	/**
	 * Retrieves blog posts that contain any of the specified tags
	 *
	 * @param tags - Array of tag titles to filter by
	 * @returns An array of blog posts that have at least one matching tag, sorted by publication date (newest first)
	 */
	const getBlogPostsByTags = useCallback((tags: string[]): BlogPost[] => {
		if (tags.length === 0) {
			return [];
		}

		return [...BLOG_POSTS]
			.filter(post => post.tags.some(tag => tags.includes(tag)))
			.sort(
				(a, b) =>
					new Date(b.publishedDate).getTime() -
					new Date(a.publishedDate).getTime()
			);
	}, []);

	/**
	 * Filters blog posts based on search term and selected tags
	 *
	 * This function handles multiple filtering scenarios:
	 * - No filters: returns all blog posts
	 * - Search only: returns posts matching the search term
	 * - Tags only: returns posts that have any of the selected tags
	 * - Both search and tags: returns posts that match the search term AND have any of the selected tags (intersection)
	 *
	 * @param postSearch - The search term to filter posts by (searches title, description, etc.)
	 * @param selectedTags - Array of tag names to filter posts by
	 * @returns Array of blog posts that match the specified filter criteria
	 */
	const getBlogPostsByFilterState = useCallback(
		(postSearch: string, selectedTags: string[]): BlogPost[] => {
			const hasSearch = postSearch.trim() !== '';
			const hasTags = selectedTags.length > 0;

			// No filters - return all posts
			if (!hasSearch && !hasTags) {
				return getAllBlogPosts();
			}

			// Search only
			if (hasSearch && !hasTags) {
				return getBlogPostsByMatching(postSearch);
			}

			// Tags only
			if (!hasSearch && hasTags) {
				return getBlogPostsByTags(selectedTags);
			}

			// Both search and tags - find intersection
			const searchResults = getBlogPostsByMatching(postSearch);
			const tagResults = getBlogPostsByTags(selectedTags);

			return searchResults.filter(post =>
				tagResults.some(tagPost => tagPost.slug === post.slug)
			);
		},
		[getAllBlogPosts, getBlogPostsByMatching, getBlogPostsByTags]
	);

	return {
		blogPosts: BLOG_POSTS,
		getAllBlogPosts,
		getBlogPost,
		getBlogPostsByMatching,
		getBlogPostsByTags,
		getBlogPostsByFilterState,
	};
}
