//* All React & Lib
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//* (&sub-) Components
import ResultsViewProvider from './results/ResultsViewProvider'

//* Hooks, Utils & Misc
import SidebarSelections from './mainContent/SidebarSelections';

//* Main Page Container Component
export default function MainContents(props) {

  const { cacheData, dispatchSidebarSelection, results, setTheSettings, settings, sidebarSelections, linkDelMutation, setSoFill } = { ...props }

  const bookmarkrProps = { cacheData, settings, setTheSettings }
  const devHubProps = { sidebarSelections, dispatchSidebarSelection }
  
  return (
    <div className='h-screen flex-1 flex overflow-hidden'>
      <Router>
        <SidebarSelections { ...devHubProps } { ...bookmarkrProps } />

        <main className='min-w-0 flex-1 border-t border-gray-300 lg:flex h-screen'>

          <Routes>
            {/* HOME (bookmarkr) */}
            <Route path={'/*'} element={<ResultsViewProvider results={results} linkDelMutation={linkDelMutation} setSoFill={setSoFill}  { ...bookmarkrProps} />} />

            {/* PORTFOLIO */}
            <Route path={'/portfolio'} element={<p>Portfolio</p>} />

            {/* KTCHN */}
            <Route path={'/ktchn'} element={<p>KTCHN</p>} />

            {/* SETTINGS */}
            <Route path={'/settings'} element={<p>Settings</p>} />

          </Routes>

        </main>
      </Router>
    </div>
  )
}
