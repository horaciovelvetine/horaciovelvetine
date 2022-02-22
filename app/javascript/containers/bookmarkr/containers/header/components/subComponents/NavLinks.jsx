//* All React Native
import React from 'react';
import { Fragment } from 'react';

//* (&Sub-)Components
import Clock from './Clock';

//* Hooks, State & Misc Functions
import propSelector from '../../../../../../helpers/propSelector';

export default function NavLinks(props) {
	const navigation = propSelector(props, 'navbarLinks');

	return (
		<div className='pr-4 flex-shrink-0 flex items-center space-x-10'>
			<nav aria-label='Global' className='flex space-x-6'>
				{navigation.map((link) => (
					<Fragment key={link.name}>
						<a href={link.href} className='text-sm font-medium text-gray-900'>
							{link.name}
						</a>
					</Fragment>
				))}
				<Clock />
			</nav>
		</div>
	);
}
