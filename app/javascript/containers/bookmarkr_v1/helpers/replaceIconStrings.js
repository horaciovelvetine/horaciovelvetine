export default function replaceIconStrings(resp, heroIcons) {

  const contexts = resp.data.attributes.configSettings.static.contextsMenuItems

  for (let index = 0; index < contexts.length; index++) {
    const element = contexts[index];
    element.icon = heroIcons[`${element.icon}`]
    
  }

  return resp
  
}

