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

export default function ResultsViewProvider(props) {

  debugger
  return (
    <>
      <div>
        <Link to={listStackResult}><p>listSel</p></Link>
        <Link to={gridResult}><p>gridSel</p></Link>
      </div>

      <Routes>

        <div>
          <Route path={listStackResult} element={<ListResult />} />
        </div>

        <div>
          <Route path={gridResult} element={<CardGridResult />} />
        </div>
      
      </Routes>
    </>
  )

}
