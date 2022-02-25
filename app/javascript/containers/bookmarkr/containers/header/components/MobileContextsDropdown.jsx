//* All React Native
import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
//* All (&Sub-)Components

//* Hooks, State & Misc Functions

export default function MobileContextsDropdown(props) {
	const contexts = props.configObject.config.static.contextsMenuItems;

	return (
		<>
				<select
					id='inbox-select'
					className='rounded-md border-0 bg-none pl-3 pr-8 text-base font-medium text-gray-900 focus:ring-2 focus:ring-indigo-600'
					defaultValue={contexts.find((context) => context.current).name}>
					{contexts.map((context) => (
						<option key={context.name}>{context.name}</option>
					))}
				</select>
		</>
	);
}
