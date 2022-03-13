//* modifies event handler to always return a target ID to act on
export default function sidebarTargetFinder(target) {
  //==> Finds the nearest menu value for target.id to affect UI switch. 
  const acquired = (typeof target === 'string') ? checkValidTaraget(target) : searchNearest(target)
  return acquired
}

function searchNearest(target) {
  //==> should search up or down node stack to find nearest id that makes sense
  if (target.id) {
    return removeElementIdSubType(target.id)
  } else if (target.nearestViewportElement.id) {
    return removeElementIdSubType(target.nearestViewportElement.id)
  } else {
    debugger
  }
}

function checkValidTaraget(target) {
  //==> returns target name to change curSelection
  if (menuSelections.include(target)) {
    return target
  }
  return removeElementIdSubType(target)
}

function removeElementIdSubType(id) {
  //==> removes last 5 (-icon -or- -link) from id
  const validTarget = id.slice(0, -5)
  return validTarget
}