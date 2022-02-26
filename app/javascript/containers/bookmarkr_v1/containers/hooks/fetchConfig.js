//* TailWindCSS Imports
import { HomeIcon, BriefcaseIcon, FireIcon, ClipboardCheckIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { SearchIcon, ChevronDownIcon } from '@heroicons/react/solid';

//* Hooks, State & Misc Functions
import replaceIconStrings from "../../../../helpers/replaceIconStrings";
import baseUrl from "./helpers/baseUrl"

export default async function fetchConfigCache() {
  const heroIcons = { homeIcon: HomeIcon, briefcaseIcon: BriefcaseIcon, fireIcon: FireIcon, clipboardCheckIcon: ClipboardCheckIcon, menuIcon: MenuIcon, xIcon: XIcon, searchIcon: SearchIcon, chvronIcon: ChevronDownIcon }

  const response = await fetch(baseUrl()).then((res) => res.json())

  return replaceIconStrings(response, heroIcons)
}