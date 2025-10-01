import type {
  BlogPost,
  SiteSettings,
  WritingWindowState,
} from '../../../../types';
import { formatNumbersDateString } from '../../../../functions';
import { TagBadge } from '../tag-badge';

interface SBItemProps {
  post: BlogPost;
  siteSettings: SiteSettings;
  windowState: WritingWindowState;
}

/**
 * WritingSidebarItem Component
 *
 * A clickable sidebar item component that displays individual blog post information
 * within the writing window's sidebar. Provides post selection functionality and
 * interactive tag filtering capabilities for the desktop writing interface.
 *
 * Features:
 * - Clickable post selection with visual active state indicators
 * - Toggle behavior for selecting/deselecting posts in the main content area
 * - Interactive tag badges that add tags to the global filter state
 * - Hover effects and visual feedback for better user experience
 * - Responsive design with consistent spacing and typography
 * - Integration with the writing window state for post and tag management
 * - Visual highlighting of the currently selected post with blue accent styling
 *
 * The component handles both post selection (for viewing content) and tag filtering
 * (for narrowing down the posts list) through separate click handlers that interact
 * with the WritingWindowState to maintain application state consistency.
 *
 * @component
 * @param {SBItemProps} props - The component props
 * @param {BlogPost} props.post - The blog post data to display in the sidebar item
 * @param {SiteSettings} props.siteSettings - Site configuration including accent colors for tag styling
 * @param {WritingWindowState} props.windowState - The writing window state containing selection and filter management
 */
export function WritingSidebarItem({
  post,
  siteSettings,
  windowState,
}: SBItemProps) {
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
  const handleSelectTagClick = (target: string) => {
    if (windowState.selectedTags.find(tag => tag === target)) return;
    windowState.setSelectedTags(prev => [...prev, target]);
  };

  /**
   * Handles post selection when a post item is clicked
   *
   * Toggles the selected post state - if the clicked post is already selected,
   * it deselects it by setting selectedPost to null. Otherwise, it selects
   * the clicked post. This allows users to both select and deselect posts
   * from the sidebar for viewing in the main content area.
   */
  const handlePostClick = () => {
    if (
      windowState.selectedPost &&
      windowState.selectedPost.slug === post.slug
    ) {
      windowState.setSelectedPost(null);
    } else {
      windowState.setSelectedPost(post);
    }
  };

  return (
    <div
      className={`py-1 px-2 hover:bg-gray-700 transition-colors duration-100 ${windowState.selectedPost?.slug === post.slug ?
          'bg-blue-900/20 border-r-2 border-blue-500'
          : ''
        }`}>
      <div
        key={post.slug}
        onClick={handlePostClick}
        className={`w-full text-left hover:bg-gray-700 transition-colors`}>
        <div className='space-y-1'>
          <h4 className='font-medium text-white text-sm leading-tight'>
            {post.title}
          </h4>
          <p className='text-xs text-gray-400'>
            {formatNumbersDateString(post.publishedDate)}
          </p>
          <p className='text-sm text-gray-300 line-clamp-2'>
            {post.description}
          </p>
          <div className='flex flex-wrap mt-2'>
            {post.tags.map(tag => (
              <TagBadge
                key={`${tag}-tag-filter`}
                text={tag}
                accentColor={siteSettings.accentColor}
                onClick={handleSelectTagClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
