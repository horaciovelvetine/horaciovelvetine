//* React Imports
import React from 'react';
import { useQuery, useMutation } from 'react-query';

//* TailWindCSS Imports
import { HomeIcon, BriefcaseIcon, FireIcon, ClipboardCheckIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { SearchIcon, ChevronDownIcon } from '@heroicons/react/solid';

//* (&Sub-)Component Imports
import ConfigProvider from './containers/ConfigProvider';

//* Hook Imports
import fetchConfig from './containers/reducers/fetchConfig';



export default function BookmarkrApp() {
	const { isLoading, error, data, isFetching } = useQuery('stateConfig', fetchConfig);
	
	const icons = { homeIcon: HomeIcon, briefcaseIcon: BriefcaseIcon, fireIcon: FireIcon, clipboardCheckIcon: ClipboardCheckIcon, menuIcon: MenuIcon, xIcon: XIcon, searchIcon: SearchIcon, chvronIcon: ChevronDownIcon }
	
	const sharedConfigFormatter = (data) => {
		if (!data) return;
		return Object.entries(data.data.attributes).map((obj) => ({ [obj[0]]: obj[1] }));
	};

	return (
		<>
			{isLoading && <>Loading...</>}
			{!isLoading && <ConfigProvider config={sharedConfigFormatter(data)} icons={icons}/>}
		</>
	);
}
