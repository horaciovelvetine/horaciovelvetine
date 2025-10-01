import type { BlogPost } from '../../types';

interface SuccessResponse {
	content: string;
}

/**
 * Fetches blog post content from GitHub API
 *
 * @param post - The blog post object containing GitHub API URL and metadata
 * @returns Promise that resolves to the decoded markdown content as a string
 * @throws Error when the GitHub API URL is missing, request fails, or response is not ok
 */
export async function fetchPostFromGithubAPI(post: BlogPost): Promise<string> {
	const response = await fetch(getGithubAPIUrl(post.githubUrl));
	if (response.ok) {
		const data = (await response.json()) as SuccessResponse;
		// atob() => decode the base.64 string
		return atob(data.content);
	}

	throw new Error(`Unable to get: ${post.title} from Github API directly.`);
}

/**
 * Converts a GitHub file URL to the corresponding GitHub API URL
 *
 * Transforms a standard GitHub file URL (with /blob/main/) into the GitHub API
 * format that can be used to fetch the file content via the GitHub Contents API.
 *
 * @param url - The GitHub file URL to convert (e.g., "https://github.com/user/repo/blob/main/path/file.md")
 * @returns The converted GitHub API URL (e.g., "https://api.github.com/repos/user/repo/contents/path/file.md")
 */
function getGithubAPIUrl(url: string) {
	// Convert GitHub URL to API URL
	// Example: https://github.com/user/repo/blob/branch/path/file.md
	// Becomes: https://api.github.com/repos/user/repo/contents/path/file.md
	const apiUrl = url
		.replace('https://github.com/', 'https://api.github.com/repos/')
		.replace('/blob/main/', '/contents/');

	return apiUrl;
}
