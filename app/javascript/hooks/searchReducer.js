
// Updates the complex state of query to return the correctectually contexed 
export default function searchReducer(searchPrev, payload) {
  const contexts = [payload[2].map((c) => c.name)]
  const query = payload[0]
  const context = payload[1][0]
  const previous = searchPrev

  return search = { query: query, context: context }

  //! For later when this needs to be a little more complicated
  // switch (payload[1][0].name) {
  //   case contexts[0][0]:
  //     console.log('Home')
  //     break
  //   case contexts[0][1]:
  //     console.log('Hired')
  //     break
  //   case contexts[0][2]:
  //     console.log('Ktchn')
  //     break
  //   case contexts[0][3]:
  //     console.log('ToDos')
  //     break
  //   default:
  //     console.log('error no context')
  // }

}

