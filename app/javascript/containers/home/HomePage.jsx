//* React & Tailwind Imports
import React from 'react';
import { useState, useReducer, useEffect } from 'react';
import { HomeIcon, BriefcaseIcon, FireIcon, ClipboardCheckIcon } from '@heroicons/react/outline';

//* Page Imports
import SearchBar from './SearchBar';
import MainContent from './MainContent';

//* Hook Imports
import contextReducer from '../../hooks/contextReducer';
import cacheReducer from '../../hooks/cacheReducer';
import useFetch from '../../hooks/custom/useFetch';
import useEffectOnUpdate from '../../hooks/custom/useEffectOnUpdate';

const baseUrl = 'http://127.0.0.1:3000/bookmarkr';

export default function HomePage() {
	
	const { loading, error, val } = useFetch(baseUrl, {}, []);

	//! Start Here! You should be able to grab these values from the cache fetch once the serializer is ready
	const [cache, dispatchCache] = useReducer(() => cacheReducer, {})
	const [contexts, dispatchContexts] = useReducer(() => contextReducer, {});
	const [navigation, setNavigation] = useState([]);

	// useEffectOnUpdate(() => {
	// 	const cache = val.data[0];
	// 	debugger;
	// }, [val != null || val != undefined]);

	
	if (loading == true) {
		<>
			<p>is Loading...</p>
		</>;
	} else if (error) {
		return (
			<>
				<div>Error! Check Console</div>
				{console.log(error)}
			</>
		)
	} else if (val != null || val != undefined) {
		return (
			<>
				<div className='h-screen flex flex-col'>
					<SearchBar contextInfo={contexts} navigation={navigation} />
					<MainContent contextInfo={contexts} dispatchContexts={dispatchContexts} navigation={navigation} />
				</div>
			</>
		)
	}
}
