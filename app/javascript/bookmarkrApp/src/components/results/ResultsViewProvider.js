// All React & Lib
import React from 'react'
import { BrowserRouter as ViewStyleRouter } from 'react-router-dom'
import { Route, Link, Routes } from 'react-router-dom'

// Hooks, Utils & Misc

export default function ResultsViewProvider(props) {
  const [tags, links] = [...props.cache]
  const ListResult = props.children[0]
  const CardResult = props.children[1]

  if (props.results == []) return <p>Type to get started...</p>
  return (
    <ViewStyleRouter>
      <nav>
        <ul>
          <li>
            <Link Link to="/viewOpt=list">List View</Link>
          </li>
          <li>
            <Link Link to="/viewOpt=card">Card View</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/viewOpt=list">
          {props.results.map((result) => (<ListResult result={result} />))}
        </Route>
        <Route exact path="/viewOpt=card">
          {props.results.map((result) => (<CardResult result={result} />))}
        </Route>
      </Routes>
    </ViewStyleRouter>
  )
}
