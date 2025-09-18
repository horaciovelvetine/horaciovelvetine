import type { Dispatch, SetStateAction } from 'react';
import { TailwindOutlineColors } from '../../../functions';
import type { Colors } from '../../../types';

interface PostSearchInputProps {
  label: string;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  accentColor: Colors
}

export function PostSearchInput({ label, query, setQuery, accentColor }: PostSearchInputProps) {
  return (
    <div className='relative'>
      <label
        htmlFor='post-search-input'
        className='absolute -top-2 left-2 inline-block rounded-lg bg-stone-800 px-1 text-xs font-medium text-white'>
        {label}
      </label>
      <input
        id='post-search-input'
        name='post-search-input'
        type='text'
        placeholder='Search Posts...'
        value={query}
        onChange={(e) => { setQuery(e.target.value) }}
        className={`block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-stone-500 placeholder:text-stone-400 focus:outline-2 focus:-outline-offset-2 focus:${TailwindOutlineColors[accentColor]} sm:text-sm/6`}
      />
    </div>
  );
}
