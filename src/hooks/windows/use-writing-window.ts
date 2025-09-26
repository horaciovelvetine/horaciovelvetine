import { useCallback, useMemo, useState } from 'react';
import type {
	BlogPost,
	NavBarMenuChild,
	NavBarMenuParent,
	WindowIDs,
	WritingWindowState,
} from '../../types';
import { useBlogPosts } from '../writing/use-blog-posts';

export function useWritingWindow(): WritingWindowState {
	const windowID = 'writing-window';
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
							key: 'writing-settings',
							titleText: 'Home',
							hoverExplainer: 'Open the writing window and show the sidebar',
							onClickAction: () => {
								setSearchQuery('');
								setSelectedPost(null);
								setSelectedTags([]);
								setSidebarOpen(true);
								if (!isShown) openWindowByID(windowID);
							},
							displayMenuBreakAfter: true,
						},
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
					key: 'writing-file-menu',
					displayText: 'File',
					dropdownOptions: recentBlogPosts.map((post, index) =>
						createBlogDropdown(index, post, openWindowByID)
					),
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
