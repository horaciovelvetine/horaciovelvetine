import React from 'react';
import { useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, SearchIcon } from '@heroicons/react/solid';
import { XIcon, HomeIcon, BriefcaseIcon, FireIcon, ClipboardCheckIcon } from '@heroicons/react/outline';

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

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<div className='h-screen flex flex-col'>
				<SearchBar contexts={contexts} mobileMenuOpen={mobileMenuOpen} navigation={navigation} />
				<MainContent contexts={contexts} mobileMenuOpen={mobileMenuOpen} navigation={navigation} />
			</div>
		</>
	);
}
