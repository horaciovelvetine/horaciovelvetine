/**
 * Renders a syntax-highlighted keyword with appropriate styling for code display
 *
 * This component is used within the code editor theme to display programming keywords
 * (such as 'class', 'constructor', etc.) with purple syntax highlighting that matches
 * typical code editor color schemes. Includes hover effects for enhanced interactivity.
 *
 * @component
 * @param {Object} props - The component props
 * @param {string} props.text - The keyword text to display
 */
export function CodeKeyword({ text }: { text: string }) {
  return (
    <span className='text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-200'>
      {text}
    </span>
  );
}