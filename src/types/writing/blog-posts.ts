import type { BlogPost } from "./blog-post";

/**
 * Interface for blog post management and retrieval operations
 * 
 * Provides a comprehensive set of methods for accessing, filtering, and searching
 * through blog posts. Supports various retrieval patterns including direct access
 * by slug, fuzzy text matching, tag-based filtering, and combined filter states.
 * 
 * @interface
 * @property {BlogPost[]} blogPosts - Array of all available blog posts
 * @property {function} getAllBlogPosts - Retrieves all blog posts sorted by publication date (newest first)
 * @property {function} getBlogPost - Retrieves a specific blog post by its unique slug identifier
 * @property {function} getBlogPostsByMatching - Searches blog posts using fuzzy matching on title, description, and tags
 * @property {function} getBlogPostsByTags - Filters blog posts that contain any of the specified tags
 * @property {function} getBlogPostsByFilterState - Combines search and tag filtering with intersection logic
 */

export interface BlogPosts {
  blogPosts: BlogPost[];
  getAllBlogPosts: () => BlogPost[];
  getBlogPost: (slug: string) => BlogPost | undefined;
  getBlogPostsByMatching: (match: string) => BlogPost[];
  getBlogPostsByTags: (tags: string[]) => BlogPost[];
  getBlogPostsByFilterState: (postSearch: string, selectedTags: string[]) => BlogPost[];
}