//* All React Native
import React from 'react';
import { useState, useReducer } from 'react';

//* Components
import TagCloud from './components/TagCloud';
import ContextsSelectorSidebar from './components/ContextsSelectorSidebar';


//* Hooks, State & Misc Functions


export default function Results(props) {
	const [configInfo, setConfigInfo] = useState(props);

	debugger
	return (
		<div className='min-h-0 flex-1 flex overflow-hidden'>
			{/* //! Desktop Context Sidebar */}
			<nav aria-label='Sidebar' className='hidden md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto'>
				<div className='relative w-20 flex flex-col p-3 space-y-3'>
					{!isLoading && <ContextsSelectorSidebar configObject={stateConfig} />}
				</div>

				{/* //! Results column */}
				<main className='min-w-0 flex-1 border-t border-gray-200 lg:flex'>
					<section
						aria-labelledby='primary-heading'
						className='min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-first'>
						<h1 id='primary-heading' className='sr-only'>
							Home
						</h1>
						<div>
							{isLoading && (
								<>
									<span>Loading...</span>
								</>
							)}

							{isLoading && <Results />}
						</div>
					</section>

					{/* //! Tag Cloud Column (hides on sizing) */}
					<aside className='hidden lg:block lg:flex-shrink-0'>
						<div className='h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100 overflow-y-auto'>
							<TagCloud />
						</div>
					</aside>
				</main>
			</nav>
		</div>
	);
}
