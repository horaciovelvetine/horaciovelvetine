import { useState } from "react"
import { setInitialWindowPosition } from "../../functions"
import type { ManagedWindow, Position, SiteSettings, SolvedokuGameState } from "../../types"

export function useAboutSolvedokuWindow(props: SiteSettings, parentWindow: ManagedWindow & SolvedokuGameState): ManagedWindow {
  const windowID = 'about-solvedoku-window'
  const title = 'About Solvedoku'
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