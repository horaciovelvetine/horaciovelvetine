//* React
import React from 'react';
import { useReducer } from 'react';
import { useMutation } from 'react-query';

//* (&sub-)Components
import Search from './header/Search';
import Results from './main/Results';
import ContextsSelectorSidebar from './main/components/ContextsSelectorSidebar';

//* Hooks & Reducers
import configReducer from './hooks/configReducer';
import resultsReducer from './hooks/resultsReducer';
import baseUrl from './hooks/helpers/baseUrl';

export default function ConfigProvider(props) {
	// Going to need to provide (React) _context here instead
	// What is the best way to pull all elements up during the async fetch so that visually the page is "loaded" in a way that makes any kind of sense 
	const searchMutation = useMutation((payload) => {
		const response = await axios
			.post(`${baseUrl('/search')}`, payload)
			.then(function (response) {
				return response;
			})
			.catch(function (error) {
				console.log(error);
				debugger;
			});
		return response;
	});
	
	const [configProvider, dispatchConfig] = useReducer(configReducer, props.config[0].configSettings);

	return (
		<>
			{/* //! Logo area */}
			<header className='flex-shrink-0 relative h-16 bg-white flex items-center'>
				<div className='absolute inset-y-0 left-0 md:static md:flex-shrink-0'>
					<a
						href='/'
						className='flex items-center justify-center h-16 w-16 bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:w-20'></a>
				</div>
				{/* //! SEARCH */}
				<Search config={configProvider} dispatchConfig={dispatchConfig} searchMutation={searchMutation}/>
			</header>

			<div className='h-screen flex-1 flex overflow-hidden'>
				{/* //! SIDEBAR */}
				<div>
					<ContextsSelectorSidebar config={configProvider} dispatchConfig={dispatchConfig} />
				</div>

				{/* //! ALL RESULTS */}
				<main className='min-w-0 flex-1 border-t border-gray-200 lg:flex h-screen'>
					<section
						aria-labelledby='primary-heading'
						className='min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-first'>
						<h1 id='primary-heading' className='sr-only'>
							Bookmarkr
						</h1>
						<Results config={configProvider} dispatchConfig={dispatchConfig} results={results} />
					</section>
				</main>
			</div>
		</>
	);
}
