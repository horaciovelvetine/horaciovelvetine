/**
 * Bracket components that display curly braces with syntax highlighting.
 *
 * These components render opening and closing curly braces with light gray coloring
 * and hover effects to simulate bracket syntax in a code editor. Used for displaying
 * object literals, function bodies, and other block structures within the code-themed interface.
 */
export function OpenBracket() {
	return (
		<span className='text-gray-100 hover:text-white transition-colors duration-200'>
			{'{'}
		</span>
	);
}

/**
 * Bracket components that display curly braces with syntax highlighting.
 *
 * These components render opening and closing curly braces with light gray coloring
 * and hover effects to simulate bracket syntax in a code editor. Used for displaying
 * object literals, function bodies, and other block structures within the code-themed interface.
 */
export function CloseBracket() {
	return (
		<span className='text-gray-100 hover:text-white transition-colors duration-200'>
			{'}'}
		</span>
	);
}
