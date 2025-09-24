interface NoPostsToDisplayProps {
	show: boolean;
	activeSearch: boolean;
	tagSelected: boolean;
}

/**
 * Component that displays a message when there are no blog posts to show.
 * Handles different scenarios: no posts at all, no search results, or no posts matching a selected tag.
 *
 * @param props - The component props
 * @param props.show - Whether to display the component
 * @param props.searchActive - Whether a search is currently active
 * @param props.tagSelected - Whether a tag filter is currently selected
 * @returns JSX element with appropriate "no posts" message or empty fragment
 */
export function NoPostsToDisplay({
	show,
	activeSearch,
	tagSelected
}: NoPostsToDisplayProps) {
	const displayMessage =
		activeSearch ?
			'No posts match the current search.'
			: tagSelected ? 'No posts match the currently selected tag' : 'No posts to display';
	return show ?
		<div className='text-center py-6'>
			<p className='text-gray-400'>{displayMessage}</p>
		</div>
		: <></>;
}
