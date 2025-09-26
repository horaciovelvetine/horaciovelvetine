/**
 * A code class component that displays text with class-style syntax highlighting.
 *
 * Renders text with cyan coloring and bold font weight to simulate class names,
 * constructors, and type definitions in a syntax-highlighted code editor. Used for
 * displaying class identifiers, component names, and other type-related elements
 * within the code-themed interface.
 *
 * @param text - The class name text to display
 */
export function CodeClass({ text }: { text: string }) {
	return (
		<span className='text-cyan-400 font-semibold hover:text-cyan-300 transition-colors duration-200'>
			{text}
		</span>
	);
}
