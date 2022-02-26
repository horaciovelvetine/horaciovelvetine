//React & Lib
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

//(&sub) Components
import BookmarkrApp from '../bookmarkrApp/bookmarkrApp'


//Changes default refetch on window focus
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
