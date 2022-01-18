import React from 'react';
import { useState, useReducer } from 'react';
import { HomeIcon, BriefcaseIcon, FireIcon, ClipboardCheckIcon } from '@heroicons/react/outline';

import SearchBar from './SearchBar';
import MainContent from './MainContent';

import ContextsReducer from '../../reducers/ContextsReducer';

const baseUrl = 'https://127.0.0.1:3000';

export default function HomePage() {
	const [contexts, dispatchContexts] = useReducer(ContextsReducer, [
		{ name: 'Home', href: `${baseUrl}/api/home`, icon: HomeIcon, current: false, order: 1 },
		{ name: 'Hired', href: `${baseUrl}/api/hired`, icon: BriefcaseIcon, current: false, order: 2 },
		{ name: 'Ktchn', href: `${baseUrl}/api/ktchn`, icon: FireIcon, current: true, order: 3 },
		{ name: 'ToDos', href: `${baseUrl}/api/todos`, icon: ClipboardCheckIcon, current: false, order: 4 },
	]);

	const [navigation, setNavigation] = useState([
		{ name: '+Link', href: `${baseUrl}/addlink` },
		{ name: 'Settings', href: `${baseUrl}/settings` },
	]);

	return (
		<>
			<div className='h-screen flex flex-col'>
				<SearchBar contexts={contexts} navigation={navigation} />
				<MainContent contexts={contexts} dispatchContexts={dispatchContexts} navigation={navigation}  />
			</div>
		</>
	);
}
