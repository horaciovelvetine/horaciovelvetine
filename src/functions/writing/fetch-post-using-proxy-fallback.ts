import type { BlogPost } from "../../consts/blog-posts";

const PROXY_URLS = (githubURL: string): string[] => [
  `https://cors-anywhere.herokuapp.com/${githubURL}`,
  `https://api.allorigins.win/raw?url=${encodeURIComponent(githubURL)}`,
  `https://corsproxy.io/?${encodeURIComponent(githubURL)}`
]

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
  const PROXIES = PROXY_URLS(post.githubUrl)
  for (const proxyURL of PROXIES) {
    try {
      const response = await fetch(proxyURL, {
        // Add XMLHttpRequest header to help bypass CORS restrictions
        headers: {
          'X-Request-With': 'XMLHttpRequest'
        }
      })

      if (response.ok) {
        return await response.text();
      }
    } catch (error: unknown) {
      console.warn(error);
      console.warn(`Unable to get post with attempt: ${proxyAttempt.toString()} of ${PROXIES.length.toString()}. Attempting with next proxy...`)
      proxyAttempt += 1
    }
  }
  throw new Error('Unable to get posts using CORS proxies...')
}