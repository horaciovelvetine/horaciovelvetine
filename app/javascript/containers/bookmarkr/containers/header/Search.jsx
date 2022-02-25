//* All React Native
import React from 'react';
import { useReducer } from 'react';
import { SearchIcon } from '@heroicons/react/solid';

//* (&Sub-)Components
import MobileContextsDropdown from './components/MobileContextsDropdown';
import MobileNavMenu from './components/MobileNavMenu';
import MobileNavBarToggleDisplayButton from './components/MobileNavBarToggleDisplayButton';
import SearchForm from './components/subComponents/SearchForm';
import NavLinks from './components/subComponents/NavLinks';

//* Hooks, State & Misc Functions
import searchReducer from './reducers/searchReducer';
import useEffectOnUpdate from '../../../../hooks/useEffectOnUpdate';

export default function Search(props) {
	const searchMutation = props.searchMutation;
	const [search, dispatchSearch] = useReducer(searchReducer, {});

	useEffectOnUpdate(() => {
		searchMutation(search);
	}, [search, searchMutation]);

	return (
		<>
			//? Needs List of Contexts
			<MobileContextsDropdown configObject={props} />
			<div className='absolute inset-y-0 right-0 pr-4 flex items-center sm:pr-6 md:hidden'>
				//? SetmobileMenuOpen stateful
				<MobileNavBarToggleDisplayButton configObject={props} />
			</div>
			
			//! Brought all elements up
			<div className='hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between'>
				<div className='min-w-0 flex-1'>
					<div className='max-w-2xl relative text-gray-400 focus-within:text-gray-500'>
						<label htmlFor='desktop-search' className='sr-only'>
							Search
						</label>
						<SearchForm search={search} dispatchSearch={dispatchSearch} />
						<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4'>
							<SearchIcon className='h-5 w-5' aria-hidden='true' />
						</div>
					</div>
				</div>
				//? Needs list of nav items
				<NavLinks configObject={props} />
			</div>
			/ /? MobileMenuOpen//and setMobileMenuOpen//+Navgation items
			<MobileNavMenu configObject={props} />
		</>
	);
}
