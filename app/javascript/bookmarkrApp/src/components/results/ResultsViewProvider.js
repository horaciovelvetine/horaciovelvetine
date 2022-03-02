// All React & Lib
import React from 'react'
import { BrowserRouter as ViewStyleRouter, Switch, Route, Link } from 'react-router-dom'

// Hooks, Utils & Misc

export default function ResultsViewProvider(props) {
  const [tags, links] = [...props.cache]
  const ListResult = props.children[0]
  const CardResult = props.children[1]

  if (props.results == null) return(<>Ready to roll</>)
  if (props.results) return (
    <ViewStyleRouter>
      <ul>
        <li>
          <Link Link to="/viewOpt=list">List View</Link>
        </li>
        <li>
          <Link Link to="/viewOpt=card">Card View</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/viewOpt=list">
          {lookupResults(resultsIds).map((result) => (<ListResult data={result} />))}
        </Route>
        <Route exact path="/viewOpt=card">
          {lookupResults(resultsIds).map((result) => (<CardResult data={result} />))}
        </Route>
      </Switch>
    </ViewStyleRouter>
  )
}
