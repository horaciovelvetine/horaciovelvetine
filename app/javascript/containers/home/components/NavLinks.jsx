import React from 'react';
import { Fragment } from 'react'

export default function NavLinks(props) {

  return (
		<div className='ml-10 pr-4 flex-shrink-0 flex items-center space-x-10'>
			<nav aria-label='Global' className='flex space-x-10'>
				{props.navigation.map((link) => (
					<Fragment key={link.name}>
						<a href={link.href}
							className='text-sm font-medium text-gray-900'>{link.name}</a>
					</Fragment>
				))}
			</nav>
		</div>
	);
}