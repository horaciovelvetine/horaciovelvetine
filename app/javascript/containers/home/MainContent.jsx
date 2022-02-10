import React from 'react';
import TagCloud from './components/TagCloud';
import Results from './components/Results';
import ContextsSelectorSidebar from './components/ContextsSelectorSidebar';



export default function MainContent(props) {
	

	return (
		<>
			<div className='min-h-0 flex-1 flex overflow-hidden'>
				{/* //! SIDEBAR */}
				<ContextsSelectorSidebar contexts={props.contextInfo} dispatchContexts={props.dispatchContexts}/>

				{/* //! MAIN CONTENT */}
				<main className='min-w-0 flex-1 border-t border-gray-200 lg:flex'>
					{/* //! Primary column */}
					<section
						aria-labelledby='primary-heading'
						className='min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-first'>
						<h1 id='primary-heading' className='sr-only'>
							Home
						</h1>
						<div>
							<Results />
						</div>
					</section>

					{/* //! Secondary column (hidden on smaller screens) */}
					<aside className='hidden lg:block lg:flex-shrink-0'>
						<div className='h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100 overflow-y-auto'>
							<TagCloud />
						</div>
					</aside>
				</main>
			</div>
		</>
	);
}
