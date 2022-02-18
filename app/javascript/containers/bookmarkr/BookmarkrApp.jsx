//* React & Tailwind Imports
import React from 'react';
import { useState, useReducer } from 'react';
import { HomeIcon, BriefcaseIcon, FireIcon, ClipboardCheckIcon } from '@heroicons/react/outline';

//* Page Imports
import SearchBar from './apreQueryStart/SearchBar';
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
		debugger;
		const cacheJson = data.data;
		dispatchCache(cacheJson);
	}, [data]);

	console.log(loading, data, error);

	return (
		<>
			<div className='h-screen flex flex-col'></div>
		</>
	);
}
