import React from 'react'
import { Dialog } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { slideOverSettingKey } from '../utils/defaultSlideOverVals'


export default function SlideOverHeader(props) {
  
  function closeSlideOver(e, props) {
    e.preventDefault()
    props.setTheSettings(props.settings.slideOverActionType)
  }
  return (
    <div className="bg-indigo-700 py-6 px-4 sm:px-6" >
      <div className="flex items-center justify-between">
        <Dialog.Title className="text-lg font-medium text-white"> {props.settings.slideOverActionType}</Dialog.Title>
        <div className="ml-3 flex h-7 items-center">
          <button
            type="button"
            className="rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            onClick={(e) => closeSlideOver(e, props)}
          >
            <span className="sr-only">Close panel</span>
            <XIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
