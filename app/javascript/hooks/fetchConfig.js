const baseUrl = 'http://127.0.0.1:3000/bookmarkr';


export default async function fetchConfigCache(dispatch) {
  const dis = dispatch
  const response = await fetch(baseUrl).then((res) => res.json()) //await add
  
  
  return response
}


/*


Assuming this is created and then dispatched to sharedConfig
const sharedConfig = {
  mobileMenuOpen: false,
  currentContext: bookmarkr, 
  }


Then both result and search iterate through the data using the same function, create the constants needed? 

--> how to keep from defining the same thing two times DRY??? 

  Call the same function.... 
    - forwards the same data multiple times??
    - multiples of the same var

  same function using useMemo at the end and returning the needed static data (links, contexts, tags... etc)
*/