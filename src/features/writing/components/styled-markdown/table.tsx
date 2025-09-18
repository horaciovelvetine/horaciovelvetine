import type { ExtraProps } from "react-markdown";

interface TableProps {
  children: React.ReactNode;
  props?: React.HTMLAttributes<HTMLTableElement> & ExtraProps;
}

interface TableHeaderProps {
  children: React.ReactNode;
  props?: React.HTMLAttributes<HTMLTableCellElement> & ExtraProps;
}

interface TableCellProps {
  children: React.ReactNode;
  props?: React.HTMLAttributes<HTMLTableCellElement> & ExtraProps;
}

/**
 * Table Component
 *
 * A custom table component designed for use in markdown rendering that provides
 * enhanced styling for tabular data. This component is specifically used within
 * ReactMarkdown components to replace default table tags with custom styling.
 *
 * Features:
 * - Responsive design with horizontal scrolling on overflow
 * - Dark theme styling with stone-700 borders
 * - Full-width layout with proper border collapse
 * - Bottom margin for content separation
 * - Compatible with react-markdown's component replacement system
 *
 * @component
 * @param {TableProps} props - The component props
 * @param {React.ReactNode} props.children - The table content (tbody, thead, etc.)
 * @param {React.HTMLAttributes<HTMLTableElement> & ExtraProps} [props.props] - Additional HTML attributes and react-markdown extra props
 */
export function Table({ children, props }: TableProps) {
  return (
    <div className="overflow-x-auto mb-4">
      <table
        className="min-w-full border-collapse border border-stone-700"
        {...props}
      >
        {children}
      </table>
    </div>
  );
}

/**
 * TH Component
 *
 * A custom table header cell component designed for use in markdown rendering that provides
 * enhanced styling for table headers. This component is specifically used within
 * ReactMarkdown components to replace default th tags with custom styling.
 *
 * Features:
 * - Dark background (stone-800) for header distinction
 * - Bold white text for visibility and hierarchy
 * - Consistent padding and borders matching table styling
 * - Left-aligned text for readability
 * - Compatible with react-markdown's component replacement system
 *
 * @component
 * @param {TableHeaderProps} props - The component props
 * @param {React.ReactNode} props.children - The header cell content
 * @param {React.HTMLAttributes<HTMLTableCellElement> & ExtraProps} [props.props] - Additional HTML attributes and react-markdown extra props
 */
export function TH({ children, props }: TableHeaderProps) {
  return (
    <th
      className="border border-stone-700 px-4 py-2 bg-stone-800 font-bold text-white text-left"
      {...props}
    >
      {children}
    </th>
  );
}

/**
 * TD Component
 *
 * A custom table data cell component designed for use in markdown rendering that provides
 * enhanced styling for table content. This component is specifically used within
 * ReactMarkdown components to replace default td tags with custom styling.
 *
 * Features:
 * - Consistent padding and borders matching table styling
 * - Light gray text (gray-100) for readability on dark backgrounds
 * - Proper spacing for content legibility
 * - Compatible with react-markdown's component replacement system
 *
 * @component
 * @param {TableCellProps} props - The component props
 * @param {React.ReactNode} props.children - The cell content
 * @param {React.HTMLAttributes<HTMLTableCellElement> & ExtraProps} [props.props] - Additional HTML attributes and react-markdown extra props
 */
export function TD({ children, props }: TableCellProps) {
  return (
    <td
      className="border border-stone-700 px-4 py-2 text-gray-100"
      {...props}
    >
      {children}
    </td>
  );
}
