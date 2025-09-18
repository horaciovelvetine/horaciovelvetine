import type { BlogPost } from "../../consts/blog-posts";

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
  if (post.githubApiUrl) {
    const response = await fetch(post.githubApiUrl);
    if (response.ok) {
      const data = await response.json() as SuccessResponse;
      // atob() => decode the base.64 string 
      return atob(data.content);
    }
  }
  throw new Error(`Unable to get: ${post.title} from Github API directly.`)
}