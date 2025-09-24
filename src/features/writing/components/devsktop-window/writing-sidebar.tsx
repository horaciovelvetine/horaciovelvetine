import { useCallback, useMemo } from "react";
import type { BlogPost, SiteSettings, WritingWindowState } from "../../../../types";
import { PostSearchInput } from "../post-search-input";

interface WritingSidebarProps {
  sidebarOpen: boolean
  windowState: WritingWindowState;
  siteSettings: SiteSettings
  filteredPosts: BlogPost[]
  selectedPost: BlogPost | null
}


export function WritingSidebar({ selectedPost, sidebarOpen, windowState, siteSettings, filteredPosts }: WritingSidebarProps) {

  /**
 * Groups filtered blog posts by month and year for organized display
 *
 * Creates a memoized object where keys are formatted month-year strings
 * (e.g., "January 2024") and values are arrays of blog posts published
 * in that month. This grouping is used to display posts in chronological
 * sections within the sidebar.
 *
 * @returns {Record<string, BlogPost[]>} Object with month-year keys and blog post arrays as values
 */
  const groupedPosts = useMemo(() => {
    const groups: Record<string, BlogPost[]> = {};
    filteredPosts.forEach(post => {
      const date = new Date(post.publishedDate);
      const monthYear = date.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
      });
      groups[monthYear] = groups[monthYear] ?? [];
      groups[monthYear].push(post);
    });
    return groups;
  }, [filteredPosts]);

  /**
 * Formats a date string for display in a readable format
 *
 * Takes a date string and converts it to a localized format showing
 * abbreviated month, numeric day, and full year (e.g., "Jan 15, 2024").
 * This function is memoized to prevent unnecessary re-creation on re-renders.
 *
 * @param {string} dateString - The date string to format (expected in YYYY-MM-DD format)
 * @returns {string} Formatted date string in "MMM D, YYYY" format
 */
  const formatDate = useCallback((dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }, []);

  return (
    <div
      className={`${sidebarOpen ? 'w-60 min-w-60' : 'w-0 min-w-0'} transition-all duration-300 ease-in-out border-r border-gray-700 bg-gray-800 flex flex-col overflow-hidden`}>
      <div className='flex flex-col h-full'>
        {/* SEARCH */}
        <div
          className={`px-2 py-3 border-b border-gray-700 flex-shrink-0 ${sidebarOpen ? '' : 'hidden select-none'}`}>
          <PostSearchInput
            query={windowState.searchQuery}
            setQuery={windowState.setSearchQuery}
            label='Search'
            accentColor={siteSettings.accentColor}
          />
        </div>

        {/* POSTS LIST */}
        <div className='flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-stone-400/80 [&::-webkit-scrollbar-thumb]:bg-stone-600/70 [&::-webkit-scrollbar]:bg-transparent [&::-webkit-scrollbar-track]:bg-transparent'>
          {Object.entries(groupedPosts).length > 0 ?
            Object.entries(groupedPosts).map(([monthYear, posts]) => (
              <div
                key={monthYear}
                className='mb-4'>
                <div className='px-4 py-2 bg-gray-700'>
                  <h3 className='text-sm font-mediumtext-gray-300'>
                    {monthYear}
                  </h3>
                </div>
                <div className='space-y-1'>
                  {posts.map(post => (
                    <button
                      key={post.slug}
                      type='button'
                      onClick={() => {
                        if (
                          selectedPost &&
                          selectedPost.slug === post.slug
                        ) {
                          windowState.setSelectedPost(null);
                        } else {
                          windowState.setSelectedPost(post);
                        }
                      }}
                      className={`w-full text-left p-3 hover:bg-gray-700 transition-colors ${selectedPost?.slug === post.slug ?
                        'bg-blue-900/20 border-r-2 border-blue-500'
                        : ''
                        }`}>
                      <div className='space-y-1'>
                        <h4 className='font-medium text-white text-sm leading-tight'>
                          {post.title}
                        </h4>
                        <p className='text-xs text-gray-400'>
                          {formatDate(post.publishedDate)}
                        </p>
                        <p className='text-xs text-gray-300 line-clamp-2'>
                          {post.description}
                        </p>
                        <div className='flex flex-wrap gap-1 mt-2'>
                          {post.tags.slice(0, 2).map(tag => (
                            <span
                              key={tag}
                              className='inline-block px-2 py-1 text-xs bg-gray-600 text-gray-300 rounded-full'>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))
            : <div className='p-4 text-centertext-gray-400'>
              <p>No posts found</p>
            </div>
          }
        </div>
      </div>
    </div>
  )
}