//* React & Tailwind Imports
import React from 'react';
import { useState, useReducer, useEffect } from 'react';
import { HomeIcon, BriefcaseIcon, FireIcon, ClipboardCheckIcon } from '@heroicons/react/outline';

//* Page Imports
import SearchBar from './SearchBar';
import MainContent from './MainContent';

//* Hook Imports
import contextReducer from '../../hooks/contextReducer';
import fetchBookmarks from '../../hooks/fetchBookmarks.jsx';
import useEffectOnUpdate from '../../hooks/custom/useEffectOnUpdate';
import { useQuery } from 'react-query';

const baseUrl = 'http://127.0.0.1:3000/bookmarkr';

export default function HomePage() {
	const { loading, data, error } = useQuery('cache', fetchBookmarks);

	const [contexts, dispatchContexts] = useReducer(() => contextReducer, {});
	const [navigation, setNavigation] = useState([]);

	useEffectOnUpdate(() => {
		debugger
	}, [data])

	if (loading) {
		return (
			<>
				<p>is Loading...</p>
			</>
		);
	} else if (error) {
		return (
			<>
				<div>Error! Check Console</div>
				{console.log(error)}
			</>
		);
	} else if (data) {
		return (
			<>
				<div className='h-screen flex flex-col'>
					<SearchBar contextInfo={contexts} navigation={navigation} />
					<MainContent contextInfo={contexts} dispatchContexts={dispatchContexts} navigation={navigation} />
				</div>
			</>
		);
	} else {
		debugger;
	}
}
