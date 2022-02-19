//* React Imports
import React from 'react';
import { useState, useReducer, useEffect } from 'react';

//* TailWindCSS Imports
import { HomeIcon, BriefcaseIcon, FireIcon, ClipboardCheckIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { SearchIcon, ChevronDownIcon } from '@heroicons/react/solid';

//* (&Sub-)Component Imports
import Results from './containers/main/Results';
import Search from './containers/header/Search';
import ContextsSelectorSidebar from './containers/main/components/ContextsSelectorSidebar';

//* Hook Imports
import sharedConfigReducer from '../../hooks/sharedConfigReducer';

import fetchConfig from '../../hooks/fetchConfig';
import { useQuery, useMutation } from 'react-query';

export default function BookmarkrApp() {
	const { isLoading, error, data, isFetching } = useQuery('stateConfig', fetchConf)= useReducer(sharedConfigReducer, {});
	

	//? Sorta like...
	/*
		const configPacker = (data) =)			}
	*/
	
	//? previously sent in array and tried to have child update, which got shot back 
	// const configPacker = (d, s) => ({ data: d.data.attributes, shared: s });
	return (
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
					{!isLoading && (
						<Search config={configPacker(data)} />
					)}
				</header>

				<div className='min-h-0 flex-1 flex overflow-hidden'>
					{/* //! SIDEBAR */}
					<nav aria-label='Sidebar' className='hidden md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto'>
						<div className='relative w-20 flex flex-col p-3 space-y-3'>
							{!isLoading && (
								<ContextsSelectorSidebar
									config={configPacker(data)}
								/>
							)}
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
						<div>
							{!isLoading && (
								<Results config={configPacker(data)} />
							)}
						</div>
					</main>
				</div>
			</div>
		</>
	);
}
