//* React & Tailwind Imports
import React from 'react';
import { useState, useReducer } from 'react';
import { HomeIcon, BriefcaseIcon, FireIcon, ClipboardCheckIcon } from '@heroicons/react/outline';

//* Page Imports
import SearchBar from './SearchBar';
import MainContent from './MainContent';

//* Hook Imports
import contextReducer from '../../hooks/contextReducer';
import fetchConfigCache from '../../hooks/fetchConfigCache.js';
import useEffectOnUpdate from '../../hooks/custom/useEffectOnUpdate';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function HomePage() {
	const { loading, data, error } = useQuery('cache', fetchConfigCache);

	const [contexts, dispatchContexts] = useReducer(() => contextReducer, {});
	const [navigation, setNavigation] = useState([]);

	useEffectOnUpdate(() => {
		debugger;
	}, [data]);

	if (loading) {
		return (
			<>
				<p>is Loading...</p>
			</>
		);
	} else if (error) {
		return (
			<>
				<div>Error! Check Console</div>
				{console.log(error)}
			</>
		);
	} else if (data) {
		return (
			<QueryClientProvider client={queryClient}>
				
				<div className='h-screen flex flex-col'>
					<SearchBar contextInfo={contexts} navigation={navigation} />
					<MainContent contextInfo={contexts} dispatchContexts={dispatchContexts} navigation={navigation} />
				</div>
			</QueryClientProvider>
		);
	} else {
		debugger;
	}
}
