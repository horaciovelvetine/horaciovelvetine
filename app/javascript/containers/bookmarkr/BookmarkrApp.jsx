//* React Imports
import React from 'react';
import { useQuery, useMutation } from 'react-query';

//* (&Sub-)Component Imports
import ConfigProvider from './containers/ConfigProvider';

//* Hook Imports
import fetchConfig from './containers/hooks/fetchConfig';

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
