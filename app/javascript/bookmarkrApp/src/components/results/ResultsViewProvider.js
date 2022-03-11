// All React & Lib
import React from 'react'
import { Routes, Route, Link } from "react-router-dom";


//* (&sub) Components
import { exampleLinks } from '../../../config/exampleData'
import ResultsDefaultDisplay from './subComponents/ResultsDefaultDisplay';
import CardGridResults from './displays/CardGridResults'
import StackListTwoColResult from './displays/StackListTwoColResult'
import TagCloud from './TagCloud';
import SelectTagButton from './subComponents/SelectTagButton';

//* Hooks, Utils & Misc
import sortByAttr from '../../utils/sortByAttr'

const gridView = '/view/cardGridResults'
const listView = '/view/listStackResults'
const disableLink = '#'

export default function ResultsViewProvider(props) {
  const results = props.results
  const cacheData = props.cacheData
  const tagsInfo = () => sortByAttr('name', cacheData.tags)

  return (
    <>
      <section
        aria-labelledby='primary-heading'
        className='min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-first m-2'>
        <div>Bookmarkr:
          <Link to={results ? listStackResult : disableLink}>list</Link>
          <Link to={results ? gridResult : disableLink}>grid</Link>
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
          <StackListTwoColResult data={exampleLinks} />
        </>
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