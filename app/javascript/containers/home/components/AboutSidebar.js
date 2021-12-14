import React from 'react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function AboutSidebar(props) {
    //debugger
    return (
        <>
            {/* Main */}
            <div className="space-y-0">
                <div className="pb-1 sm:pb-6">
                    <div>
                        <div className="relative sm:flex-1">
                            <svg
                                className="h-3/4 w-3/4 object-cover rounded-full border border-gray-300 bg-white text-gray-300 rounded-full mx-auto" preserveAspectRatio="none" stroke="currentColor" fill="none" viewBox="0 0 200 200" aria-hidden="true" alt="profile picture"><path vectorEffect="non-scaling-stroke" strokeWidth={1} d="M0 0l200 200M0 200L200 0" />
                            </svg>
                        </div>
                        <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                            <div className="sm:flex-1">
                                <div className="leading-3">
                                    <div className="flex">
                                        <h3 className="font-bold text-xl text-gray-900 sm:text-2xl pb-3">@Horacio Velvetine // </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
                    <dl className="space-y-8 px-4 sm:px-6 sm:space-y-6 ">
                        <div>
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 ">Bio</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                                <p className="leading-snug">
                                    This is where a bio is going to be going eventually
                                </p>
                            </dd>
                        </div>
                        <div>
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Location</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">Denver CO, USA</dd>
                        </div>
                        <div className="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                            <button
                                type="button"
                                className="flex-shrink-0 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:flex-1"
                            >
                                Contact
                            </button>
                        </div>

                    </dl>
                </div>
                </div>
            </div>
        </>

    )
}