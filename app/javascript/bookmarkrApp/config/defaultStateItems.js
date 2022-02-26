import React from 'react';
import { homeIcon, briefcaseIcon, fireIcon, clipboardCheckIcon } from '@heroicons/react/solid';

export function contextMenuSelections() {
  return (
    {
      contextMenuSelections: [
        { name: 'Default', icon: homeIcon, current: true, order: 1 },
        { name: 'Hired', icon: briefcaseIcon, current: false, order: 2 },
        { name: 'Ktchn', icon: fireIcon, current: false, order: 3 },
        { name: 'ToDos', icon: clipboardCheckIcon, current: false, order: 4 },]
    }
  )
}
export function navBarMenuItems() {
  return (
    { navbarLinks: [{ name: "+Link", href: "${baseUrl}/addlink" }, { name: "Settings", href: "${baseUrl}/settings" },] }
  )
}
export function defaultState() {
  return (
    { settings: { setMobileMenuOpen: false, searchDeBounceDelay: 515 } }
  )
}