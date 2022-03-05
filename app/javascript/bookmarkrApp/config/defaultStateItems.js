import React from 'react';
import { HomeIcon, BriefcaseIcon, FireIcon, ClipboardCheckIcon, MenuIcon, XIcon } from '@heroicons/react/outline';

export function applicationMenuSelections() {
  return ([
      { name: 'Default', icon: HomeIcon, current: true, order: 1 },
      { name: 'Hired', icon: BriefcaseIcon, current: false, order: 2 },
      { name: 'Ktchn', icon: FireIcon, current: false, order: 3 },
      { name: 'ToDos', icon: ClipboardCheckIcon, current: false, order: 4 },]
  )
}
export function navBarMenuItems() {
  return ([{ name: "+Link", href: "${baseUrl}/addlink" }, { name: "Settings", href: "${baseUrl}/settings" }]
  )
}
export function defaultSettings() {
  return ({ mobileMenuOpen: false, searchDeBounceDelay: 515, addLinkModalOpen: false })
}