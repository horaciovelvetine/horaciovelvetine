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
	const { loading, error, response } = useFetch(baseUrl, {}, []);

	const [cache, dispatchCache] = useReducer(() => cacheReducer, {})
	const [contexts, dispatchContexts] = useReducer(() => contextReducer, {});
	const [navigation, setNavigation] = useState([]);
	
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
	} else if (response != null || response != undefined) {
		return (
			<>
				<div className='h-screen flex flex-col'>
					<SearchBar contextInfo={contexts} navigation={navigation} />
					<MainContent contextInfo={contexts} dispatchContexts={dispatchContexts} navigation={navigation} />
				</div>
			</>
		)
	} else {
		debugger
	}
}
