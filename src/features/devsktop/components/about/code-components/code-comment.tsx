/**
 * A code comment component that displays text with comment-style styling.
 * 
 * Renders text with gray coloring and hover effects to simulate code comments
 * in a syntax-highlighted editor. Used for displaying JSDoc comments, inline
 * comments, and other documentation within the code-themed interface.
 *
 * @param text - The comment text to display
 */
export function CodeComment({ text }: { text: string }) {
  return (
    <span className='text-gray-500 hover:text-gray-400 transition-colors duration-200'>
      {text}
    </span>
  );
}
