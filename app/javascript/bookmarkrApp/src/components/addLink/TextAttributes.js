import React from 'react'

export default function TextAttributes(props) {
  
  return (
    <>
      <div>
        <label htmlFor="link-name" className="block text-sm font-medium text-gray-900">
          {' '}
          Link name{' '}
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="link-name"
            id="link-name"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            onChange={(e) => props.setName(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label htmlFor="URL" className="block text-sm font-medium text-gray-900">
          {' '}
          URL{' '}
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="link-url"
            id="link-url"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            onChange={(e) => props.setUrl(e.target.value)}
          />
        </div>
      </div>
    </>
  )
}
