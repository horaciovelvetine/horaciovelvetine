//Used two times to format passed props
data = Object.entries(configSettings.configSettings.config.static).map((o) => ({ [o[0]]: [o[1]] }))

//Static and statful props access
props.config.configObject[0].static//stateful


//pseudo out the search mutation
/* on value of search set:
-



, fires off a get request a to get matchinIds back, while waiting <reuslts is loading> when results is no longer loading, filter displayed results to matching Ids
*/