//React + Lib Imports
import React, { Children } from 'react'
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

//(&sub-) Components




export default function AddLink(props) {
  const settingKey = '+Link'
  const open = props.settings.addLinkSlideOverOpen

  // set up state items for input field values
  const [isNew, setIsNew] = useState(true) // => see comment below
  const [name, setName] = useState("") // => refactor to make also avail for edit link?? 
  const [url, setUrl] = useState("") // => ditto


  function handleLinkSaveClick(event) {
    debugger
    //!!!!!need to get the values 
    //TODO Start here getting values form submitted form add Link
    // TODO add tag information and dispaly to addLink (selectabl buttons like above where on click name gets added to an array and toggle that)
    


    props.linkSaveMutation()
  }

  useEffect(() => {
    console.log(`Name:${name}`+ ' ' + `Url:${url}`)
  }, [name, url])


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={props.setTheSettings}>
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="pointer-events-auto w-screen max-w-md">
                <form className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                  <div className="h-0 flex-1 overflow-y-auto">
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
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="divide-y divide-gray-200 px-4 sm:px-6">
                        <div className="space-y-6 pt-6 pb-5">
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
                                onChange={(e) => setName(e.target.value)}
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
                                onChange={(e) => setUrl(e.target.value)}
                              />
                            </div>
                          </div>
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
                        </div>
                      </div>
                    </div>
                  </div>
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
                      onClick={props.settings.saveLinkModalPrompt ? (e) => console.log("Modal appear!!!!") : (e, name, url) => handleLinkSaveClick(e, name, url)}
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
