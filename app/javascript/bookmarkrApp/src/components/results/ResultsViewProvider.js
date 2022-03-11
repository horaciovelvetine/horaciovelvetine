//* All React & Lib
import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

//* (&sub) Components
import ResultsDef from './displays/ResultsDef';
import CardGridResults from './displays/CardGridResults'
import StackListTwoColResult from './displays/StackListTwoColResult'
import TagCloud from './subComponents/TagCloud';
import SelectTagButton from './subComponents/SelectTagButton';

//* Hooks, Utils & Misc
import sortByAttr from '../../utils/sortByAttr'
import getResultsInfo from '../../hooks/utils/getResultsInfo';

const gridView = '/view/cardGridResults'
const listView = '/view/listStackResults'
const disableLink = '#'

export default function ResultsViewProvider(props) {
  
  const { resultsIds, cacheData, settings, setTheSettings } = { ...props }
  
  const linksInfo = () => sortByAttr('name', cacheData.links)
  const tagsInfo = () => sortByAttr('name', cacheData.tags)
  
  const displayProps = {
    cacheData, settings, setTheSettings
  }

  const results = () => getResultsInfo(resultsIds, cacheData)
  
  return (
    <>
      <section
        aria-labelledby='primary-heading'
        className='min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-first m-2'>
        <div>Bookmarkr:
          <Link to={results ? listView : disableLink}>list</Link>
          <Link to={results ? gridView : disableLink}>grid</Link>
        </div>

        {cacheData && <ResultsDef tags={tagsInfo()} links={linksInfo()} settings={settings} setTheSettings={setTheSettings} />}
        {resultsIds &&
          <>
            <Routes>
              <div>
              <Route path={listView} element={<StackListTwoColResult {...displayProps} results={getResultsInfo(resultsIds, cacheData)}/>} />
              </div>

              <div>
              <Route path={gridView} element={<CardGridResults {...displayProps} results={getResultsInfo(resultsIds, cacheData)}/>} />
              </div>
            </Routes>
          </>
        }

      </section>

      <aside className='hidden lg:block lg:flex-shrink-0'>
        <div className='h-full relative flex flex-col w-96 bg-gray-100'>
          {cacheData && <TagCloud tags={tagsInfo(cacheData)} children={SelectTagButton} />}
        </div>
      </aside>
    </>

  )

}
{/* <aside className='hidden lg:block lg:flex-shrink-0'>
  <div className='h-full relative flex flex-col w-96 bg-gray-100'>
    {cacheData && <TagCloud tags={tagsInfo(cacheData)} children={SelectTagButton} />}
  </div>
</aside> */}
{/* <section
  aria-labelledby='primary-heading'
  className='min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-first m-2'>Bookmarkr>
</section> */}