import type { BlogPost } from '../../types';

const PROXY_URLS = (githubURL: string): string[] => [
	`https://api.allorigins.win/raw?url=${encodeURIComponent(githubURL)}`,
	`https://cors-anywhere.herokuapp.com/${githubURL}`,
	`https://corsproxy.io/?${encodeURIComponent(githubURL)}`,
];

/**
 * Fetches blog post content using CORS proxy services as fallback
 *
 * This function attempts to fetch blog post content through multiple CORS proxy services
 * when direct GitHub API access fails. It tries each proxy in sequence until one succeeds
 * or all proxies have been exhausted.
 *
 * @param post - The blog post object containing GitHub URL and metadata
 * @returns Promise that resolves to the raw markdown content as a string
 * @throws Error when all CORS proxy attempts fail
 */
export async function fetchPostUsingProxyFallback(post: BlogPost) {
	let proxyAttempt = 1;
	const PROXIES = PROXY_URLS(urlToRawGitHubUrl(post.githubUrl));

	for (const proxyURL of PROXIES) {
		try {
			const response = await fetch(proxyURL, {
				// Add XMLHttpRequest header to help bypass CORS restrictions
				headers: {
					'X-Request-With': 'XMLHttpRequest',
				},
			});

			if (response.ok) {
				return await response.text();
			}
		} catch (error: unknown) {
			console.warn(error);
			console.warn(
				`Unable to get post with attempt: ${proxyAttempt.toString()} of ${PROXIES.length.toString()}. Attempting with next proxy...`
			);
			proxyAttempt += 1;
		}
	}
	throw new Error('Unable to get posts using CORS proxies...');
}

/**
 * Converts a regular GitHub URL to a raw GitHub content URL
 *
 * This utility function transforms a standard GitHub file URL into the corresponding
 * raw content URL that can be used to fetch the file's raw content directly.
 * It performs two key transformations:
 * 1. Changes the domain from 'github.com' to 'raw.githubusercontent.com'
 * 2. Replaces the '/blob/' path segment with '/refs/heads/' for proper raw access
 *
 * @param githubUrl - The standard GitHub file URL (e.g., https://github.com/user/repo/blob/main/file.md)
 * @returns The transformed raw GitHub URL (e.g., https://raw.githubusercontent.com/user/repo/refs/heads/main/file.md)
 */

function urlToRawGitHubUrl(githubUrl: string): string {
	return githubUrl
		.replace('github.com', 'raw.githubusercontent.com')
		.replace('/blob/', '/refs/heads/');
}
