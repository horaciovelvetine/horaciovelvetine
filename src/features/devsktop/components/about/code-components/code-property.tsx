/**
 * A code property component that displays text with property-style syntax highlighting.
 *
 * Renders text with blue coloring and hover effects to simulate object properties,
 * method names, and other property identifiers in a syntax-highlighted code editor.
 * Used for displaying property names, object keys, and other property-related elements
 * within the code-themed interface.
 *
 * @param text - The property name text to display
 */
export function CodeProperty({ text }: { text: string }) {
	return (
		<span className='text-blue-400 hover:text-blue-300 transition-colors duration-200'>
			{text}
		</span>
	);
}
