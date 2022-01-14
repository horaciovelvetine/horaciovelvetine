import Layout from "../containers/home/Layout"
import React from 'react';
import ReactDOM from 'react-dom';
import { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, SearchIcon } from '@heroicons/react/solid';
import {
	ArchiveIcon,
	BanIcon,
	BellIcon,
	FlagIcon,
	InboxIcon,
	MenuIcon,
	PencilAltIcon,
	UserCircleIcon,
	XIcon,
} from '@heroicons/react/outline';

import SearchBar from '../containers/home/SearchBar';
import MainContent from '../containers/home/MainContent';

const navigation = [
	{ name: '+Link', href: '#', children: [] },
	{ name: 'Settings', href: '#', children: [] },
];

{
	/* //! SIDEBAR ITEMS/ICONS */
}
const contextNavigation = [
	{ name: 'Open', href: '#', icon: InboxIcon, current: true },
	{ name: 'Archive', href: '#', icon: ArchiveIcon, current: false },
	{ name: 'Customers', href: '#', icon: UserCircleIcon, current: false },
	{ name: 'Flagged', href: '#', icon: FlagIcon, current: false },
	{ name: 'Spam', href: '#', icon: BanIcon, current: false },
	{ name: 'Drafts', href: '#', icon: PencilAltIcon, current: false },
];
const userNavigation = [
	{ name: 'Your Profile', href: '#' },
	{ name: 'Sign out', href: '#' },
];

function contextNames(...contexts) {
	return contexts.filter(Boolean).join(' ');
}

// document.addEventListener('DOMContentLoaded', () => {
// const node = document.getElementById('json')
// const payload = JSON.parse(document.getElementById.getAttribute('payload'))
// })



{debugger}
ReactDOM.render(
	<React.StrictMode>
		{/* <Layout /> */}
		<div className="h-screen flex flex-col">
			<SearchBar />
			<MainContent />
		</div>
	</React.StrictMode>,
	document.getElementById('homeContainer')
);
