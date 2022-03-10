// All React & Lib
import React from 'react'
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";


//* (&sub) Components
import { exampleLink } from '../../../config/exampleData'
import ResultsDefaultDisplay from './subComponents/ResultsDefaultDisplay';
import CardGridResults from './displays/CardGridResults'
import StackListTwoColResult from './displays/StackListTwoColResult'

const gridView = '/view/cardGridResults'
const listView = '/view/listStackResults'
const disableLink = '#'

export default function ResultsViewProvider(props) {
  const results = props.results


  return (
    <>
      <div>
        <Link to={results ? listStackResult : disableLink}><span>listSel</span></Link>
        <Link to={results ? gridResult : disableLink}><span>gridSel</span></Link>
      </div>
      {!results && <ResultsDefaultDisplay />}
      {results &&
        <>
          <Routes>
            <div>
              <Route path={listView} element={<StackListTwoColResult />} />
            </div>

            <div>
              <Route path={gridView} element={<CardGridResults />} />
            </div>
          </Routes>
        </>
      }
      <>
        <StackListTwoColResult data={exampleLink} />
      </>
    </>

  )

}
