import React from 'react';
import ReactDOM from 'react-dom';
import BookmarkrApp from '../containers/bookmarkr/BookmarkrApp';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<BookmarkrApp/>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('homeContainer')
);
