//* All React Native
import React from 'react';

//* Components
import TagCloud from './components/TagCloud';

//* Hooks, State & Misc Functions

export default function Results(props) {
	return (
		<>
			<div>Results!</div>
			{/* //! Tag Cloud Column (hides on sizing) */}
			<aside className='hidden lg:block lg:flex-shrink-0'>
				<div className='h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100 overflow-y-auto'>
					<TagCloud />
				</div>
			</aside>
		</>
	);
}