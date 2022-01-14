import Layout from '../containers/home/Layout';
import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, SearchIcon } from '@heroicons/react/solid';
import { XIcon, HomeIcon, BriefcaseIcon, FireIcon } from '@heroicons/react/outline';

import SearchBar from '../containers/home/SearchBar';
import MainContent from '../containers/home/MainContent';

function contextNames(...contexts) {
	return contexts.filter(Boolean).join(' ');
}



export default function Home() {
	const [defaultState, setDefaultState] = useState({
		contexts: [
			{ name: 'Home', href: '#', icon: HomeIcon, curent: true },
			{ name: 'Hired', href: '#', icon: BriefcaseIcon, curent: false },
			{ name: 'Ktchn', href: '#', icon: FireIcon, curent: false },
			{ name: 'ToDos', href: '#', icon: FireIcon, curent: false },
		],
		searchNavigation: [
			{ name: '+Link', href: '#', children: [] },
			{ name: 'Settings', href: '#', children: [] },
		],

	});
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
}




// document.addEventListener('DOMContentLoaded', () => {
// const node = document.getElementById('json')
// const payload = JSON.parse(document.getElementById.getAttribute('payload'))
// })
ReactDOM.render(
	<React.StrictMode>
		{/* <Layout /> */}
		<div className='h-screen flex flex-col'>
			<SearchBar />
			<MainContent />
		</div>
	</React.StrictMode>,
	document.getElementById('homeContainer')
);
