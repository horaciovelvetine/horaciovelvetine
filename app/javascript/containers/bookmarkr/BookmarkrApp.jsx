//* React Imports
import React from 'react';
import useQuery from 'react-query';

//* (&Sub-)Component Imports
import ConfigProvider from './containers/ConfigProvider';

//* Hook Imports
import fetchConfig from './containers/hooks/fetchConfig';

export default function BookmarkrApp() {
	const { isLoading, error, data } = useQuery('stateConfig', fetchConfig);

	const configFormatter = (data) => {
		if (!data) return;
		return Object.entries(data.data.attributes).map((obj) => ({ [obj[0]]: obj[1] }));
	};

	return (
		<>
			<div className='h-screen flex flex-col'>
				{isLoading && <>Loading...</>}
				{error && <>Uh oh we done goofed...</>}
				{!isLoading && <ConfigProvider config={configFormatter(data)} />}
			</div>
		</>
	);
}
