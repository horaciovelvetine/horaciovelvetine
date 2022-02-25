//* All React Native
import React from 'react';
import { useEffect } from 'react';

//* (&Sub-)Components


function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function ContextsSelectorSidebar(props) {
	const contexts = props.config.static.contextsMenuItems;
	return (
		<nav aria-label='Sidebar' className='hidden md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto'>
			<div className='relative w-20 flex flex-col p-3 space-y-3'>
				{contexts.map((context) => {
					return (
						<a
							key={context.name}
							href={context.href}
							className={classNames(
								context.current ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-700',
								'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg'
							)}>
							<span className='sr-only'>{context.name}</span>
							<context.icon className='h-6 w-6' aria-hidden='true' />
						</a>
					);
				})}
			</div>
		</nav>
	);
}
