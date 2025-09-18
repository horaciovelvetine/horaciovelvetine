/**
 * Represents a blog post configuration with metadata and content location
 */
export interface BlogPost {
  /** Unique identifier for the blog post used in URLs */
  slug: string;
  /** Display title of the blog post */
  title: string;
  /** Brief description or summary of the blog post content */
  description: string;
  /** Publication date in YYYY-MM-DD format */
  publishedDate: string;
  /** Optional array of tags associated with the blog post */
  tags: string[];
  /** URL to the raw markdown content on GitHub */
  githubUrl: string;
  /** Alternative GitHub API URL for better CORS support when fetching content */
  githubApiUrl?: string;
}