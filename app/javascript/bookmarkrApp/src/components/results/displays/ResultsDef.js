import React from 'react'
import ResultOptionsDrowdownButton from './subComponents/ResultOptionsDropdownButton'

export default function ResultsDef(props) {
  const { links, setTheSettings, linkDelMutation } = { ...props }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        <div className="grid grid-cols-3 gap-4 p-2" >
          {links.map((link) => (
            <li key={link.id} className="bg-gray-100 bg-origin-content">

              <a href={`${link.href}`} className="block hover:bg-gray-50">
                <div className="px-4 py-4 flex items-center sm:px-6">
                  <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                    <div className="truncate">
                      <div className="flex text-sm">
                        <p className="font-medium text-indigo-600 truncate">{link.name}</p>
                      </div>
                      <div className="mt-2 flex">
                        <div className="flex items-center text-sm text-gray-500">
                          <p>
                            {link.href}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ml-5 flex-shrink-0">
                    <span className="h-5 w-5 text-gray-400" aria-hidden="true" >
                      <ResultOptionsDrowdownButton setTheSettings={setTheSettings} linkDelMutation={linkDelMutation} />
                    </span>
                  </div>

                </div>
              </a>
            </li>
          ))}
        </div>

      </ul>
    </div>
  )
}
