import React from 'react'
import {useState, useReducer, useMemo} from 'react'

export default function sharedConfigProvider() {
			<>
				<div className='h-screen flex flex-col'>
					{/* //! Logo area */}
					<header className='flex-shrink-0 relative h-16 bg-white flex items-center'>
						<div className='absolute inset-y-0 left-0 md:static md:flex-shrink-0'>
							<a
								href='/'
								className='flex items-center justify-center h-16 w-16 bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:w-20'>
								{isLoading && <>Loading...</>}
								{!isLoading && <>Complete</>}
							</a>
						</div>

						{/* //! SEARCH */}
						{!isLoading && <Search config={data} />}
					</header>

					<div className='min-h-0 flex-1 flex overflow-hidden'>
						{/* //! SIDEBAR */}
						<nav aria-label='Sidebar' className='hidden md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto'>
							<div className='relative w-20 flex flex-col p-3 space-y-3'>
								{!isLoading && <ContextsSelectorSidebar config={data} />}
							</div>
						</nav>

						{/* //! ALL RESULTS */}
						<main className='min-w-0 flex-1 border-t border-gray-200 lg:flex'>
							<section
								aria-labelledby='primary-heading'
								className='min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-first'>
								<h1 id='primary-heading' className='sr-only'>
									Bookmarkr
								</h1>
							</section>
							<div>{!isLoading && <Results config={configPacker(data)} />}</div>
						</main>
					</div>
				</div>
			</>;
  
  
  return <></>;
}

