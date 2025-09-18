import { getAllBlogPosts, getBlogPostsByMatching, getBlogPostsByTags } from "../../consts/blog-posts";
import type { BlogPost } from "../../types";

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

export function getBlogPostsByFilterState(postSearch: string, selectedTags: string[]): BlogPost[] {
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
}