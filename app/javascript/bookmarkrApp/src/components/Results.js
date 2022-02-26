import React from 'react'

export default function Results() {
  return (
    <div className='h-screen flex-1 flex overflow-hidden'>
      {/* //! SIDEBAR */}
      <div>
        <ContextsSelectorSidebar />
      </div>

      {/* //! ALL RESULTS */}
      <main className='min-w-0 flex-1 border-t border-gray-200 lg:flex h-screen'>
        <section
          aria-labelledby='primary-heading'
          className='min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-first'>
          <h1 id='primary-heading' className='sr-only'>
            Bookmarkr
          </h1>
          <Results />
        </section>
      </main>
    </div>
  )
}
