import React from 'react'

export default function BoolAttributes(props) {
  const { isCurFlagged: curFlagged, isCurPinned: curPinned } = { ...props }
  return (
    <fieldset>
      <legend className="text-sm font-medium text-gray-900">Options</legend>
      <div className="mt-2 space-y-5">
        <div className="relative flex items-start">
          <div className="absolute flex h-5 items-center">
            <input
              id="flagged-boolean"
              name="flagged"
              aria-describedby="flagged-boolean"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              onChange={props.setFlagged(!curFlagged)}

            />
          </div>
          <div className="pl-7 text-sm">
            <label htmlFor="flagged-boolean" className="font-medium text-gray-900">
              {' '}
              Flagged{' '}
            </label>
          </div>
        </div>
      </div>
      <div className="mt-2 space-y-5">
        <div className="relative flex items-start">
          <div className="absolute flex h-5 items-center">
            <input
              id="pinned-boolean"
              name="pinned"
              aria-describedby="pinned-boolean"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              onChange={props.setPinned(!curPinned)}

            />
          </div>
          <div className="pl-7 text-sm">
            <label htmlFor="flagged-boolean" className="font-medium text-gray-900">
              {' '}
              Pinned{' '}
            </label>
          </div>
        </div>
      </div>
    </fieldset>
  )
}
