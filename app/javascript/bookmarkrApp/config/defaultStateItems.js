import React from 'react';
import { ChipIcon, AdjustmentsIcon, FireIcon, BookmarkAltIcon } from '@heroicons/react/outline';

export function applicationMenuSelections() {
  return ([
    { name: 'Bookmarkr', icon: BookmarkAltIcon, current: true, order: 1, url: '/' },
    { name: 'Portfolio', icon: ChipIcon, current: false, order: 2, url: '/portfolio' },
    { name: 'Ktchn', icon: FireIcon, current: false, order: 3, url: '/ktchn' },
    { name: 'Settings', icon: AdjustmentsIcon, current: false, order: 4, url: '/settings' }]
  )
}
export function navBarMenuItems() {
  return ([{ name: "+Link", href: "/addlink" }, { name: "+LinkGroup", href: "/addLinkGroup" }]
  )
}
export function defaultSettings() {
  return ({ mobileMenuOpen: false, searchDeBounceDelay: 515, slideOverOpen: false, slideOverActionType: null, omitTagsFromCloudList: [], addLinkDefPinned: false, addLinkGroupDefPinned: false })
}