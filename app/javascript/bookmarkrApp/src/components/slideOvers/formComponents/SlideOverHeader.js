import React from 'react'
import { Dialog } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'


export default function SlideOverHeader(props) {
  const settingKey = '+Link'
  
  return (
    <div className="bg-indigo-700 py-6 px-4 sm:px-6" onClick={() => props.setTheSettings(settingKey)}>
      <div className="flex items-center justify-between">
        <Dialog.Title className="text-lg font-medium text-white"> Add Link </Dialog.Title>
        <div className="ml-3 flex h-7 items-center">
          <button
            type="button"
            className="rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span className="sr-only">Close panel</span>
            <XIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
