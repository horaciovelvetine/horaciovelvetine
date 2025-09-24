import type { Dispatch, SetStateAction } from 'react';
import type { ManagedWindow } from '../site/managed-window';
import type { BlogPost } from './blog-post';
import type { BlogPosts } from './blog-posts';

/**
 * Interface representing the complete window state for a Writing/Blog window
 *
 * This interface extends ManagedWindow to create a comprehensive window management
 * system that contains and manages a blog reading interface. It combines window-level
 * functionality (positioning, visibility, focus) with blog-specific state management
 * including sidebar controls, post selection, search functionality, and tag filtering.
 *
 * @interface
 * @extends {ManagedWindow} - Provides window management functionality (position, size, focus, etc.)
 * @property {boolean} sidebarOpen - Controls visibility of the sidebar containing the posts list
 * @property {Dispatch<SetStateAction<boolean>>} setSidebarOpen - React state setter for sidebar visibility
 * @property {BlogPost | null} selectedPost - Currently selected blog post for display, null if none selected
 * @property {Dispatch<SetStateAction<BlogPost | null>>} setSelectedPost - React state setter for selected post
 * @property {string} searchQuery - Current search query string for filtering posts
 * @property {Dispatch<SetStateAction<string>>} setSearchQuery - React state setter for search query
 * @property {string[]} selectedTags - Array of currently selected tag filters for post filtering
 * @property {Dispatch<SetStateAction<string[]>>} setSelectedTags - React state setter for selected tag filters
 */

export interface WritingWindowState extends ManagedWindow, BlogPosts {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  selectedPost: BlogPost | null;
  setSelectedPost: Dispatch<SetStateAction<BlogPost | null>>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  selectedTags: string[];
  setSelectedTags: Dispatch<SetStateAction<string[]>>;
}
