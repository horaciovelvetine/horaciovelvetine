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
import sortByAttr from '../utils/sortByAttr'
import SidebarMenuSelection from './results/subComponents/SidebarMenuSelection';

// Hooks, Utils & Misc

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Results(props) {
  //* Main Page Container Component

  //configures cache and related helpers
  const cacheData = props.cacheData //? { links: [{linkObj}], tags: [{tagObj}]} (query: 'cashe')
  const tagsInfo = () => sortByAttr('name', cacheData.tags)


  return (
    <div className='h-screen flex-1 flex overflow-hidden'>
      <Router>
        <nav aria-label='Sidebar' className='hidden md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto'>
          <div className='relative w-20 flex flex-col p-3 space-y-3'>
            {props.applicationMenuSelections.map((menuSelection) => <SidebarMenuSelection menuSelection={menuSelection}/>)}
          </div>
        </nav>

        <main className='min-w-0 flex-1 border-t border-gray-300 lg:flex h-screen'>

          <section
            aria-labelledby='primary-heading'
            className='min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-first m-2'>

            <Routes>
              {/* HOME (bookmarkr) */}
              <Route path={'/'} element={<>ResultsViewProvider</>} />

              {/* {!cacheData && <>Waiting on the server for a bit of info..</>}
                {cacheData && <><ResultsViewProvider children={[ListResult]} results={getResultsObjectInfo(props.resultIds.results, cacheData)} /></>} */}

              {/* PORTFOLIO */}
              <Route path={'/portfolio'} element={<>Portfolio Page</>} />

              {/* KTCHN */}
              <Route path={'/ktchn'} element={<p>KTCHN Page</p>} />

              {/* SETTINGS */}
              <Route path={'/settings'} element={<p>Settings Page</p>} />

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
