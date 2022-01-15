import React from 'react';
import { useState } from 'react';
import { HomeIcon, BriefcaseIcon, FireIcon, ClipboardCheckIcon } from '@heroicons/react/outline';

import SearchBar from './SearchBar';
import MainContent from './MainContent';



export default function HomePage() {
	const [contexts, setContexts] = useState([
		{ name: 'Home', href: '#', icon: HomeIcon, current: true },
		{ name: 'Hired', href: '#', icon: BriefcaseIcon, current: false },
		{ name: 'Ktchn', href: '#', icon: FireIcon, current: false },
		{ name: 'ToDos', href: '#', icon: ClipboardCheckIcon, current: false },
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
