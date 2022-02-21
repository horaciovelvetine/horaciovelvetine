
export default function propSelector(props, componentName) {
  // if (componentName == "MobileContextDropdown") {
  //   return contexts = props.config.config[0].static.contextsMenuItems
  // }

  switch (componentName) {
    case "MobileContextDropdown":
      return props.config.config[0].static.contextsMenuItems
    case "MobileNavBarToggleDisplayButton":
      return props.config.config[0].stateful.mobileMenuOpen
    case "SearchForm":
      return 
    default:
      debugger
  }

  debugger
}