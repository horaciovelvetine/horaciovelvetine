// All React & Lib
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//(&sub-) Components
import ResultsViewProvider from './results/ResultsViewProvider'
import TagCloud from './results/TagCloud'
import SelectTagButton from './results/subComponents/SelectTagButton'


//* Hooks, Utils & Misc
import getResultsInfo from '../hooks/utils/getResultsInfo'
import sortByAttr from '../utils/sortByAttr'
import SidebarSelections from './mainContent/SidebarSelections';


//* Main Page Container Component
export default function MainContents(props) {

  //configures cache and related helpers
  const cacheData = props.cacheData //? { links: [{linkObj}], tags: [{tagObj}]} (query: 'cashe')
  const tagsInfo = () => sortByAttr('name', cacheData.tags)

  // debugger

  return (
    <div className='h-screen flex-1 flex overflow-hidden'>
      <Router>
        <SidebarSelections sidebarSelections={props.sidebarSelections} dispatchSidebarSelection={props.dispatchSidebarSelection} />

        <main className='min-w-0 flex-1 border-t border-gray-300 lg:flex h-screen'>

          <section
            aria-labelledby='primary-heading'
            className='min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-first m-2'>

            <Routes>
              {/* HOME (bookmarkr) */}
            <Route path={'/*'} element={<ResultsViewProvider results={getResultsInfo(props, cacheData)}/>} />

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
