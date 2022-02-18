import React from 'react';
import ReactDOM from 'react-dom';
import BookmarkrApp from '../containers/bookmarkr/BookmarkrApp';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
				<BookmarkrApp />
			</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('homeContainer')
);
