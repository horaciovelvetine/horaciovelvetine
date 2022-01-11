import React from 'react';

export default function searchField() {
	return (
		<div className=''>
			<div className='flex relative m-3 items-center'>
				<div className='flex absolute'>
					<button
						type='submit'
						className='focus:outline-none flex focus:shadow-outlineflex'>
						<svg
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							viewBox='0 0 24 24'
							className='h-8 ml-1'>
							<path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
						</svg>
					</button>
				</div>

				<input
					type='search'
					name='mainSearch'
					className='text-lg rounded-md pl-10 w-full'
					placeholder='Search...'
					autoComplete='off'
					autoFocus={true}></input>
			</div>
		</div>
	);
}
