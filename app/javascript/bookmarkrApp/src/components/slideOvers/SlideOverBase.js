//React + Lib Imports
import React from 'react'
import { useEffect } from 'react'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { slideOverSettingKey } from './utils/defaultSlideOverVals'


export default function SlideOverBase(props) {
  
  const [NameAndUrl, BoolAttributes, SlideOverHeader, AddTagAutoComp ] = [...props.children]
  const { name, setName, url, setUrl, groupsLinks, dispatchGroupsLinks, addTags, dispatchAddTag, isPinned, setPinned, settings, setTheSettings, cacheData, linkSaveMutation, linkGroupMutation } = { ...props }
  
  //Grabs information from nested cacheData
  const tagsInfo = () => cacheData.data.data.attributes.tags
  const linksInfo = () => cacheData.data.data.attributes.links
  

  function handleSubmitClick(e) {
    e.preventDefault()
    let payload = {name, url, groupsLinks, addTags, isPinned}
    settings.slideOverActionType == '+Link' ? linkSaveMutation(payload) : linkGroupMutation(payload)
  }
  //==> grabs statevals from props for post requests
  const payload = () => {
    return name, url, isPinned, groupsLinks, addTags
  }
  

  return (
    <Transition.Root show={settings.slideOverOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={() => false}>
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

                    <SlideOverHeader setTheSettings={setTheSettings} settings={settings} />

                    <div className="flex flex-1 flex-col justify-between">
                      <div className="divide-y divide-gray-200 px-4 sm:px-6">
                        <div className="space-y-6 pt-6 pb-5">

                          {cacheData && <NameAndUrl setName={setName} setUrl={setUrl} name={name} url={url} links={linksInfo()} groupsLinks={groupsLinks} dispatchGroupsLinks={dispatchGroupsLinks} settings={settings} />}

                          {cacheData && <AddTagAutoComp tags={tagsInfo()} addTags={addTags} dispatchAddTag={dispatchAddTag} />}
                          

                          <BoolAttributes isCurPinned={isPinned} setPinned={setPinned} />

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-shrink-0 justify-end px-4 py-4">
                    <button
                      type="button"
                      className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => props.setTheSettings(props.settings.slideOverActionType)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={(e) => handleSubmitClick( e )}
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
