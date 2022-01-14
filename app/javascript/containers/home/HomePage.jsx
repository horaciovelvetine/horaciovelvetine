import React from 'react';
import { useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, SearchIcon } from '@heroicons/react/solid';
import { XIcon, HomeIcon, BriefcaseIcon, FireIcon } from '@heroicons/react/outline';

import SearchBar from './SearchBar';
import MainContent from './MainContent';

export default function HomePage() {
	const [contexts, setContexts] = useState([
		{ name: 'Home', href: '#', icon: HomeIcon, current: false },
		{ name: 'Hired', href: '#', icon: BriefcaseIcon, current: false },
		{ name: 'Ktchn', href: '#', icon: FireIcon, current: false },
		{ name: 'ToDos', href: '#', icon: FireIcon, current: true },
	]);

	const [navigation, setNavigation] = useState([
			{ name: '+Link', href: '#', children: [] },
			{ name: 'Settings', href: '#', children: [] },
		],
	);

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<SearchBar contexts={contexts} mobileMenuOpen={mobileMenuOpen} navigation={navigation} />
		</>
	);
}
