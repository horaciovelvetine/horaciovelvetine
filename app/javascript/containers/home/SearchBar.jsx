import React from 'react';
import { useState } from 'react';

import ContextsSelectorDropdown from './components/ContextsSelectorDropdown'
import NavLinks from './components/NavLinks'
import Search from './components/Search'
import SidebarNavMenu from './components/SideBarNavMenu';
import MobileNavBarToggleDisplayButton from './components/MobileNavBarToggleDisplayButton';

export default function SearchBar(props) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	
	return (
		<>
			<header className='flex-shrink-0 relative h-16 bg-white flex items-center'>
				{/* Logo area */}
				<div className='absolute inset-y-0 left-0 md:static md:flex-shrink-0'>
					<a
						href='/'
						className='flex items-center justify-center h-16 w-16 bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:w-20'>
						Logo
					</a>
				</div>

				{/* //!Mobile Size Only Dropdown Context Picker */}
				<ContextsSelectorDropdown contexts={props.contexts} />
				
				<div className='absolute inset-y-0 right-0 pr-4 flex items-center sm:pr-6 md:hidden'>
					{/* //! Mobile main nav show hide button */}
					<MobileNavBarToggleDisplayButton setMobileMenuOpen={setMobileMenuOpen} />
				</div>

				{/* //! DESKTOP TOP NAVIGATION SEARCH + ADD/SETTINGS */}
				<div className='hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between'>
					<Search />
					<NavLinks navigation={props.navigation} />
				</div>

				{/* //!For Small & Mobile Screen Size Nav Menu Sidebar: see issue #53 */}
				<SidebarNavMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} navigation={props.navigation} />
			</header>
		</>
	);
}
