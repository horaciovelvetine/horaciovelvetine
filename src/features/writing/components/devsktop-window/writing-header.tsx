import { GithubIcon, MenuBarsIcon } from '../../../../assets';
import type { BlogPost, WritingWindowState } from '../../../../types';
import { formatNumbersDateString } from '../../../../functions';

interface WritingHeaderProps {
	windowState: WritingWindowState;
	selectedPost: BlogPost | null;
	isCompactLayout: boolean;
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
	isCompactLayout,
}: WritingHeaderProps) {
	return (
		<header className='flex items-start justify-between gap-3 border-b border-white/8 bg-zinc-950/90 px-3 py-3 backdrop-blur-xl'>
			<div className='flex min-w-0 flex-1 items-start gap-3'>
				<button
					type='button'
					onClick={() => {
						windowState.setSidebarOpen(prev => !prev);
					}}
					className='mt-0.5 rounded-xl border border-white/8 bg-white/[0.03] p-2 text-white/80 transition-colors hover:bg-white/[0.08]'
					aria-label={`${windowState.sidebarOpen ? 'Hide' : 'Show'} writing sidebar`}>
					<MenuBarsIcon size='size-5' />
				</button>

				<div className='min-w-0 flex-1'>
					{selectedPost ?
						<>
							<h1 className='truncate text-base font-semibold text-white sm:text-lg'>
								{selectedPost.title}
							</h1>
							<p className='truncate text-xs text-stone-400 sm:text-sm'>
								{formatNumbersDateString(selectedPost.publishedDate)}
							</p>
						</>
					:	<>
							<h1 className='text-base font-semibold text-white sm:text-lg'>
								Writing Library
							</h1>
							<p className='text-xs text-stone-400 sm:text-sm'>
								{isCompactLayout ?
									'Open the sidebar to browse posts and tags.'
								:	'Browse posts in the sidebar and open one to start reading.'}
							</p>
						</>
					}
				</div>
			</div>

			<div className='flex items-center gap-2'>
				{selectedPost && (
					<a
						target='_blank'
						href={selectedPost.githubUrl}
						title='View source on GitHub'
						rel='noopener noreferrer'
						className='rounded-xl border border-white/8 bg-white/[0.03] p-2 text-white/80 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.08] hover:text-white'>
						<GithubIcon />
					</a>
				)}
			</div>
		</header>
	);
}
