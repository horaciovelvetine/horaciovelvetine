import type { ReactNode } from 'react';

interface CodeLineProps {
	children: ReactNode;
	indent?: number;
}

/**
 * A code line wrapper component that provides consistent styling and indentation for code display.
 *
 * This component renders a styled container for code content with configurable indentation levels,
 * hover effects, and responsive spacing. It's designed to be used within code block displays
 * to maintain consistent visual hierarchy and formatting.
 *
 * @param {ReactNode} children - The content to be rendered within the code line
 * @param {number} [props.indent=0] - The indentation level (0-4), where each level adds responsive margin-left spacing
 */
export function CodeLine({ children, indent = 0 }: CodeLineProps) {
	const indentStyle =
		indentClassStyles[indent as keyof typeof indentClassStyles];

	return (
		<div
			className={`${indentStyle || ''} leading-relaxed hover:bg-gray-800/30 transition-colors duration-200 rounded px-1 -mx-1 min-w-124`}>
			{children}
		</div>
	);
}

const indentClassStyles = {
	0: '',
	1: 'ml-4 sm:ml-6 lg:ml-8',
	2: 'ml-8 sm:ml-12 lg:ml-16',
	3: 'ml-12 sm:ml-18 lg:ml-24',
	4: 'ml-16 sm:ml-24 lg:ml-32',
} as const;
