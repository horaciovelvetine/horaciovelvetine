import { useRef, useState, useEffect } from "react";
import { unfocusedClickHandler } from "../../../../functions";
import type { NavBarMenuParent } from "../../../../types";
import { NavBarDropdownMenu } from "./nav-bar-dropdown-menu";

export function NavBarMenuItemParent({
  navbarDisplayIcon,
  navbarDisplayText,
  dropdownOptions,
  isAppTitledDisplayText
}: NavBarMenuParent) {
  const menuBarRef = useRef<HTMLLIElement>(null);
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);


  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      unfocusedClickHandler(
        event,
        menuBarRef,
        setShowDropdownMenu,
        showDropdownMenu
      );
    };
    document.addEventListener('mousedown', clickHandler);
    return () => {
      document.removeEventListener('mousedown', clickHandler);
    };
  }, [showDropdownMenu]);

  return (
    <li
      ref={menuBarRef}
      onClick={() => { setShowDropdownMenu(prev => !prev) }}
      className={`relative flex first:mr-1 px-2 rounded ${showDropdownMenu ? 'bg-gray-300/30' : ''}`}>
      <button type='button'>
        {navbarDisplayIcon && (
          <img
            src={navbarDisplayIcon}
            className='h-7'
          />
        )}
        {navbarDisplayText && <p className={isAppTitledDisplayText ? 'font-extrabold' : ''}>{navbarDisplayText}</p>}
      </button>
      {showDropdownMenu && (
        <NavBarDropdownMenu dropdownOptions={dropdownOptions} />
      )}
    </li>
  );
}