//* All React Native
import React from 'react';
import { useEffect } from 'react';

//* (&Sub-)Components

//* Hooks, State & Misc Functions
import propSelector from '../../../../../helpers/propSelector';
import findIcon from '../../../../../helpers/findIcon';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function ContextsSelectorSidebar(props) {
	const contexts = propSelector(props, 'contexts');
	
	// const found = findIcon(this)

	
	debugger;

	return (
		<>
			{ const found = findIcon(this) 
				contexts.map((context) => (
				<a key={context.name} href={context.href} onClick={(e) => console.log(e)} className={classNames(context.current ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-700', 'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg')}>
					
					<span className='sr-only'>{context.name}</span>
					<context.icon className='h-6 w-6' aria-hidden='true' />
				</a>
			))}
		</>
	);
}
