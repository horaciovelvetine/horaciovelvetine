import { Link } from '@tanstack/react-router';
import type { ProjectCardProps } from './project-card-props';

/**
 * ProjectCard component for displaying project information in a mobile-friendly card layout.
 * Renders a project with optional thumbnail image or icon, title, description, and navigation links.
 *
 * @param {string} title - The project title to display
 * @param {string} props.description - The project description text
 * @param {string} [props.thumbnailSrc] - Optional URL to a thumbnail image
 * @param {({ size }: IconProps) => ReactNode} [props.ThumbnailIcon] - Optional icon component to display instead of image
 * @param {string} [props.linkText] - Optional text for external link
 * @param {string} [props.linkURL] - Optional URL for external link
 * @param {string} [props.pageLinkRoute] - Optional route for internal page navigation
 * @param {string} [props.pageLinkText] - Optional text for internal page link
 * @param {() => ReactNode[]} props.tools - the Tool Badge list to render
 * @returns JSX element containing the project card with thumbnail, content, and navigation links
 */
export function ProjectCard({
	title,
	description,
	thumbnailSrc,
	ThumbnailIcon,
	linkText,
	linkURL,
	pageLinkRoute,
	pageLinkText,
	tools,
}: ProjectCardProps) {
	return (
		<div className='overflow-hidden'>
			<div className='relative isolate'>
				<div className='mx-auto max-w-7xl sm:px-6 '>
					<div className='mx-auto flex flex-col gap-2 bg-stone-300/10 px-6 py-4 ring-1 ring-white/10 rounded-xl sm:p-8'>
						{/* THUMBNAILS */}
						{thumbnailSrc && (
							<img
								alt=''
								src={thumbnailSrc}
								className='h-auto w-full flex-none rounded-lg object-cover shadow-xl hover:shadow-2xl shadow-stone-300/5 hover:shadow-stone-300/15 transition-all duration-200 '
							/>
						)}
						<div className='flex w-full justify-center'>
							{ThumbnailIcon && (
								<ThumbnailIcon size={'size-48 xs:size-64 sm:size-72'} />
							)}
						</div>

						{/* TEXT */}
						<div className='w-full flex-auto'>
							<h2 className='text-2xl font-bold tracking-tighter text-pretty text-white xs:text-3xl sm:text-4xl'>
								{title}
							</h2>
							<p className='text-lg/6 text-pretty text-stone-300 tracking-tight'>
								{description}
							</p>

							{/* TOOL BADGES */}
							<div className='flex justify-center'>
								<div className='bg-zinc-950/30 rounded-lg px-3 py-3 ring ring-stone-300/10 mt-2 mb-3 shadow-2xl'>
									<h2 className='text-sm/4 xs:text-base/5 font-semibold text-stone-300 border-b-2 border-stone-300/30 w-fit'>
										Built Using:
									</h2>
									<ul
										role='list'
										className='flex flex-wrap my-1 gap-x-1'>
										{tools.map(ToolBadge => (
											<li
												key={crypto.randomUUID()}
												className='flex rounded-md shadow-xs'>
												<ToolBadge />
											</li>
										))}
									</ul>
								</div>
							</div>

							{/* LINK(S) */}
							<div className='flex items-center justify-center'>
								{linkURL && linkText && (
									<a
										href={linkURL}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-block text-blue-500 transition-all duration-100 hover:scale-105 hover:-translate-y-1 text-base xs:text-lg sm:text-xl font-semibold'>
										<span aria-hidden='true'>&rarr;</span> {linkText}
									</a>
								)}
								{pageLinkRoute && (
									<Link
										to={pageLinkRoute}
										className='inline-block text-blue-500 transition-all duration-100 hover:scale-105 hover:-translate-y-1 text-base xs:text-lg sm:text-xl font-semibold'>
										{pageLinkText}
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>

				{/* BG MASK */}
				<div
					aria-hidden='true'
					className='absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl'>
					<div
						style={{
							clipPath:
								'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
						}}
						className='aspect-1318/752 w-329.5 flex-none bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-30'
					/>
				</div>
			</div>
		</div>
	);
}
