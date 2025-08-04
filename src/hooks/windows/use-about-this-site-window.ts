import { useState } from "react"
import { setInitialWindowPosition } from "../../functions"
import type { ManagedWindow,  Position, SiteSettings } from "../../types"

export function useAboutThisSiteWindow(props: SiteSettings, parentWindow: ManagedWindow): ManagedWindow {
  const windowID = 'about-this-site-window'
  const title = 'About This Site'
  const [position, setPosition] = useState<Position>(() => setInitialWindowPosition(props))
  const [zIndex, setZIndex] = useState('0');

  return {
    id: windowID,
    title,
    position,
    setPosition,
    zIndex,
    setZIndex,
    navBarMenuItems: parentWindow.navBarMenuItems
  }
}