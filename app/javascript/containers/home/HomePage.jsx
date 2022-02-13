//* React & Tailwind Imports
import React from 'react';
import { useState, useReducer, useEffect } from 'react';
import { HomeIcon, BriefcaseIcon, FireIcon, ClipboardCheckIcon } from '@heroicons/react/outline';

//* Page Imports
import SearchBar from './SearchBar';
import MainContent from './MainContent';

//* Hook Imports
import contextReducer from '../../hooks/contextReducer';
import useFetch from '../../hooks/custom/useFetch';

const baseUrl = 'http://127.0.0.1:3000/bookmarks';

export default function HomePage() {
	const [contexts, dispatchContexts] = useReducer(() => contextReducer, {
		contexts: [
			{ name: 'Home', icon: HomeIcon, current: true, order: 1 },
			{ name: 'Hired', icon: BriefcaseIcon, current: false, order: 2 },
			{ name: 'Ktchn', icon: FireIcon, current: false, order: 3 },
			{ name: 'ToDos', icon: ClipboardCheckIcon, current: false, order: 4 },
		],
	});

	const [navigation, setNavigation] = useState([
		{ name: '+Link', href: `${baseUrl}/addlink` },
		{ name: 'Settings', href: `${baseUrl}/settings` },
	]);

	const { loading, error, cachedBookmarks } = useFetch(baseUrl, {}, []);
	

	return (
		<>
			<div className='h-screen flex flex-col'>
				<SearchBar contextInfo={contexts} navigation={navigation} cache={cachedBookmarks} />
				<MainContent
					contextInfo={contexts}
					dispatchContexts={dispatchContexts}
					navigation={navigation}
					cache={cachedBookmarks}
				/>
			</div>
		</>
	);
}
