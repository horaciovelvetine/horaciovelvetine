// All React & Lib
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

//(&sub-) Components
import ResultsViewProvider from './results/ResultsViewProvider'
import ListResult from './results/subComponents/ListResult'
import TagCloud from './results/TagCloud'
import SelectTagButton from './results/subComponents/SelectTagButton'
import getResultsObjectInfo from '../hooks/utils/getResultsObjectInfo'
import SidebarSelectionLink from './results/subComponents/SidebarSelectionLink';
import baseUrl from '../../config/baseUrl';

// Hooks, Utils & Misc

export default function Results(props) {
  //* Main Page Container Component

  // cacheData == { links: [{linkObj}], tags: [{tagObj}]} // from 'cashe' query
  const cacheData = props.cacheData

  //configures handles nesting said props
  const nest = (data) => data.data.data.attributes
  const tagsInfo = (data) => nest(data).tags.sort((a, b) => (a.name > b.name) ? 1 : -1)
  const linksInfo = (data) => nest(data).links



  return (
    <div className='h-screen flex-1 flex overflow-hidden'>
      <Router>
        <nav aria-label='Sidebar' className='hidden md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto'>
          <div className='relative w-20 flex flex-col p-3 space-y-3'>
            <ul>
              {props.applicationMenuSelections.map((menuSelection) => {
                <li key={menuSelection.name + '-' + menuSelection.order}>

                  { /* Links//!=> ['/', '/ktchn', 'portfolio', 'settings'] */}
                  <Link to={baseUrl(`${menuSelection.url}`)}>
                    <SidebarSelectionLink menuSelection={menuSelection} />
                  </Link>
                </li>
              })}
            </ul>
          </div>
        </nav>

        <main className='min-w-0 flex-1 border-t border-gray-300 lg:flex h-screen'>

          <section
            aria-labelledby='primary-heading'
            className='min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-first m-2'>

            <Routes>
              {/* HOME (bookmarkr) */}
              <Route path={ baseUrl('/') }>
                {!cacheData && <>Waiting on the server for a bit of info..</>}
                {cacheData && <ResultsViewProvider children={[ListResult]} results={getResultsObjectInfo(props.resultIds.results, cacheData)} />}
              </Route>

              {/* PORTFOLIO */}
              <Route path={baseUrl('/portfolio')} element={<>Portfolio Page</>} />

              {/* KTCHN */}
              <Route path={baseUrl('/ktchn')} element={<p>KTCHN Page</p>} />

              {/* SETTINGS */}
              <Route path={baseUrl('/settings')} element={<p>Settings Page</p>} />

            </Routes>

          </section>

          {/* ALL SCREENS (hides on < md screen size) */}
          <aside className='hidden lg:block lg:flex-shrink-0'>
            <div className='h-full relative flex flex-col w-96 bg-gray-100'>
              {cacheData && <TagCloud tags={tagsInfo(cacheData)} children={SelectTagButton} />}
            </div>
          </aside>

        </main>
      </Router>
    </div>
  )
}
