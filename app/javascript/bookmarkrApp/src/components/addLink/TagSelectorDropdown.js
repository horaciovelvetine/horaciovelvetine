import React from 'react'
import { useState } from 'react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Combobox } from '@headlessui/react'

//bool declares which className var to use 
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TagSelectorDropdown(props) {
  // Default constants
  const tags = props.tags
  
  // State items
  const [query, setQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState('') // #=> thinking this is going to require the use with previous custom hook?? 

  const filteredTags =
    query === ''
      ? tags
      : tags.filter((tag) => {
        debugger
        return tag.name.toLowerCase().includes(query.toLowerCase())
      })
  

  return (
    <Combobox as="div" value={selectedTags} onChange={setSelectedTags}>
      <Combobox.Label className="block text-sm font-medium text-gray-700">Tags</Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(tag) => tag.name}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {filteredTags.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredTags.map((t) => (
              <Combobox.Option
                key={t.id}
                value={t}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span className={classNames('block truncate', selected && 'font-semibold')}>{tag.name}</span>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  )
}
