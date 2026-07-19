import { useMemo } from 'react';
import type {
  BlogPost,
  SiteSettings,
  WritingWindowState,
} from '../../../../types';
import { PostSearchInput } from '../post-search-input';
import { TagFilter } from '../tag-filter';
import { WritingSidebarItem } from './writing-sidebar-item';

interface WritingSidebarProps {
  windowState: WritingWindowState;
  siteSettings: SiteSettings;
  filteredPosts: BlogPost[];
  className?: string;
}

export function WritingSidebar({
  windowState,
  siteSettings,
  filteredPosts,
  className = '',
}: WritingSidebarProps) {
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

  return (
    <div
      className={`flex min-h-0 flex-col overflow-hidden ${className}`}>
      <div className='flex flex-col h-full'>
        {/* SEARCH */}
        <div
          className='border-b border-white/8 px-3 py-3 flex-shrink-0'>
          <PostSearchInput
            query={windowState.searchQuery}
            setQuery={windowState.setSearchQuery}
            label='Search'
            accentColor={siteSettings.accentColor}
          />

          <div className='mt-2 flex flex-wrap'>
            {windowState.selectedTags.map(tag => (
              <TagFilter
                key={`selected-${tag}-filter`}
                text={tag}
                accentColor={siteSettings.accentColor}
                onClick={windowState.setSelectedTags}
              />
            ))}
          </div>
        </div>

        {/* POSTS LIST */}
        <div className='flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-stone-400/80 [&::-webkit-scrollbar-thumb]:bg-stone-600/70 [&::-webkit-scrollbar]:bg-transparent [&::-webkit-scrollbar-track]:bg-transparent'>
          {Object.entries(groupedPosts).length > 0 ?
            Object.entries(groupedPosts).map(([monthYear, posts]) => (
              <div
                key={monthYear}
                className=''>
                <div className='border-y border-white/8 bg-white/[0.04] px-4 py-2'>
                  <h3 className='text-sm font-semibold text-stone-300'>
                    {monthYear}
                  </h3>
                </div>
                <div className='space-y-1 '>
                  {posts.map((post, index) => (
                    <div key={`${post.slug}-sidebar-item-wrapper`}>
                      <WritingSidebarItem
                        key={`${post.slug}-sidebar-item`}
                        post={post}
                        windowState={windowState}
                        siteSettings={siteSettings}
                      />
                      {posts.length > 1 && index < posts.length - 1 && (
                        <div className='border-b border-gray-600 my-1' />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))
            : <div className='p-4 text-center text-stone-400'>
              <p>No posts found.</p>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
