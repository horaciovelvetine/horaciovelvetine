import { useCallback, useState } from 'react';
import type {
	BlogPost,
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
		setSidebarOpen(true)
		setSelectedPost(null);
		setSearchQuery('')
		setSelectedTags([]);
	}, []);

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
							titleText: 'Settings',
							hoverExplainer: 'Open the Settings menu for the Writing window',
							onClickAction: () => {
								if (!isShown) openWindowByID(windowID);
							},
						},
					],
				},
			];
		},
		[isShown]
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
		...postsState
	};
}
