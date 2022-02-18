//* React & Tailwind Imports
import React from 'react';
import { useState, useReducer } from 'react';
import { HomeIcon, BriefcaseIcon, FireIcon, ClipboardCheckIcon } from '@heroicons/react/outline';

//* Page Imports
import SearchBar from './apreQueryStart/SearchBar';

//* Hook Imports
import useEffectOnUpdate from '../../hooks/custom/useEffectOnUpdate';
import { useQuery, useMutation } from 'react-query';

export default function BookmarkrApp() {
	const { loading, data, error } = useQuery('getCacheConfig', fetchConfigCache);
	const [cache, setCache] = useState(null)

	useEffectOnUpdate(() => {
		debugger
		const cacheConfigObject = data.data
		setCache(cacheConfigObject)
	}, [data]);

	return (
		<>
			<div className='h-screen flex flex-col'>
				<header className='flex-shrink-0 relative h-16 bg-white flex items-center'>
				{/* Logo area */}
					<div className='absolute inset-y-0 left-0 md:static md:flex-shrink-0'>
						<a
							href='/'
							className='flex items-center justify-center h-16 w-16 bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:w-20'>
							{context[0].name}
						</a>
					</div>

					<ContextSelector configObject={cache} />
					
				</header>
			</div>
		</>
	);
}
