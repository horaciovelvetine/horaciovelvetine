//Used two times to format passed props
data = Object.entries(configSettings.configSettings.config.static).map((o) => ({ [o[0]]: [o[1]] }))

//Static and statful props access
props.config.configObject[0].static//stateful