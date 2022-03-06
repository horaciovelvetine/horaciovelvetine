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
  return ([{ name: "+Link", href: "${baseUrl}/addlink" }, { name: "Settings", href: "${baseUrl}/settings" }]
  )
}
export function defaultSettings() {
  return ({ mobileMenuOpen: false, searchDeBounceDelay: 515, addLinkSlideOverOpen: false, saveLinkModalPrompt: false, omitTagsFromCloudList: []})
}