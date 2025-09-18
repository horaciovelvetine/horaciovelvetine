import type { ExtraProps } from 'react-markdown';

interface CodeBlockProps {
	className?: string;
	children: React.ReactNode;
	props?: React.HTMLAttributes<HTMLElement> & ExtraProps;
}

/**
 * CodeBlock Component
 *
 * A custom code block component designed for use in markdown rendering that provides
 * enhanced styling and behavior for both inline and block code elements. This component
 * is specifically used within ReactMarkdown components to replace default code tags.
 *
 * Features:
 * - Automatically detects inline vs block code based on language class presence
 * - Responsive text sizing (xs:text-sm sm:text-base) for optimal readability
 * - Dark theme styling with stone color palette
 * - Horizontal scrolling for long code blocks
 * - Monospace font family for code readability
 * - Border and padding for visual separation
 * - Compatible with syntax highlighting via rehype-highlight
 *
 * @component
 * @param {CodeBlockProps} props - The component props
 * @param {string} [props.className] - CSS class name, typically containing language info (e.g., "language-javascript")
 * @param {React.ReactNode} props.children - The code content to be displayed
 * @param {React.HTMLAttributes<HTMLElement> & ExtraProps} [props.props] - Additional HTML attributes and react-markdown extra props
 */
export function CodeBlock({ className, children, props }: CodeBlockProps) {
	const match = /language-(\w+)/.exec(className ?? '');
	const isInline = !match;
	return !isInline ?
			<pre className='code-block-scrollable bg-stone-800 rounded-lg p-4 overflow-x-auto border border-stone-700 text-xs xs:text-sm sm:text-base font-mono'>
				<code
					className={className}
					{...props}>
					{children}
				</code>
			</pre>
		:	<code
				className='bg-stone-800 px-1.5 py-0.5 rounded text-xs xs:text-sm sm:text-base font-mono'
				{...props}>
				{children}
			</code>;
}
