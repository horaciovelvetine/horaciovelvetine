import React from 'react';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function ContextsSelectorSidebar(props) {
	debugger
	return (
			<>
				{props.contexts.contexts.map((context) => (
					<a
						key={context.name}
						href={context.href}
						onClick={(e) => props.dispatchContexts(e)}
						className={classNames(
							context.current ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-700',
							'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg'
						)}>
						<span className='sr-only'>{context.name}</span>
						<context.icon className='h-6 w-6' aria-hidden='true' />
					</a>
				))}
			</>
	);
}
