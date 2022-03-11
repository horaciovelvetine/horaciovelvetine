//* All React & Lib
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//* (&sub-) Components
import ResultsViewProvider from './results/ResultsViewProvider'

//* Hooks, Utils & Misc
import SidebarSelections from './mainContent/SidebarSelections';

//* Main Page Container Component
export default function MainContents(props) {

  const { cacheData, dispatchSidebarSelection, resultsIds, setTheSettings, settings, sidebarSelections } = { ...props }

  
  return (
    <div className='h-screen flex-1 flex overflow-hidden'>
      <Router>
        <SidebarSelections sidebarSelections={sidebarSelections} dispatchSidebarSelection={dispatchSidebarSelection} />

        <main className='min-w-0 flex-1 border-t border-gray-300 lg:flex h-screen'>

          <Routes>
            {/* HOME (bookmarkr) */}
            <Route path={'/*'} element={<ResultsViewProvider results={resultsIds} cacheData={cacheData} settings={settings} setTheASettings={setTheSettings} />} />

            {/* PORTFOLIO */}
            <Route path={'/portfolio'} element={<>Portfolio Page</>} />

            {/* KTCHN */}
            <Route path={'/ktchn'} element={<p>KTCHN Page</p>} />

            {/* SETTINGS */}
            <Route path={'/settings'} element={<p>Settings Page</p>} />

          </Routes>

        </main>
      </Router>
    </div>
  )
}
