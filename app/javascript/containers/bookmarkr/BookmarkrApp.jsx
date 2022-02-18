//* React & Tailwind Imports
import React from 'react';
import { useState, useReducer } from 'react';
import { HomeIcon, BriefcaseIcon, FireIcon, ClipboardCheckIcon } from '@heroicons/react/outline';

//* Page Imports
import SearchBar from './containers/SearchBar';
import MainContent from './containers/MainContent';

//* Hook Imports
import contextReducer from '../../hooks/contextReducer';
import fetchConfigCache from '../../hooks/fetchConfigCache.js';
import useEffectOnUpdate from '../../hooks/custom/useEffectOnUpdate';
import { useQuery, useMutation } from 'react-query';

export default function BookmarkrApp() {
	const { loading, data, error } = useQuery('getCacheConfig', fetchConfigCache);

	// const [contexts, dispatchContexts] = useReducer(() => contextReducer, {});
	// const [navigation, setNavigation] = useState([]);
	useEffectOnUpdate(() => {
		debugger
		const cacheJson = data.data
		dispatchCache(cacheJson)
	}, [data])

	useEffectOnUpdate(() => {
		const test = [data, loading, error];
		debugger;
	}, [data]);
	console.log(loading, data, error);

	// if (loading) {
	// 	debugger;
	// }

	// if (error) {
	// 	console.log(error);
	// 	return (
	// 		<>
	// 			<span>Looks Like there was an error:: {+error.message}</span>
	// 		</>
	// 	);
	// }

	// if (data) {
	// 	debugger;
	// }

	return (
		<>
			<div className='h-screen flex flex-col'>
				
			</div>
		</>
	)
}
