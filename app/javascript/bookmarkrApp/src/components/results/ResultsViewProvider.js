// All React & Lib
import React from 'react'

import getResultsDisplayInfo from '../../hooks/utils/getResultsDFisplayInfo'

export default function ResultsViewProvider(props) {
  const ListResult = props.children[0]
  const CardResult = props.children[1]
  const results = getResultsDisplayInfo(props.results, props.cache)

  
  return (
    <>
      Results!

      {/* {props.results.map((result) => (<ListResult result={result} />))}
      {props.results.map((result) => (<CardResult result={result} />))} */}
    </>
  )
}
