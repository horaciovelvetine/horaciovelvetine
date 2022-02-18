//* All React Native
import { useState, useReducer } from 'react';

//* Components
import ContextsSelectorDropdown from './components/ContextsSelectorDropdown';
import NavLinks from './components/NavLinks';
import Search from './components/Search';
import SidebarNavMenu from './components/SideBarNavMenu';
import MobileNavBarToggleDisplayButton from './components/MobileNavBarToggleDisplayButton';

//* Hooks, State & Misc Functions
import searchReducer from '../../hooks/searchReducer';
import useEffectOnUpdate from '../../hooks/custom/useEffectOnUpdate';

//!! Search Container
export default function Search() {
	const [configInfo, setConfigInfo] = useState(props);
	const [search, dispatchSearch] = useReducer(searchReducer, {});

	return 'Look a search!';
}
