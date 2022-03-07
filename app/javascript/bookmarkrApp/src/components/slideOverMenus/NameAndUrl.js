import React from 'react'

export default function NameAndUrl(props) {

  return (
    <>
      <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
        <label
          htmlFor="new-link-name"
          className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
        >
          Name:
        </label>
        <input
          type="text"
          name="new-link-name"
          id="new-link-name"
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder=""
          onChange={(e) => props.setName(e.target.value)}
        />
      </div>
      <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
        <label
          htmlFor="new-link-url"
          className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
        >
          Url:
        </label>
        <input
          type="text"
          name="new-link-url"
          id="new-link-name"
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder=""
          onChange={(e) => props.setUrl(e.target.value)}
        />
      </div>
    </>
  )
}
