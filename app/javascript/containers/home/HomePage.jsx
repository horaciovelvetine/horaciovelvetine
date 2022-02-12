import React from 'react';
import { useState, useReducer, useEffect } from 'react';
import { HomeIcon, BriefcaseIcon, FireIcon, ClipboardCheckIcon } from '@heroicons/react/outline';

import SearchBar from './SearchBar';
import MainContent from './MainContent';

import contextReducer from '../../hooks/contextReducer';

const baseUrl = 'https://127.0.0.1:3000/api/v1/bookmark';

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

	return (
		<>
			<div className='h-screen flex flex-col'>
				<SearchBar contextInfo={contexts} navigation={navigation} />
				<MainContent contextInfo={contexts} dispatchContexts={dispatchContexts} navigation={navigation} />
			</div>
		</>
	);
}
