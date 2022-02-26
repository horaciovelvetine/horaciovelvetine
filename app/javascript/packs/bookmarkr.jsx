import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

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
