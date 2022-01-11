// import componen from './components/example.js'
import React from 'react'

export default function SearchBar(props) {

  return (
    <div class="flex items-center justify-center w-screen my-auto">
      <div class="flex relative text-gray-600 focus-within:text-gray-400 w-3/4 shrink mt-8">
        <div class="flex absolute mx-auto">
          <button type="submit" class="focus:outline-none focus:shadow-outline">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 m-2">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>

        <input type="search" name="q" class="py-3 text-md text-white bg-gray-900 rounded-md pl-12 focus:outline-none focus:bg-white focus:text-gray-900 w-full" placeholder="Search..." autocomplete="off" autofocus="true"></input>
      </div>
    </div>
  )
}