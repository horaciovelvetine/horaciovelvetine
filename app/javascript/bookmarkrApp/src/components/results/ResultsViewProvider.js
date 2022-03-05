// All React & Lib
import React from 'react'

import { exampleLink } from '../../../config/exampleData'

export default function ResultsViewProvider(props) {
  const ListResult = props.children[0]
  const CardResult = props.children[1]

  function handleResultClick(e) {
    // e.preventDefault()
    console.log(`Result Event: ${e}`)
  }

  if (!props.results) {
    return (
      <>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ListResult result={exampleLink} />
        </div>
      </>
    )
  }
  
  if (props.results) {
    return (
      <> many results found
        {props.results.map(result => {
          debugger
          <ListResult result={result}/>
        })}
      </>
    )
  }

  debugger

}
