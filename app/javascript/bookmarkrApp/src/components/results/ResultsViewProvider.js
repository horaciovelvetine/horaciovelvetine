// All React & Lib
import React from 'react'
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";


//* (&sub) Components
import { exampleLink } from '../../../config/exampleData'

const gridResult = '/view/cardGridResults'
const listStackResult = '/view/listStackResults'
const disableLink = '#'

export default function ResultsViewProvider(props) {
  const results = props.results
  debugger
  return (
    <>
      <div>
        {/* SHOULD BE DISABLED IF !results  */}
        <Link to={results ? listStackResult : disableLink }><span>listSel</span></Link>
        <Link to={results ? gridResult : disableLink}><span>gridSel</span></Link>
      </div>
      <Routes>
        {!results && <>NoResults Would Go Here</>}
        {results &&
          <>
            <div>
              <Route path={listStackResult} element={<ListResult />} />
            </div>

            <div>
              <Route path={gridResult} element={<CardGridResult />} />
            </div>
          </>}
      </Routes>
    </>

  )

}
