import { Link } from '@tanstack/react-router';

import type { Dispatch, SetStateAction } from 'react';
import type { BlogPost, SiteSettings } from '../../../../types';
import { NoPostsToDisplay } from './no-posts-to-display';
import { TagBadge } from '../tag-badge';

interface PostListDisplayProps {
  posts: BlogPost[];
  activeSearch: boolean;
  siteSettings: SiteSettings;
  selectedTags: string[];
  setSelectedTags: Dispatch<SetStateAction<string[]>>;
}

/**
 * PostListDisplay Component
 *
 * Displays a list of blog posts with their titles, descriptions, publish dates, and interactive tags.
 * Handles empty state scenarios and provides tag-based filtering functionality through clickable tag badges.
 *
 * Features:
 * - Renders blog post cards with hover effects and responsive design
 * - Displays post metadata including publish dates and filterable tags
 * - Navigates to individual post pages via TanStack Router links
 * - Shows contextual empty state messages based on search/filter status
 * - Enables tag-based filtering through clickable TagBadge components
 * - Integrates with site settings for consistent accent color theming
 *
 * @component
 * @param {PostListDisplayProps} props - The component props
 * @param {BlogPost[]} props.posts - Array of blog posts to display
 * @param {boolean} props.activeSearch - Whether a search is currently active (affects empty state message)
 * @param {SiteSettings} props.siteSettings - Site configuration including accent color for tag styling
 * @param {string[]} props.selectedTags - Current list of selected tags
 * @param {Dispatch<SetStateAction<string[]>>} props.setSelectedTags - Function to update the selected tags array
 */
export function PostListDisplay({
  posts,
  activeSearch,
  siteSettings,
  selectedTags,
  setSelectedTags,
}: PostListDisplayProps) {
  /**
   * Handles tag selection when a tag badge is clicked
   *
   * Adds the clicked tag to the selected tags array for filtering posts,
   * but only if the tag is not already selected. This prevents duplicate
   * tags from being added to the filter and allows users to build up
   * multiple tag filters by clicking on tag badges within individual
   * post items in the sidebar.
   *
   * @param {string} target - The tag text that was clicked
   */
  const handleTagBadgeClick = (target: string) => {
    if (selectedTags.find(tag => tag === target)) return;
    setSelectedTags(prev => [...prev, target]);
  };

  return (
    <>
      <NoPostsToDisplay
        show={posts.length === 0}
        activeSearch={activeSearch}
        tagSelected={selectedTags.length !== 0}
      />
      {posts.length !== 0 && (
        <div className='space-y-2'>
          {posts.map(post => (
            <article
              key={post.slug}
              className='bg-stone-800/30 rounded-lg p-4 hover:bg-stone-800/70 transition-colors border border-stone-300/15'>
              <div className='block'>
                <Link
                  to='/writing/$slug'
                  params={{ slug: post.slug }}
                  className='block isolate group'>
                  <h2 className='text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors'>
                    {post.title}
                  </h2>
                  <p className='text-gray-300 mb-4 leading-relaxed'>
                    {post.description}
                  </p>
                </Link>
                <div className='flex flex-wrap items-center gap-4 text-sm text-gray-400'>
                  <span>{post.publishedDate}</span>

                  <div className='flex flex-wrap'>
                    {post.tags.map(tag => (
                      <TagBadge
                        key={`${tag}-badge`}
                        text={tag}
                        accentColor={siteSettings.accentColor}
                        onClick={handleTagBadgeClick}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
