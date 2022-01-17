import React from 'react';
import { useState } from 'react';
import { HomeIcon, BriefcaseIcon, FireIcon, ClipboardCheckIcon } from '@heroicons/react/outline';

import SearchBar from './SearchBar';
import MainContent from './MainContent';



export default function HomePage() {
	const [contexts, setContexts] = useState([
		{ name: 'Home', href: '#', icon: HomeIcon, current: true, order: 1 },
		{ name: 'Hired', href: '#', icon: BriefcaseIcon, current: false, order: 2 },
		{ name: 'Ktchn', href: '#', icon: FireIcon, current: false, order: 3 },
		{ name: 'ToDos', href: '#', icon: ClipboardCheckIcon, current: false, order: 4 },
	]);

	const [navigation, setNavigation] = useState([
		{ name: '+Link', href: '#', children: [] },
		{ name: 'Settings', href: '#', children: [] },
	]);

	return (
		<>
			<div className='h-screen flex flex-col'>
				<SearchBar contexts={contexts}  navigation={navigation} />
				<MainContent contexts={contexts} navigation={navigation} />
			</div>
		</>
	);
}
