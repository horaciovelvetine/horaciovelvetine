import React from 'react';
import { useState, useReducer, useEffect } from 'react';

// * Sub-Components
import ContextsSelectorDropdown from './components/ContextsSelectorDropdown';
import NavLinks from './components/NavLinks';
import Search from './components/Search';
import SidebarNavMenu from './components/SideBarNavMenu';
import MobileNavBarToggleDisplayButton from './components/MobileNavBarToggleDisplayButton';

// * Hooks
import searchReducer from '../../hooks/searchReducer';
import useEffectOnUpdate from '../../hooks/custom/useEffectOnUpdate';
import useFetch from '../../hooks/custom/useFetch';

// * COMPONENT START
export default function SearchBar(props) {
	const [context, setContext] = useState(props.contextInfo.contexts.filter((c) => c['current'] == true));
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [search, dispatchSearch] = useReducer(searchReducer, {});
	const searchLink = `http://127.0.0.1:3000/bookmarkr/search`; // => useFetch(searchLink, payload, [payload]);

	//* Sets Up search related effects
	useEffectOnUpdate(() => {
		console.log('search query change');
	}, [search.query]);

	useEffectOnUpdate(() => {
		console.log('search results changed', search);
	}, [search.results]);

	return (
		<>
			<header className='flex-shrink-0 relative h-16 bg-white flex items-center'>
				{/* Logo area */}
				<div className='absolute inset-y-0 left-0 md:static md:flex-shrink-0'>
					<a
						href='/'
						className='flex items-center justify-center h-16 w-16 bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:w-20'>
						{context[0].name}
					</a>
				</div>

				{/* //!Mobile Size Only Dropdown Context Picker */}
				<ContextsSelectorDropdown contexts={context} />

				{/* //! Mobile main nav show hide button */}
				<div className='absolute inset-y-0 right-0 pr-4 flex items-center sm:pr-6 md:hidden'>
					<MobileNavBarToggleDisplayButton setMobileMenuOpen={setMobileMenuOpen} />
				</div>

				{/* //! DESKTOP TOP NAVIGATION SEARCH + ADD/SETTINGS */}
				<div className='hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between'>
					<Search dispatchSearch={dispatchSearch} prevSearch={search} context={context} />
					<NavLinks navigation={props.navigation} />
				</div>

				{/* //!For Small & Mobile Screen Size Nav Menu Sidebar: see issue #53 */}
				<SidebarNavMenu
					mobileMenuOpen={mobileMenuOpen}
					setMobileMenuOpen={setMobileMenuOpen}
					navigation={props.navigation}
				/>
			</header>
		</>
	);
}
