//* TailWindCSS Imports
import { HomeIcon, BriefcaseIcon, FireIcon, ClipboardCheckIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { SearchIcon, ChevronDownIcon } from '@heroicons/react/solid';

const baseUrl = 'http://127.0.0.1:3000/bookmarkr';

import replaceIconStrings from "../../../../helpers/replaceIconStrings";


export default async function fetchConfigCache() {
  const heroIcons = { homeIcon: HomeIcon, briefcaseIcon: BriefcaseIcon, fireIcon: FireIcon, clipboardCheckIcon: ClipboardCheckIcon, menuIcon: MenuIcon, xIcon: XIcon, searchIcon: SearchIcon, chvronIcon: ChevronDownIcon }
  const response = await fetch(baseUrl).then((res) => res.json())
  const responseIconFunctions = replaceIconStrings(response, heroIcons)

  return responseIconFunctions
}