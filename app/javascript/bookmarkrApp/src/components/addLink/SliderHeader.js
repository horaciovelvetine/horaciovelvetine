import React from 'react'

const settingKey = '+Link'

export default function SliderHeader(props) {
  return (
    <div className="bg-indigo-700 py-6 px-4 sm:px-6" onClick={() => props.setTheSettings(settingKey)}>
      <div className="flex items-center justify-between">
        <Dialog.Title className="text-lg font-medium text-white"> Add Link </Dialog.Title>
        <div className="ml-3 flex h-7 items-center">
          <button
            type="button"
            className="rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => props.setTheSettings(settingKey)}
          >
            <span className="sr-only">Close panel</span>
            <XIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
