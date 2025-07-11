import { useEffect, useRef, useState } from 'react';
import { DropdownMenuOptionsContainer } from './dropdown-menu-options-container';
import { unfocusedClickHandler } from '../../../functions/site/unfocused-click-handler';
import type { DropdownMenuParent } from '../../../types/site/dropdown-menu-parent';


export function NavigationMenuDropdownOption({ title, options, isSelfTitled }: DropdownMenuParent) {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  //? Closes dropdown unfocused click
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      unfocusedClickHandler(event, dropdownRef, setShowDropdownMenu, showDropdownMenu);
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [showDropdownMenu]);

  return (
    <div ref={dropdownRef}>
      <button
        type='button'
        className='hover:bg-white/30 rounded-sm px-2'
        onClick={() => {
          setShowDropdownMenu(!showDropdownMenu);
        }}>
        <h2 className={isSelfTitled ? 'font-extrabold' : ''}>{title}</h2>
      </button>
      {showDropdownMenu && <DropdownMenuOptionsContainer {...{ options }} />}
    </div>
  );
}
