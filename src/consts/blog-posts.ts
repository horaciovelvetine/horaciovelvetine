import { fuzzyMatch } from '../functions';
import type { BlogPost } from '../types';
import { Tags } from './tags';

/**
 * Configuration array for external blog posts from GitHub
 *
 * This array contains all the blog post metadata and configuration.
 * To add new blog posts, simply add new entries to this array.
 * @example GitHub raw URL format:
 * ```
 * https://github.com/username/repo/raw/branch/path/to/file.md
 * ```
 */
export const blogPosts: BlogPost[] = [
	{
		slug: 'value-visitor-pattern',
		title: 'Value Visitor Pattern',
		description:
			'An exploration of the Value Visitor Pattern in software design',
		publishedDate: '2024-01-15',
		tags: [
			Tags.languages.java, Tags.topics.designPatterns, Tags.libraries.wikidataToolkit, Tags.topics.fundamentals
		],
		githubUrl:
			'https://github.com/horaciovelvetine/writing-and-resources/raw/cef63caf35e5592b7ffec7f5b396838f09e342a8/Value_Visitor_Pattern.md',
		githubApiUrl:
			'https://api.github.com/repos/horaciovelvetine/writing-and-resources/contents/Value_Visitor_Pattern.md?ref=cef63caf35e5592b7ffec7f5b396838f09e342a8',
	},
];

/**
 * Retrieves a blog post by its unique slug identifier
 *
 * @param slug - The unique identifier for the blog post
 * @returns The blog post if found, otherwise undefined
 *
 * @example
 * ```typescript
 * const post = getBlogPost('value-visitor-pattern');
 * if (post) {
 *   console.log(post.title); // "Value Visitor Pattern"
 * }
 * ```
 */
export function getBlogPost(slug: string): BlogPost | undefined {
	return blogPosts.find(post => post.slug === slug);
}

/**
 * Retrieves all blog posts sorted by publication date (newest first)
 *
 * @returns A new array of all blog posts sorted by publishedDate in descending order
 *
 * @example
 * ```typescript
 * const allPosts = getAllBlogPosts();
 * console.log(allPosts[0].title); // Most recent post title
 * ```
 */
export function getAllBlogPosts(): BlogPost[] {
	return [...blogPosts].sort(
		(a, b) =>
			new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
	);
}

/**
 * Searches for blog posts that match the given search term in title, description, or tags
 * Uses fuzzy matching to handle small typos and variations with a fixed threshold of 0.65
 *
 * @param match - The search term to match against post titles, descriptions, and tags
 * @returns An array of matching blog posts sorted by publication date (newest first)
 *
 * @example
 * ```typescript
 * // Exact matches
 * const javaPosts = getBlogPostsByMatching('java');
 *
 * // Fuzzy matches (handles typos)
 * const patternPosts = getBlogPostsByMatching('patern'); // matches "pattern"
 * const visitorPosts = getBlogPostsByMatching('vistor'); // matches "visitor"
 * ```
 */
export function getBlogPostsByMatching(match: string): BlogPost[] {
	const matchThreshold = 0.65;
	if (!match.trim()) {
		return [];
	}

	return [...blogPosts]
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
}

/**
 * Retrieves blog posts that contain any of the specified tags
 *
 * @param tags - Array of tag titles to filter by
 * @returns An array of blog posts that have at least one matching tag, sorted by publication date (newest first)
 *
 * @example
 * ```typescript
 * const javaPosts = getBlogPostsByTags(['Java']);
 * const multiTagPosts = getBlogPostsByTags(['Java', 'Spring Boot']);
 * ```
 */
export function getBlogPostsByTags(tags: string[]): BlogPost[] {
	if (tags.length === 0) {
		return [];
	}

	return [...blogPosts]
		.filter(post => post.tags.some(tag => tags.includes(tag)))
		.sort(
			(a, b) =>
				new Date(b.publishedDate).getTime() -
				new Date(a.publishedDate).getTime()
		);
}
