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

//(&sub-) Components
import ResultsViewProvider from './results/ResultsViewProvider'
import ListResult from './results/subComponents/ListResult'
import TagCloud from './results/TagCloud'
import SelectTagButton from './results/subComponents/SelectTagButton'
import ApplicationSelectorSidebar from './results/ApplicationSelectorSidebar'
import getResultsObjectInfo from '../hooks/utils/getResultsObjectInfo'
import SidebarSelectionLink from './results/subComponents/SidebarSelectionLink';
import baseUrl from '../../config/baseUrl';

// Hooks, Utils & Misc

export default function Results(props) {
  // gets all result information for use
  const cacheData = props.cacheData



  //configures props and handles nesting of said props
  const nest = (data) => data.data.data.attributes
  const tagsInfo = (data) => {
    return nest(data).tags.sort((a, b) => (a.name > b.name) ? 1 : -1)
  }
  const linksInfo = (data) => {
    // on call should return ALL links from fetch
    return nest(data).links
  }

  return (
    <div className='h-screen flex-1 flex overflow-hidden'>
      <Router>
        <nav aria-label='Sidebar' className='hidden md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto'>
          <div className='relative w-20 flex flex-col p-3 space-y-3'>
            <ul>
              {props.applicationMenuSelections.map((menuSelection) => {
                <li key={menuSelection.order}>
                  <Link to={baseUrl(`${menuSelection.url}`)}>
                    <SidebarSelectionLink menuSelection={menuSelection} />
                  </Link>
                </li>
              })}
            </ul>
          </div>
        </nav>
        {/* <ul>
          <li>
            <Link to="/search-results">Results</Link>
            <Link to="/portfolio-dash">Portfolio</Link>
            <Link to="/ktchn">Ktchn</Link>
          </li>
        </ul> */}
        <Switch>
          <main className='min-w-0 flex-1 border-t border-gray-300 lg:flex h-screen'>

            <section
              aria-labelledby='primary-heading'
              className='min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-first m-2'>

              {/* HOME BOOKMARKR */}
              <Route exact path={baseUrl('/')} >
                {!cacheData && <>Waiting on the server for a bit of info..</>}
                {cacheData && <ResultsViewProvider children={[ListResult, CardResult]} results={getResultsObjectInfo(props.resultIds.results, cacheData)} />}
              </Route>
              
              {/* PORTFOLIO */}
              <Route exact path={baseUrl('/portfolio')}>
                <p>Portfolio Page</p>
              </Route>
              
              {/* KTCHN */}
              <Route exact path={baseUrl('/portfolio')}>
                <p>KTCHN Page</p>
              </Route>
              
              {/* HOME SETTINGS */}
              <Route exact path={baseUrl('/settings')}>
                <p>This is where a settings page would go</p><br></br><br></br><br></br><br></br><br></br><p>IF I HAD ONE!!!!</p>
              </Route>
            
            </section>

            {/* ALL SCREENS (hides on < md screen size) */}
            <aside className='hidden lg:block lg:flex-shrink-0'>
              <div className='h-full relative flex flex-col w-96 bg-gray-100'>
                {cacheData && <TagCloud tags={tagsInfo(cacheData)} children={SelectTagButton} />}
              </div>
            </aside>

          </main>
        </Switch>
      </Router>
    </div>
  )
}
