//* All React Native
import { useState } from 'react';

//* (&Sub-)Components
import MobileContextsDropdown from './components/MobileContextsDropdown';
import MobileNavMenu from './components/MobileNavMenu';
import MobileNavBarToggleDisplayButton from './components/subcomponents';
import SearchForm from './components/subComponents/SearchForm';
import NavLinks from './components/subComponents/NavLinks';

//* Hooks, State & Misc Functions

//!! Search Container
export default function Search(props) {
	const [configInfo, setConfigInfo] = useState(props);

	debugger;
	return (
		<>
			<MobileContextsDropdown />
			<div className='absolute inset-y-0 right-0 pr-4 flex items-center sm:pr-6 md:hidden'>
				<MobileNavBarToggleDisplayButton />
			</div>
			<div className='hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between'>
				<SearchForm />
				<NavLinks />
			</div>

			<MobileNavMenu />
		</>
	);
}
