import React from 'react';

export default function NavLinks() {

  return (
		<div className='ml-10 pr-4 flex-shrink-0 flex items-center space-x-10'>
			<nav aria-label='Global' className='flex space-x-10'>
				<a href='#' className='text-sm font-medium text-gray-900'>
					+ Add Link
				</a>
				<a href='#' className='text-sm font-medium text-gray-900'>
					Settings
				</a>
			</nav>
		</div>
	);
}