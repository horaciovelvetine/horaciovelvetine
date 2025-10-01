import type { ExtraProps } from 'react-markdown';

interface HeadingProps {
	children: React.ReactNode;
	props?: React.HTMLAttributes<HTMLHeadingElement> & ExtraProps;
}

/**
 * H1 Component
 *
 * A custom level 1 heading component designed for use in markdown rendering that provides
 * enhanced styling for main titles. This component is specifically used within
 * ReactMarkdown components to replace default h1 tags with custom styling.
 *
 * Features:
 * - Large font size (3xl) for primary heading prominence
 * - Bold weight for visual hierarchy
 * - Bottom border with stone-700 color for visual separation
 * - Generous margins for proper content spacing
 * - White text color for dark theme compatibility
 * - Compatible with react-markdown's component replacement system
 *
 * @component
 * @param {HeadingProps} props - The component props
 * @param {React.ReactNode} props.children - The heading text content
 * @param {React.HTMLAttributes<HTMLHeadingElement> & ExtraProps} [props.props] - Additional HTML attributes and react-markdown extra props
 */
export function H1({ children, props }: HeadingProps) {
	return (
		<h1
			className='text-3xl font-bold text-white border-b py-1'
			{...props}>
			{children}
		</h1>
	);
}

/**
 * H2 Component
 *
 * A custom level 2 heading component designed for use in markdown rendering that provides
 * enhanced styling for section titles. This component is specifically used within
 * ReactMarkdown components to replace default h2 tags with custom styling.
 *
 * Features:
 * - Medium-large font size (2xl) for section heading prominence
 * - Bold weight for visual hierarchy
 * - Balanced margins for proper content spacing
 * - White text color for dark theme compatibility
 * - Compatible with react-markdown's component replacement system
 *
 * @component
 * @param {HeadingProps} props - The component props
 * @param {React.ReactNode} props.children - The heading text content
 * @param {React.HTMLAttributes<HTMLHeadingElement> & ExtraProps} [props.props] - Additional HTML attributes and react-markdown extra props
 */
export function H2({ children, props }: HeadingProps) {
	return (
		<h2
			className='text-2xl font-bold text-white border-b'
			{...props}>
			{children}
		</h2>
	);
}

/**
 * H3 Component
 *
 * A custom level 3 heading component designed for use in markdown rendering that provides
 * enhanced styling for subsection titles. This component is specifically used within
 * ReactMarkdown components to replace default h3 tags with custom styling.
 *
 * Features:
 * - Medium font size (xl) for subsection heading prominence
 * - Bold weight for visual hierarchy
 * - Moderate margins for proper content spacing
 * - White text color for dark theme compatibility
 * - Compatible with react-markdown's component replacement system
 *
 * @component
 * @param {HeadingProps} props - The component props
 * @param {React.ReactNode} props.children - The heading text content
 * @param {React.HTMLAttributes<HTMLHeadingElement> & ExtraProps} [props.props] - Additional HTML attributes and react-markdown extra props
 */
export function H3({ children, props }: HeadingProps) {
	return (
		<h3
			className='text-xl font-bold text-white border-b'
			{...props}>
			{children}
		</h3>
	);
}

/**
 * H4 Component
 *
 * A custom level 4 heading component designed for use in markdown rendering that provides
 * enhanced styling for minor subsection titles. This component is specifically used within
 * ReactMarkdown components to replace default h4 tags with custom styling.
 *
 * Features:
 * - Slightly larger font size (lg) for minor heading prominence
 * - Bold weight for visual hierarchy
 * - Compact margins for proper content spacing
 * - White text color for dark theme compatibility
 * - Compatible with react-markdown's component replacement system
 *
 * @component
 * @param {HeadingProps} props - The component props
 * @param {React.ReactNode} props.children - The heading text content
 * @param {React.HTMLAttributes<HTMLHeadingElement> & ExtraProps} [props.props] - Additional HTML attributes and react-markdown extra props
 */
export function H4({ children, props }: HeadingProps) {
	return (
		<h4
			className='text-lg font-bold text-white border-b'
			{...props}>
			{children}
		</h4>
	);
}
