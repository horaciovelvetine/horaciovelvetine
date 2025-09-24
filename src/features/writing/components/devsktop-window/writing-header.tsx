import { useCallback } from 'react';
import { GithubIcon, MenuBarsIcon } from '../../../../assets';
import type { BlogPost, WritingWindowState } from '../../../../types';

interface WritingHeaderProps {
  windowState: WritingWindowState;
  selectedPost: BlogPost | null;
}

/**
 * WritingHeader Component
 *
 * A header component for the writing window that displays post metadata and navigation controls.
 * This component provides a consistent header interface with sidebar toggle functionality,
 * post title and publication date display, and external links to post sources.
 *
 * Features:
 * - Sidebar toggle button with hover effects and smooth transitions
 * - Dynamic post title and formatted publication date display
 * - GitHub source link with hover animations when a post is selected
 * - Responsive layout that adapts to content presence
 * - Consistent styling with the overall writing window theme
 *
 * @component
 * @param {WritingHeaderProps} props - The component props
 * @param {boolean} props.sidebarOpen - Whether the sidebar is currently open (used for potential styling)
 * @param {WritingWindowState} props.windowState - Window state management object containing sidebar controls
 * @param {BlogPost | null} props.selectedPost - Currently selected blog post or null if none selected
 */

export function WritingHeader({
  windowState,
  selectedPost,
}: WritingHeaderProps) {
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
      className={`flex items-center justify-between p-2 border-b border-gray-700 flex-shrink-0 bg-gray-900`}>
      <div className='flex items-center space-x-2'>
        <button
          type='button'
          onClick={() => {
            windowState.setSidebarOpen(prev => !prev);
          }}
          className='p-2 rounded-md hover:bg-gray-800 transition-colors'>
          <MenuBarsIcon size='size-5' />
        </button>
        {selectedPost && (
          <div>
            <h1 className='text-xl font-semibold text-white'>
              {selectedPost.title}
            </h1>
            <p className='text-sm text-gray-400'>
              {formatDate(selectedPost.publishedDate)}
            </p>
          </div>
        )}
      </div>
      <div className='flex items-center space-x-2'>
        {selectedPost && (
          <a
            target='_blank'
            href={selectedPost.githubUrl}
            title='View source on GitHub'
            className='p-2 rounded-md hover:bg-gray-800 hover:scale-105 hover:-translate-y-1 transition-all duration-200'>
            <GithubIcon />
          </a>
        )}
      </div>
    </div>
  );
}
