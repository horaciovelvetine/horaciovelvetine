import type { ExtraProps } from 'react-markdown';

interface HRProps {
	props?: React.HTMLAttributes<HTMLHRElement> & ExtraProps;
}

/**
 * HR Component
 *
 * A custom horizontal rule component designed for use in markdown rendering that provides
 * enhanced styling for content separation. This component is specifically used within
 * ReactMarkdown components to replace default hr tags with custom styling.
 *
 * Features:
 * - Consistent visual separation between content sections
 * - Dark theme styling with stone-700 border color
 * - Generous vertical margins for proper content spacing
 * - Compatible with react-markdown's component replacement system
 *
 * @component
 * @param {HRProps} props - The component props
 * @param {React.HTMLAttributes<HTMLHRElement> & ExtraProps} [props.props] - Additional HTML attributes and react-markdown extra props
 */

export function HR({ props }: HRProps) {
	return (
		<hr
			className='my-8 border-stone-700'
			{...props}
		/>
	);
}
