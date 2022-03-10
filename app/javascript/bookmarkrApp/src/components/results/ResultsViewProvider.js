// All React & Lib
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

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
        No Results to show
      </>
    )
  }

  if (props.results) {
    return (
      <div>
        <>We got Results bois</>
      </div>
    )
  }

  debugger

}
