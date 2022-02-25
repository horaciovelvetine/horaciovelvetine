import React from 'react';
import ReactDOM from 'react-dom';
import BookmarkrApp from '../containers/bookmarkr/BookmarkrApp';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import fetchConfig from '../containers/bookmarkr/containers/hooks/fetchConfig';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

const configFormatter = (data) => {
	if (!data) return;
	return Object.entries(data.data.attributes).map((obj) => ({ [obj[0]]: obj[1] }));
};

const { isLoading, error, data } = useQuery('stateConfig', fetchConfig);

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			{isLoading && <>Loading...</>}
			{!isLoading && <BookmarkrApp config={configFormatter(data)}/>}
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('homeContainer')
);
