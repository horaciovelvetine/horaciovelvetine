import type { Dispatch, SetStateAction } from 'react';
import { TailwindOutlineColors } from '../../../functions';
import type { Colors } from '../../../types';

interface PostSearchInputProps {
  label: string;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  accentColor: Colors
}

/**
 * Post Search Input Component
 *
 * A reusable search input component designed for filtering blog posts and content.
 * Features a floating label design with customizable accent colors that integrate
 * with the site's theming system. The component provides real-time search
 * functionality with visual feedback through focus states and placeholder text.
 *
 * Features:
 * - Floating label with background overlay for clear visual hierarchy
 * - Customizable accent color for focus states using Tailwind utilities
 * - Real-time search input with controlled state management
 * - Responsive design with mobile-optimized text sizing
 * - Accessible form labeling with proper input associations
 * - Semi-transparent background with outline-based focus indicators
 *
 * The component is commonly used in writing interfaces, project pages, and
 * anywhere blog post filtering is needed. It integrates seamlessly with
 * the site's color system and maintains consistent styling across different
 * contexts while providing smooth user interactions.
 *
 * @component
 * @param props - Component props for the post search input
 * @param props.label - The text label displayed above the input field
 * @param props.query - Current search query value (controlled input)
 * @param props.setQuery - State setter function to update the search query
 * @param props.accentColor - Theme accent color for focus states and highlights
 */
export function PostSearchInput({ label, query, setQuery, accentColor }: PostSearchInputProps) {
  return (
    <div className='relative'>
      <label
        htmlFor='post-search-input'
        className='absolute -top-1 sm:-top-2.5 left-3 inline-block rounded-lg bg-stone-800 px-2 text-xs sm:text-sm font-medium text-white z-10'>
        {label}
      </label>
      <input
        id='post-search-input'
        name='post-search-input'
        type='text'
        placeholder='Search Posts...'
        value={query}
        onChange={(e) => { setQuery(e.target.value) }}
        className={`block w-full rounded-md bg-white/5 px-3 pt-4 pb-3 sm:pt-3.5 sm:pb-2.5 lg:pt-3 lg:pb-2 text-sm sm:text-base lg:text-lg text-white outline-1 -outline-offset-1 outline-stone-500 placeholder:text-stone-400 focus:outline-2 focus:-outline-offset-2 focus:${TailwindOutlineColors[accentColor]}`}
      />
    </div>
  );
}
