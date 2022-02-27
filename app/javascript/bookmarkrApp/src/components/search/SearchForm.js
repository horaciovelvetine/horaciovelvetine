//React & Lib
import React from 'react'
import { useState } from 'react';
import { SearchIcon } from '@heroicons/react/solid';

// Hooks and Funcions
import useBounceDelay from '../../hooks/useBounceDelay'

export default function SearchForm(props) {
  const [searchEvent, setSearchEvent] = useState(null)
  const setSearch = props.setSearch
  const bounceDelay = props.bounceDelay


  useBounceDelay(() => {
      const search = searchEvent;
      setSearch({ query: search.query });
    },
    bounceDelay,
    [searchEvent]
  );

  return (
    <div className='min-w-0 flex-1'>
      <div className='max-w-2xl relative text-gray-400 focus-within:text-gray-500'>
        <label htmlFor='desktop-search' className='sr-only'>
          Search
        </label>
        <input
          id='desktop-search'
          type='search'
          placeholder='Search...'
          className='block w-full border-transparent pl-12 placeholder-gray-500 focus:border-transparent sm:text-sm focus:ring-0'
          autoFocus={true}
          onChange={(e) => {
            setSearchEvent({ query: e.target.value });
          }}
        />
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4'>
          <SearchIcon className='h-5 w-5' aria-hidden='true' />
        </div>
      </div>
    </div>
  )
}
