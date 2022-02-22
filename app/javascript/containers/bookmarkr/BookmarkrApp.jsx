//* React Imports
import React from 'react';
import { useState, useReducer, useEffect } from 'react';

//* TailWindCSS Imports
import { HomeIcon, BriefcaseIcon, FireIcon, ClipboardCheckIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { SearchIcon, ChevronDownIcon } from '@heroicons/react/solid';

//* (&Sub-)Component Imports
import ConfigProvider from './containers/ConfigProvider';

//* Hook Imports
import fetchConfig from './containers/reducers/fetchConfig';

// import fetchConfig from '../../hooks/fetchConfig';
import { useQuery, useMutation } from 'react-query';

export default function BookmarkrApp() {
	const { isLoading, error, data, isFetching } = useQuery('stateConfig', fetchConfig);

	const sharedConfigFormatter = (data) => {
		if (!data) return;
		return Object.entries(data.data.attributes).map((obj) => ({ [obj[0]]: obj[1] }));
	};

	return (
		<>
			{isLoading && <>Loading...</>}
			{!isLoading && <ConfigProvider config={sharedConfigFormatter(data)} />}
		</>
	);
}
