import React from 'react';
import { ChipIcon, HomeIcon, FireIcon, BookmarkAltIcon } from '@heroicons/react/outline';

export function applicationMenuSelections() {
  return ([
      { name: 'Bookmarkr', icon: BookmarkAltIcon, current: true, order: 1 },
      { name: 'Portfolio', icon: ChipIcon, current: false, order: 2 },
      { name: 'Ktchn', icon: FireIcon, current: false, order: 3 },]
  )
}
export function navBarMenuItems() {
  return ([{ name: "+Link", href: "/addlink" }, { name: "+LinkGroup", href: "/addLinkGroup" }]
  )
}
export function defaultSettings() {
  return ({ mobileMenuOpen: false, searchDeBounceDelay: 515, slideOverOpen: false, slideOverActionType: null, omitTagsFromCloudList: [], addLinkDefPinned: false, addLinkGroupDefPinned: false})
}