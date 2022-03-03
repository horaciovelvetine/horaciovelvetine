import React from 'react'
import { HashtagIcon } from '@heroicons/react/solid'

export default function SelectTagButton(props) {

  function handleTagClick(e) {
    e.preventDefault()
    console.log(`Show only ${e.target.textContent} related results`)
  }

  return (
    <li key={props.id} className="shadow-sm">
      <button
        key={props.id}
        onClick={(e) => handleTagClick(e)}
        type="button"
        className="inline-flex items-center px-2 py-1 m-1 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <HashtagIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
        {props.name}
      </button>
    </li>
  )
}

