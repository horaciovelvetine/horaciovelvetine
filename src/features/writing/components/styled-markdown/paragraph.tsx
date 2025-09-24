import type { ExtraProps } from 'react-markdown';

interface ParagraphProps {
	children: React.ReactNode;
	props?: React.HTMLAttributes<HTMLParagraphElement> & ExtraProps;
}

/**
 * Paragraph Component
 *
 * A custom paragraph component designed for use in markdown rendering that provides
 * enhanced styling for text content. This component is specifically used within
 * ReactMarkdown components to replace default paragraph tags with custom styling.
 *
 * Features:
 * - Consistent text color and spacing for readable content
 * - Relaxed line height for improved readability
 * - Proper bottom margin for content separation
 * - Compatible with react-markdown's component replacement system
 *
 * @component
 * @param {ParagraphProps} props - The component props
 * @param {React.ReactNode} props.children - The content to be displayed within the paragraph
 * @param {React.HTMLAttributes<HTMLParagraphElement> & ExtraProps} [props.props] - Additional HTML attributes and react-markdown extra props
 */
export function Paragraph({ children, props }: ParagraphProps) {
	return (
		<p
			className='my-2 leading-relaxed text-gray-100'
			{...props}>
			{children}
		</p>
	);
}
