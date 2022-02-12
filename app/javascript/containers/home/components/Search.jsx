import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';

export default function Search(props) {

	return (
		<div className='min-w-0 flex-1'>
			<div className='max-w-2xl relative text-gray-400 focus-within:text-gray-500'>
				<label htmlFor='desktop-search' className='sr-only'>
					Search
				</label>
				<input
					id='desktop-search'
					type='search'
					placeholder='Search...'
					className='block w-full border-transparent pl-12 placeholder-gray-500 focus:border-transparent sm:text-sm focus:ring-0'
					autoFocus={true}
					onChange={(e) => {
						props.dispatchSearch([e.target.value, props]);
					}}
				/>
				<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4'>
					<SearchIcon className='h-5 w-5' aria-hidden='true' />
				</div>
			</div>
		</div>
	);
}
