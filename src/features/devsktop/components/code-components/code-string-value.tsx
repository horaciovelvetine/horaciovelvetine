/**
 * A code string value component that displays text with string-style syntax highlighting.
 * 
 * Renders text with green coloring and hover effects to simulate string values
 * in a syntax-highlighted code editor. Used for displaying string literals,
 * property values, and other text content within the code-themed interface.
 *
 * @param text - The string value text to display
 */
export function CodeStringValue({ text }: { text: string }) {
  return (
    <span className='text-green-400 hover:text-green-300 transition-colors duration-200'>
      {text}
    </span>
  );
}
