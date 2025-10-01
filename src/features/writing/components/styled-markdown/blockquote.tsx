import type { ExtraProps } from "react-markdown";

interface BlockquoteProps {
  children: React.ReactNode;
  props?: React.HTMLAttributes<HTMLQuoteElement> & ExtraProps;
}
/**
 * Blockquote Component
 * 
 * A custom blockquote component designed for use in markdown rendering that provides
 * enhanced styling for quoted content. This component is specifically used within
 * ReactMarkdown components to replace default blockquote tags with custom styling.
 * 
 * Features:
 * - Blue left border accent for visual emphasis
 * - Dark background with rounded corners for distinction
 * - Italic text styling for traditional quote formatting
 * - Proper padding and margin for content separation
 * - Compatible with react-markdown's component replacement system
 * 
 * @component
 * @param {BlockquoteProps} props - The component props
 * @param {React.ReactNode} props.children - The content to be displayed within the blockquote
 * @param {React.HTMLAttributes<HTMLQuoteElement> & ExtraProps} [props.props] - Additional HTML attributes and react-markdown extra props
 */

export function Blockquote({ children, props }: BlockquoteProps) {
  return (
    <blockquote
      className="border-l-4 border-blue-500 pl-4 py-2 mb-4 bg-stone-800/50 rounded-r-lg italic text-gray-300"
      {...props}
    >
      {children}
    </blockquote>
  );
}
