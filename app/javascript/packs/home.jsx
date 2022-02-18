import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../containers/bookmarkr/HomePage';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient()

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
				<HomePage />
			</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('homeContainer')
);
