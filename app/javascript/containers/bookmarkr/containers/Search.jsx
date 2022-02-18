import React from 'react';
import { useState, useReducer } from 'react';

// * Sub-Components
import ContextsSelectorDropdown from './components/ContextsSelectorDropdown';
import NavLinks from './components/NavLinks';
import Search from './components/Search';
import SidebarNavMenu from './components/SideBarNavMenu';
import MobileNavBarToggleDisplayButton from './components/MobileNavBarToggleDisplayButton';

// * Hooks
import searchReducer from '../../hooks/searchReducer';
import useEffectOnUpdate from '../../hooks/custom/useEffectOnUpdate';

export default function Search() {
  const [configInfo, setConfigInfo] = useState(props)
}