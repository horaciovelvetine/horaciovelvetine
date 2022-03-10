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
  const { path, url } = useRouteMatch();

  debugger
  return (
    <>Results</>
  )

}
