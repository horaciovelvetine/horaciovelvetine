import React from 'react'

export default function SearchForm() {
  debugger
  return (
      <div className='min-w-0 flex-1'>
        <div className='max-w-2xl relative text-gray-400 focus-within:text-gray-500'>
          <label htmlFor='desktop-search' className='sr-only'>
            Search
          </label>
          <SearchForm search={search} dispatchSearch={dispatchSearch} />
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4'>
            <SearchIcon className='h-5 w-5' aria-hidden='true' />
          </div>
        </div>
      </div>
  )
}
