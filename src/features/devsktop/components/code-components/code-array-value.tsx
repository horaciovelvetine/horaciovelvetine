/**
 * A code array value component that displays text with array-style syntax highlighting.
 * 
 * Renders text with yellow coloring and hover effects to simulate array values, brackets,
 * and string literals within arrays in a syntax-highlighted code editor. Used for displaying
 * array elements, brackets, and string values within the code-themed interface.
 *
 * @param text - The array value text to display (e.g., '"item"', '[', ']')
 */
export function CodeArrayValue({ text }: { text: string }) {
	return (
		<span className='text-yellow-400 hover:text-yellow-300 transition-colors duration-200'>
			{text}
		</span>
	);
}
