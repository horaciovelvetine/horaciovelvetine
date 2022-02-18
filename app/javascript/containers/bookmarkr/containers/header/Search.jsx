//* All React Native
import { useState, useReducer } from 'react';

//* Components

//* Hooks, State & Misc Functions
import searchReducer from '../../hooks/searchReducer';
import useEffectOnUpdate from '../../hooks/custom/useEffectOnUpdate';

//!! Search Container
export default function Search() {
	const [configInfo, setConfigInfo] = useState({});
	const [search, dispatchSearch] = useReducer(searchReducer, {});

	return 'Look a search!' //don't forget to add <NavLinks />;
}
