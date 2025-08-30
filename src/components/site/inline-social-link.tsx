import type { ReactNode } from 'react';
import type { IconProps } from '../../types';

interface InlineSocialLinkProps {
	text: string;
	href: string;
	SocialIcon: (props: IconProps) => ReactNode;
	iconStyle?: string;
	iconSize?: string;
}

/**
 * InlineSocialLink component for displaying social media links with icons.
 *
 * Renders a clickable link that opens in a new tab, featuring an arrow indicator,
 * text label, and social media icon. Includes hover animations for enhanced
 * user interaction feedback.
 *
 * @param {string} props.text - The display text for the social media platform
 * @param {string} props.href - The URL to the social media profile or page
 * @param {(props: IconProps) => ReactNode} SocialIcon - Icon component to display for the social platform
 * @param {string} [props.iconStyle=' '] - Optional CSS classes for styling the icon (default: ' ')
 * @param {string} [props.iconSize='size-6'] - Optional size classes for the icon (default: 'size-6')
 * @returns JSX element containing the social media link with icon and hover effects
 */

export function InlineSocialLink({
	text,
	href,
	SocialIcon,
	iconStyle = ' ',
	iconSize = 'size-6',
}: InlineSocialLinkProps) {
	return (
		<a
			className='inline-flex gap-1 text-blue-500 transition-all duration-100 hover:scale-105 hover:-translate-y-1'
			target='_blank'
			rel='noopener noreferrer'
			href={href}>
			<span aria-hidden='true'>&rarr;</span>
			{text}
			<SocialIcon
				classes={iconStyle}
				size={iconSize}
				ariaHidden={true}
			/>
		</a>
	);
}
