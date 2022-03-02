// All React & Lib
import React from 'react'

import getResultsDisplayInfo from '../../hooks/utils/getResultsDisplayInfo'
import { exampleLink } from '../../../config/exampleData'

export default function ResultsViewProvider(props) {
  const ListResult = props.children[0]
  const CardResult = props.children[1]

  // const results = getResultsDisplayInfo(props.results, props.cache)

    return (
      <>
        Example Results Components Rendering Test
        <ListResult result={exampleLink} /> 
      </>
    )

}
