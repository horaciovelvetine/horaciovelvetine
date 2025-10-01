import type { ExtraProps } from 'react-markdown';

interface ListProps {
	children: React.ReactNode;
	props?: React.HTMLAttributes<HTMLUListElement> & ExtraProps;
}

interface OrderedListProps {
	children: React.ReactNode;
	props?: React.HTMLAttributes<HTMLOListElement> & ExtraProps;
}

interface ListItemProps {
	children: React.ReactNode;
	props?: React.HTMLAttributes<HTMLLIElement> & ExtraProps;
}

/**
 * UL Component
 *
 * A custom unordered list component designed for use in markdown rendering that provides
 * enhanced styling for list content. This component is specifically used within
 * ReactMarkdown components to replace default ul tags with custom styling.
 *
 * Features:
 * - Disc-style bullet points for visual hierarchy
 * - Consistent spacing with vertical gaps between items
 * - Left margin and indentation for proper list structure
 * - Light gray text color for readability
 * - Bottom margin for content separation
 * - Compatible with react-markdown's component replacement system
 *
 * @component
 * @param {ListProps} props - The component props
 * @param {React.ReactNode} props.children - The list items (li elements)
 * @param {React.HTMLAttributes<HTMLUListElement> & ExtraProps} [props.props] - Additional HTML attributes and react-markdown extra props
 */
export function UL({ children, props }: ListProps) {
	return (
		<ul
			className='mb-4 ml-6 list-disc space-y-1 text-gray-100'
			{...props}>
			{children}
		</ul>
	);
}

/**
 * OL Component
 *
 * A custom ordered list component designed for use in markdown rendering that provides
 * enhanced styling for numbered list content. This component is specifically used within
 * ReactMarkdown components to replace default ol tags with custom styling.
 *
 * Features:
 * - Decimal numbering for ordered items
 * - Consistent spacing with vertical gaps between items
 * - Left margin and indentation for proper list structure
 * - Light gray text color for readability
 * - Bottom margin for content separation
 * - Compatible with react-markdown's component replacement system
 *
 * @component
 * @param {OrderedListProps} props - The component props
 * @param {React.ReactNode} props.children - The list items (li elements)
 * @param {React.HTMLAttributes<HTMLOListElement> & ExtraProps} [props.props] - Additional HTML attributes and react-markdown extra props
 */
export function OL({ children, props }: OrderedListProps) {
	return (
		<ol
			className='mb-4 ml-6 list-decimal space-y-1 text-gray-100'
			{...props}>
			{children}
		</ol>
	);
}

/**
 * LI Component
 *
 * A custom list item component designed for use in markdown rendering that provides
 * enhanced styling for individual list items. This component is specifically used within
 * ReactMarkdown components to replace default li tags with custom styling.
 *
 * Features:
 * - Light gray text color for consistent readability
 * - Compatible with both ordered and unordered lists
 * - Maintains proper text flow and spacing
 * - Compatible with react-markdown's component replacement system
 *
 * @component
 * @param {ListItemProps} props - The component props
 * @param {React.ReactNode} props.children - The list item content
 * @param {React.HTMLAttributes<HTMLLIElement> & ExtraProps} [props.props] - Additional HTML attributes and react-markdown extra props
 */
export function LI({ children, props }: ListItemProps) {
	return (
		<li
			className='text-gray-100'
			{...props}>
			{children}
		</li>
	);
}
