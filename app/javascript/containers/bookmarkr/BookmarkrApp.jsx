//* React Imports
import React from 'react';
import { useState, useReducer, useEffect } from 'react';

//* TailWindCSS Imports
import { HomeIcon, BriefcaseIcon, FireIcon, ClipboardCheckIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { SearchIcon, ChevronDownIcon } from '@heroicons/react/solid';

//* (&Sub-)Component Imports
//(containers)
//main
import Results from './containers/main/Results';
import TagCloud from './containers/main/components/TagCloud';
import ContextsSelectorSidebar from './containers/main/components/ContextsSelectorSidebar';
//header
import MobileContextsDropdown from './containers/header/components/MobileContextsDropdown';
import MobileNavMenu from './containers/header/components/MobileNavMenu';
import MobileNavBarToggleDisplayButton from './containers/header/components/subComponents/MobileNavBarToggleDisplayButton';
import Search from './containers/header/Search';

//* Hook Imports

import fetchConfig from '../../hooks/fetchConfig';
import { useQuery, useMutation } from 'react-query';

export default function BookmarkrApp() {
	const { isLoading, error, data, isFetching } = useQuery('stateConfig', fetchConfig);

	const setMobileMenuOpen = false

	useEffect(() => {
		debugger
	}, [data])
	
	
	return (
		<>
			<div className='h-screen flex flex-col'>
				<header className='flex-shrink-0 relative h-16 bg-white flex items-center'>
					{/* Logo area */}
					<div className='absolute inset-y-0 left-0 md:static md:flex-shrink-0'>
						<a
							href='/'
							className='flex items-center justify-center h-16 w-16 bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:w-20'></a>
					</div>
					{!isLoading && (
						<>
							<MobileContextsDropdown configObject={data}/>
							<div className='absolute inset-y-0 right-0 pr-4 flex items-center sm:pr-6 md:hidden'>
								<MobileNavBarToggleDisplayButton />
							</div>
							<Search />
							<MobileNavMenu />
						</>
					)}
				</header>
				<div className='min-h-0 flex-1 flex overflow-hidden'>
					{/* //! Desktop Context Sidebar */}
					<nav aria-label='Sidebar' className='hidden md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto'>
						<div className='relative w-20 flex flex-col p-3 space-y-3'>
							{!isLoading && <ContextsSelectorSidebar configObject={stateConfig} />}
						</div>

						{/* //! Results column */}
						<main className='min-w-0 flex-1 border-t border-gray-200 lg:flex'>
							<section
								aria-labelledby='primary-heading'
								className='min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-first'>
								<h1 id='primary-heading' className='sr-only'>
									Home
								</h1>
								<div>
									{isLoading && (
										<>
											<span>Loading...</span>
										</>
									)}

									{results && <Results />}
								</div>
							</section>

							{/* //! Tag Cloud Column (hides on sizing) */}
							<aside className='hidden lg:block lg:flex-shrink-0'>
								<div className='h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100 overflow-y-auto'>
									<TagCloud />
								</div>
							</aside>
						</main>
					</nav>
				</div>
			</div>
		</>
	);
}
