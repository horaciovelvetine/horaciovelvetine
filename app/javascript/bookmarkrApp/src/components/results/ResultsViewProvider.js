// All React & Lib
import React from 'react'

import getResultsDisplayInfo from '../../hooks/utils/getResultsDisplayInfo'
import { exampleLink } from '../../../config/exampleData'

export default function ResultsViewProvider(props) {
  const ListResult = props.children[0]
  const CardResult = props.children[1]

  function handleResultClick(e) {
    e.preventDefault()
    console.log(`Result Event: ${e}`)
    debugger
  }

  // const results = getResultsDisplayInfo(props.results, props.cache)

  if (props.results == []) {
    return (
      <>
        Example Results Components Rendering Test
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ListResult result={exampleLink} />
        </div>
      </>
    )
  }
  
  if (props.results.length >= 1) {
    return (
      <>
        {props.results.map(result => {
          <ListResult result={result}/>
        })}
      </>
    )
  }

  debugger

}
