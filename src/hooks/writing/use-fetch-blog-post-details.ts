import { useEffect, useState, useRef } from 'react';
import {
  fetchPostFromGithubAPI,
  fetchPostUsingProxyFallback,
} from '../../functions';
import type { BlogPost } from '../../types';

/**
 * Custom hook to fetch and manage blog post markdown content
 *
 * Attempts to fetch content using multiple methods in order:
 * 1. GitHub API (preferred - better CORS support)
 * 2. CORS proxy fallback services
 *
 * @param post - The blog post object containing fetch URLs
 * @returns Object containing loading state, error message, and markdown content
 */
export function useFetchBlogPostDetails(post: BlogPost) {
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const isFetchingRef = useRef(false);

  useEffect(() => {
    // Prevent multiple simultaneous fetches
    if (isFetchingRef.current) {
      return;
    }

    let isMounted = true;
    isFetchingRef.current = true;

    const fetchMarkdownContent = async () => {
      const fetchMethods = [
        fetchPostFromGithubAPI,
        fetchPostUsingProxyFallback,
      ];

      // Try each fetch method until one succeeds
      for (const [index, fetchMethod] of fetchMethods.entries()) {
        try {
          const content = await fetchMethod(post);

          // Only update state if component is still mounted
          if (isMounted) {
            setMarkdownContent(content);
            setIsLoading(false);
            isFetchingRef.current = false;
            return; // Exit early on successful fetch - this should prevent further attempts
          }
        } catch (fetchError) {
          console.warn(
            `Fetch method ${(index + 1).toString()} (${fetchMethod.name}) failed, continuing to the next method:`,
            fetchError
          );
          // Continue to next method
        }
      }

      // If we reach here, all fetch methods failed
      if (isMounted) {
        setError(`Unable to fetch post "${post.slug}" from any source.`);
        setIsLoading(false);
        isFetchingRef.current = false;
      }
    };

    void fetchMarkdownContent();
    return () => {
      isMounted = false;
      isFetchingRef.current = false;
    };
  }, [post]); // Include full post object as dependency

  return {
    isLoading,
    error,
    markdownContent,
  };
}
