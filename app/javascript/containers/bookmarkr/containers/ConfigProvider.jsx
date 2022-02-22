//* React Native
import React from 'react';
import { useReducer, useEffect } from 'react';

//* (&sub-)Components
import Search from './header/Search';
import Results from './main/Results';
import ContextsSelectorSidebar from './main/components/ContextsSelectorSidebar';

//* Hooks & Reducers
import configReducer from './reducers/configReducer';

export default function ConfigProvider(props) {
	const [bookmarks, tags, contexts] = [...props.config.slice(1)];
	const [configProvider, dispatchConfig] = useReducer(configReducer, props.config[0].configSettings);
	const configPackage = [configProvider, dispatchConfig];

	return (
		<>
			<div className='h-screen flex flex-col'>
				{/* //! Logo area */}
				<header className='flex-shrink-0 relative h-16 bg-white flex items-center'>
					<div className='absolute inset-y-0 left-0 md:static md:flex-shrink-0'>
						<a
							href='/'
							className='flex items-center justify-center h-16 w-16 bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:w-20'></a>
					</div>
					{/* //! SEARCH */}
					<Search config={configPackage} />
				</header>

				<div className='min-h-0 flex-1 flex overflow-hidden'>
					{/* //! SIDEBAR */}
					<div>
						<ContextsSelectorSidebar config={configPackage} />
					</div>

					{/* //! ALL RESULTS */}
					<main className='min-w-0 flex-1 border-t border-gray-200 lg:flex'>
						<section
							aria-labelledby='primary-heading'
							className='min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-first'>
							<h1 id='primary-heading' className='sr-only'>
								Bookmarkr
							</h1>
						</section>
						<Results config={configPackage} />
					</main>
				</div>
			</div>
		</>
	);
}
