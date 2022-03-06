import React from 'react'

export default function FooterButtons(props) {
  const settingKey = '+Link'
  return (
    <div className="flex flex-shrink-0 justify-end px-4 py-4">
      <button
        type="button"
        className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={() => props.setTheSettings(settingKey)}
      >
        Cancel
      </button>
      <button
        type="submit"
        className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={ props.settings.saveLinkModalPrompt ? (e) => console.log("Modal appear!!!!") : (e) => props.handleLinkSaveClick(e)}
      >
        Save
      </button>
    </div>
  )
}
