import type { ExtraProps } from 'react-markdown';

interface LinkProps {
	href?: string;
	children: React.ReactNode;
	props?: React.HTMLAttributes<HTMLAnchorElement> & ExtraProps;
}

/**
 * Link Component
 *
 * A custom link component designed for use in markdown rendering that provides
 * enhanced styling and behavior for external links. This component is specifically
 * used within ReactMarkdown components to replace default anchor tags.
 *
 * Features:
 * - Opens external links in new tabs with security attributes
 * - Hover animations with scale and translate effects
 * - Blue color theme consistent with site design
 * - Smooth transitions for enhanced user experience
 * - Compatible with react-markdown's component replacement system
 *
 * @component
 * @param {LinkProps} props - The component props
 * @param {string} [props.href] - The URL the link should navigate to
 * @param {React.ReactNode} props.children - The content to be displayed as the link text
 * @param {React.HTMLAttributes<HTMLAnchorElement> & ExtraProps} [props.props] - Additional HTML attributes and react-markdown extra props
 */
/**
 * Link component for rendering styled anchor elements in markdown content.
 *
 * @param {LinkProps} props - The props for the Link component
 * @param {string} [props.href] - The URL the link should navigate to
 * @param {React.ReactNode} props.children - The content to be displayed as the link text
 * @param {React.HTMLAttributes<HTMLAnchorElement> & ExtraProps} [props.props] - Additional HTML attributes and react-markdown extra props
 */
export function Link({ href, children, props }: LinkProps) {
	return (
		<a
			href={href}
			className='inline-block text-blue-500 transition-all duration-100 hover:scale-105 hover:-translate-y-1'
			target='_blank'
			rel='noopener noreferrer'
			{...props}>
			{children}
		</a>
	);
}
