// All React & Lib
import React from 'react'
import { BrowserRouter as ViewStyleRouter, Switch, Route, Link } from 'react-router-dom'

// Hooks, Utils & Misc

export default function ResultsViewProvider(props) {
  debugger
  // const [LinkResult, CardResult] = [...props.chilren]
  // cosnt [ tags, links ] = [...props.cache]
  return (
    <ViewStyleRouter>
      <ul>
        <li>
          <Link Link to="/viewOpt=list">List View</Link>
        </li>
        <li>
          <Link Link to="/viewOpt=card">List View</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/viewOpt=list">
          {!isLoading && lookupResults(resultsIds).map((result) => (<ListResult data={result} />))}
        </Route>
        <Route exact path="/viewOpt=card">
          {!isLoading && lookupResults(resultsIds).map((result) => (<CardResult data={result} />))}
        </Route>
      </Switch>
    </ViewStyleRouter>
  )
}
