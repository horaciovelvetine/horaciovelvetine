//* All React Native
import React from 'react';
import { useReducer } from 'react';

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
	const dispatchResults = props.config.slice(3);
	const [search, dispatchSearch] = useReducer(searchReducer, {});

	useEffectOnUpdate(() => {
		dispatchResults(search);
	}, [search]);

	return (
		<>
			<MobileContextsDropdown configObject={props} />
			<div className='absolute inset-y-0 right-0 pr-4 flex items-center sm:pr-6 md:hidden'>
				<MobileNavBarToggleDisplayButton configObject={props} />
			</div>
			<div className='hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between'>
				<SearchForm configObject={props} search={search} dispatchSearch={dispatchSearch} />
				<NavLinks configObject={props} />
			</div>

			<MobileNavMenu configObject={props} />
		</>
	);
}
