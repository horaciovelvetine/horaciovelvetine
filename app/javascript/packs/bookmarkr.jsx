//React & Lib
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';


//Import Default Config Information
import { applicationMenuSelections, navBarMenuItems, defaultSettings } from '../bookmarkrApp/config/defaultStateItems';
//and setup config vars to pass app
const applications = applicationMenuSelections();
const navigation = navBarMenuItems();
const settings = defaultSettings();

//(&sub) Components
import BookmarkrApp from '../bookmarkrApp/bookmarkrApp';

//Sets Up React Query Providers w/o refetch focus def
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
				<BookmarkrApp defaultSettings={settings} applicationMenu={applications} navigationMenu={navigation} />
			</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('homeContainer')
);
