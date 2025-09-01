import type { ReactNode } from 'react';
import type { IconProps } from '../../../types';
import { Link } from '@tanstack/react-router';

interface ProjectThumbnailProps {
	pageLink?: string;
	ThumbnailIcon?: (props: IconProps) => ReactNode;
	thumbnailSource?: string;
	hrefLink?: string;
}

/**
 * ProjectThumbnail component renders a clickable thumbnail for a project card.
 * Supports both external links and internal routing with either image thumbnails or icon components.
 *
 * @param {string} [props.pageLink] - Optional internal route for navigation using React Router Link
 * @param {(props: IconProps) => ReactNode} [props.ThumbnailIcon] - Optional icon component to display as thumbnail
 * @param {string} [props.thumbnailSource] - Optional URL to thumbnail image
 * @param {string} [props.hrefLink] - Optional external URL for navigation using anchor tag
 * @returns JSX element containing a clickable thumbnail with appropriate navigation behavior
 */

export function ProjectThumbnail({
	pageLink,
	ThumbnailIcon,
	thumbnailSource,
	hrefLink,
}: ProjectThumbnailProps) {
	return (
		<>
			{hrefLink && (
				<a
					href={hrefLink}
					target='_blank'
					rel='noopener noreferrer'>
					<ThumbnailImage
						thumbnailSource={thumbnailSource}
						ThumbnailIcon={ThumbnailIcon}
					/>
				</a>
			)}
			{pageLink && (
				<Link
					to={pageLink}
					className='flex w-full justify-center'>
					<ThumbnailImage
						thumbnailSource={thumbnailSource}
						ThumbnailIcon={ThumbnailIcon}
					/>
				</Link>
			)}
		</>
	);
}

/**
 * ThumbnailImage component renders the visual thumbnail content for a project.
 * Displays either an image thumbnail or an icon component with consistent styling.
 *
 * @param {string} [props.thumbnailSource] - Optional URL to thumbnail image
 * @param {(props: IconProps) => ReactNode} [props.ThumbnailIcon] - Optional icon component to display as thumbnail
 * @returns JSX element containing either an img element or icon component with hover effects
 */

function ThumbnailImage({
	thumbnailSource,
	ThumbnailIcon,
}: ProjectThumbnailProps) {
	return (
		<>
			{thumbnailSource && (
				<img
					src={thumbnailSource}
					className='h-auto w-full flex-none rounded-lg object-cover shadow-xl hover:shadow-2xl shadow-stone-300/5 hover:shadow-stone-300/15 transition-all duration-200'
				/>
			)}
			{ThumbnailIcon && <ThumbnailIcon size='size-48 xs:size-64 sm:size-72' />}
		</>
	);
}
