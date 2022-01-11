import React from 'react';

export default function searchField() {
	return (
		<div className='flex items-center justify-center w-screen my-auto'>
			<div className='flex relative text-gray-600 focus-within:text-gray-400 w-2/5 shrink mt-3'>
				<div className='flex absolute mx-auto'>
					<button type='submit' className='focus:outline-none focus:shadow-outline'>
						<svg
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							viewBox='0 0 24 24'
							className='w-8 h-8 m-2'>
							<path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
						</svg>
					</button>
				</div>

				<input
					type='search'
					name='q'
					className='py-3 text-md text-white bg-gray-900 rounded-md pl-12 focus:outline-none focus:bg-white focus:text-gray-900 w-full'
					placeholder='Search...'
					autoComplete='off'
					autoFocus={true}></input>
			</div>
		</div>
	);
}
