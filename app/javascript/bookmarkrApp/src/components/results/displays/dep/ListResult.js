import React from 'react'
import {AtSymbolIcon} from '@heroicons/react/outline'

export default function ListResult(props) {

  return (
    <div
      key={props.result.id}
      className="relative rounded-lg border border-gray-300 bg-white px-2 py-2 mx-2 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
    >
      <div className="flex-shrink-0">
        <AtSymbolIcon className='h-10 w-10 indigo-500' aria-hidden='true'/>
      </div>
      <div className="flex-1 min-w-0">
        <a href={`${props.result.href}`} className="focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true" />
          <p className="text-sm font-medium text-gray-900">{props.result.name}</p>
          <p className="text-sm text-gray-500 truncate">{props.result.href}</p>
        </a>
      </div>
    </div>

  )
}
