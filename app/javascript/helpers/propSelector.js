export default function propSelector(props, componentName) {

  switch (componentName) {
    case "contexts":
      return props.configObject.config[0].static.contextsMenuItems
    case "mobileNavMenuOpen":
      return props.configObject.config[0].stateful.mobileMenuOpen
    case "navbarLinks":
      return props.configObject.config[0].static.navbarLinks
    case "dispatch":
      return props.configObject.config[1]
    case "selector":
      return props.config[0].static.contextsMenuItems
    default:
      debugger
  }

}