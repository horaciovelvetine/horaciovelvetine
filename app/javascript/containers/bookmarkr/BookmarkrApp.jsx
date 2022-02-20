//* React Imports
import React from 'react';
import { useState, useReducer, useEffect } from 'react';

//* TailWindCSS Imports
import { HomeIcon, BriefcaseIcon, FireIcon, ClipboardCheckIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { SearchIcon, ChevronDownIcon } from '@heroicons/react/solid';

//* (&Sub-)Component Imports
import Results from './containers/main/Results';
import Search from './containers/header/Search';
import ContextsSelectorSidebar from './containers/main/components/ContextsSelectorSidebar';

//* Hook Imports
import sharedConfigReducer from '../../hooks/sharedConfigReducer';
import fetchConfig from '../../hooks/fetchConfig'

// import fetchConfig from '../../hooks/fetchConfig';
import { useQuery, useMutation } from 'react-query';



export default function BookmarkrApp() {
	const { isLoading, error, data, isFetching } = useQuery('stateConfig', fetchConfig);
	


	const contexts = (data) => {
		if (!data) return		
		
		debugger
	} 
	
	return (
		<>
			{isLoading && <>Loading...</>}
			{!isLoading && <sharedConfigProvider contexts={contexts(data)} isLoading={isLoading} />}
		</>
	);
}
