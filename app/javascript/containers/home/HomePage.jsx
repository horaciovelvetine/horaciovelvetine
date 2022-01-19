import React from 'react';
import { useState, useReducer, useEffect } from 'react';
import { HomeIcon, BriefcaseIcon, FireIcon, ClipboardCheckIcon } from '@heroicons/react/outline';

import SearchBar from './SearchBar';
import MainContent from './MainContent';

import contextReducer from '../../hooks/contextReducer';

const baseUrl = 'https://127.0.0.1:3000/api';

export default function HomePage() {
	const [contexts, dispatchContexts] = useReducer(() => contextReducer, {
		getReqLink: `${baseUrl}/search`,
		contexts: [
			{ name: 'Home', icon: HomeIcon, current: false, order: 1 },
			{ name: 'Hired', icon: BriefcaseIcon, current: false, order: 2 },
			{ name: 'Ktchn', icon: FireIcon, current: true, order: 3 },
			{ name: 'ToDos', icon: ClipboardCheckIcon, current: false, order: 4 },
		],
	});

	const [navigation, setNavigation] = useState([
		{ name: '+Link', href: `${baseUrl}/addlink` },
		{ name: 'Settings', href: `${baseUrl}/settings` },
	]);

	return (
		<>
			<div className='h-screen flex flex-col'>
				<SearchBar contexts={contexts} navigation={navigation} />
				<MainContent contexts={contexts} dispatchContexts={dispatchContexts} navigation={navigation} />
			</div>
		</>
	);
}
