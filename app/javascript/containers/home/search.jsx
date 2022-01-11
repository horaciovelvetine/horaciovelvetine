// import componen from './components/example.js'
import React from 'react';
import SearchField from './components/SearchField';
import AddLink from './components/AddLink';

export default function Search(props) {
	return (
		<div className='flex w-full'>
			<div className='flex flex-1'>
				<SearchField />
			</div>
			<div className=''>
				<AddLink />
			</div>
		</div>
	);
}
