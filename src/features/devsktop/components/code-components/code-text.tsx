/**
 * A code text component that displays plain text with basic syntax highlighting.
 * 
 * Renders text with light gray coloring and hover effects to simulate regular text
 * content in a syntax-highlighted code editor. Used for displaying operators,
 * punctuation, and other neutral text elements within the code-themed interface.
 *
 * @param text - The text content to display
 */
export function CodeText({ text }: { text: string }) {
  return (
    <span className='text-gray-100 hover:text-white transition-colors duration-200'>
      {text}
    </span>
  );
}