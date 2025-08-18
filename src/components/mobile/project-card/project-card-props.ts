import type { ReactNode } from 'react';
import type { IconProps } from '../../../types';

/**
 * Props interface for the ProjectCard component that displays project information in a card format.
 *
 * The ProjectCard is designed to showcase individual projects with flexible display options
 * including thumbnails (either images or icons), descriptions, and navigation links. It supports
 * both external links and internal routing for comprehensive project presentation.
 */
export interface ProjectCardProps {
	title: string;
	description: string;
	thumbnailSrc?: string; // url to picture...
	ThumbnailIcon?: ({ size }: IconProps) => ReactNode;
	linkText?: string;
	linkURL?: string;
	pageLinkRoute?: string;
	pageLinkText?: string;
}
