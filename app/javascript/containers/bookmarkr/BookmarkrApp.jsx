//* React Imports
import React from 'react';
import { useState, useReducer, useEffect } from 'react';

//* TailWindCSS Imports
import { HomeIcon, BriefcaseIcon, FireIcon, ClipboardCheckIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { SearchIcon, ChevronDownIcon } from '@heroicons/react/solid';

//* (&Sub-)Component Imports
//main
import Results from './containers/main/Results';

import Search from './containers/header/Search';

//* Hook Imports

import fetchConfig from '../../hooks/fetchConfig';
import { useQuery, useMutation } from 'react-query';

export default function BookmarkrApp() {
	const { isLoading, error, data, isFetching } = useQuery('stateConfig', fetchConfig);

	const setMobileMenuOpen = false
	
	debugger

	return (
		<>
			<div className='h-screen flex flex-col'>
				<header className='flex-shrink-0 relative h-16 bg-white flex items-center'>
					{/* Logo area */}
					<div className='absolute inset-y-0 left-0 md:static md:flex-shrink-0'>
						<a
							href='/'
							className='flex items-center justify-center h-16 w-16 bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:w-20'>
							Logo
						</a>
					</div>
					{!isLoading && <Search config={data} />}
				</header>
				{!isLoading && <Results config={data} />}
			</div>
		</>
	);
}
