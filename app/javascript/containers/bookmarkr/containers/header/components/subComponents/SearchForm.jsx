import React from 'react';
import { useState } from 'react';

//* Hooks, State & Misc Functions
import useBounceDelay from '../../../../../../hooks/useBounceDelay';

export default function SearchForm(props) {
	const dispatchSearch = props.dispatchSearch;
	const [searchEvent, setSearchEvent] = useState(null);

	useBounceDelay(
		() => {
			const search = { ...searchEvent };
			search.dispatchSearch({ query: search.query });
		},
		515,
		[searchEvent]
	);

	return (
		<>
			<input
				id='desktop-search'
				type='search'
				placeholder='Search...'
				className='block w-full border-transparent pl-12 placeholder-gray-500 focus:border-transparent sm:text-sm focus:ring-0'
				autoFocus={true}
				onChange={(e) => {
					setSearchEvent({ query: e.target.value, dispatchSearch: dispatchSearch });
				}}
			/>
		</>
	);
}

//{ query: null, context: null, results: null }
