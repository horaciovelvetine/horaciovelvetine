import { Link } from "@tanstack/react-router";

interface PostUnavailableErrorProps {
  errorMessage: string;
}

/**
 * Post Unavailable Error Component
 *
 * A specialized error display component for blog posts that shows user-friendly
 * error messages when posts fail to load or are unavailable. The component provides
 * a centered error layout with navigation back to the writing index.
 *
 * Features:
 * - Centered error layout with clear visual hierarchy
 * - Customizable error message display
 * - Built-in navigation back to the writing section
 * - Consistent styling with the site's dark theme
 * - Responsive design for all screen sizes
 * - Clear visual indicators using red accent for errors
 * - Accessible link styling with hover states
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.errorMessage - The specific error message to display to the user
 * @returns JSX element containing the post error interface
 */

export function PostUnavailableError({
  errorMessage,
}: PostUnavailableErrorProps) {
  return (
    <div className='flex min-h-[280px] items-center justify-center rounded-3xl border border-red-500/20 bg-red-950/10 px-6 py-8'>
      <div className='text-center'>
        <h1 className='text-2xl font-bold text-red-500 mb-4'>
          Error Loading Post
        </h1>
        <p className='text-gray-300 mb-4'>{errorMessage}</p>
        <Link
          to='/writing'
          className='text-blue-400 hover:text-blue-300 underline'>
          ← Back to Writing
        </Link>
      </div>
    </div>
  );
}
