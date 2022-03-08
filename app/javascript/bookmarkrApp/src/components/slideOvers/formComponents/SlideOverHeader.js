import React from 'react'
import { Dialog } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { slideOverSettingKey } from '../utils/defaultSlideOverVals'


export default function SlideOverHeader(props) {
  return (
    <div className="bg-indigo-700 py-6 px-4 sm:px-6" onClick={() => props.setTheSettings(slideOverSettingKey)}>
      <div className="flex items-center justify-between">
        <Dialog.Title className="text-lg font-medium text-white"> { props.actionType }</Dialog.Title>
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
