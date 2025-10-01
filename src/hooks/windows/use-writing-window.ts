import { useCallback, useMemo, useState } from 'react';
import type {
	BlogPost,
	NavBarMenuChild,
	NavBarMenuParent,
	WindowIDs,
	WritingWindowState,
} from '../../types';
import { useBlogPosts } from '../writing/use-blog-posts';
import { GH_NEW_ISSUES } from '../../consts/urls';

/**
 * Custom hook for managing the Writing window state and functionality.
 *
 * Provides comprehensive window management for the Writing/Blog section, including:
 * - Window display state (show/hide, z-index, focus)
 * - Sidebar and post selection state
 * - Search and tag filtering for blog posts
 * - Recent blog post menu generation for navigation bar
 * - Integration with the blog post data source
 * - Menu item configuration for navigation bar
 *
 * @returns {WritingWindowState} Complete window state object containing:
 *   - Basic window management (show/hide, z-index, title, etc.)
 *   - Sidebar and post selection controls
 *   - Search and tag filter state
 *   - Recent blog post menu items for navigation
 *   - Integrated blog post state and controls
 */

export function useWritingWindow(): WritingWindowState {
	const windowID: WindowIDs = 'writing-window';
	const title = 'Writing';
	const [zIndex, setZIndex] = useState('0');
	const [isFocused, setIsFocused] = useState(false);
	const [isShown, setIsShown] = useState(false);

	const [sidebarOpen, setSidebarOpen] = useState(true);
	const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedTags, setSelectedTags] = useState<string[]>([]);

	const postsState = useBlogPosts();

	const closeWindowCallback = useCallback(() => {
		setSidebarOpen(true);
		setSelectedPost(null);
		setSearchQuery('');
		setSelectedTags([]);
	}, []);

	const recentBlogPosts = useMemo(
		() => postsState.getAllBlogPosts().slice(0, 5),
		[postsState]
	);

	const createBlogDropdown = useCallback(
		(
			index: number,
			post: BlogPost,
			openWindowByID: (windowID: WindowIDs) => void
		): NavBarMenuChild => {
			return {
				key: `recent-post-${index.toString()}`,
				displaySectionHeader: index === 0 ? 'Recent Posts' : undefined,
				titleText: post.title,
				hoverExplainer: post.description,
				onClickAction: () => {
					setSelectedPost(post);
					if (!isShown) openWindowByID(windowID);
					if (sidebarOpen) setSidebarOpen(false);
					setSearchQuery('');
					setSelectedTags([]);
				},
			};
		},
		[isShown, sidebarOpen, windowID]
	);

	const navBarMenuItems = useCallback(
		(openWindowByID: (windowID: WindowIDs) => void): NavBarMenuParent[] => {
			return [
				{
					key: 'writing-menu',
					displayText: 'Writing',
					isAppTitledDisplayText: true,
					dropdownOptions: [
						{
							key: 'show-writing-window',
							titleText: 'Show Writing Window',
							isDisabled: isFocused && isShown,
							hoverExplainer:
								'Show or focus the Writing window on top of the devsktop',
							onClickAction: () => {
								openWindowByID('writing-window');
							},
						},
					],
				},
				{
					key: 'writing-file-menu',
					displayText: 'File',
					dropdownOptions: recentBlogPosts.map((post, index) =>
						createBlogDropdown(index, post, openWindowByID)
					),
				},
				{
					key: 'writing-view-menu',
					displayText: 'View',
					dropdownOptions: [
						{
							key: 'open-sidebar-menu',
							titleText: sidebarOpen ? 'Hide Sidebar' : 'Show Sidebar',
							hoverExplainer: `${sidebarOpen ? 'Hide' : 'Show'} the sidebar menu for the window`,
							onClickAction: () => {
								if (!isShown) openWindowByID(windowID);
								setSidebarOpen(prev => !prev);
							},
						},
					],
				},
				{
					key: 'about-help',
					displayText: 'Help',
					dropdownOptions: [
						{
							key: 'contact',
							titleText: 'Contact',
							hoverExplainer: 'Get in touch with @horaciovelvetine',
							onClickAction: () => {
								openWindowByID('contact-window');
							},
							displayMenuBreakAfter: true,
						},
						{
							key: 'submit-issue',
							titleText: 'Submit Github Issue',
							hoverExplainer: 'Let me know about any issues on the site',
							onClickAction: () => {
								window.open(GH_NEW_ISSUES, '_blank');
							},
						},
					],
				},
			];
		},
		[createBlogDropdown, isShown, recentBlogPosts, sidebarOpen]
	);

	return {
		id: windowID,
		title,
		zIndex,
		setZIndex,
		navBarMenuItems,
		isShown,
		setIsShown,
		isFocused,
		setIsFocused,
		closeWindowCallback,
		sidebarOpen,
		setSidebarOpen,
		selectedPost,
		setSelectedPost,
		searchQuery,
		setSearchQuery,
		selectedTags,
		setSelectedTags,
		...postsState,
	};
}
