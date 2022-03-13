//* All React & Lib
import React from 'react'

//* (&sub) Components
import ResultsDef from './displays/ResultsDef';
import StackListTwoColResult from './displays/StackListTwoColResult'
import TagCloud from './subComponents/TagCloud';
import SelectTagButton from './subComponents/SelectTagButton';

//* Hooks, Utils & Misc
import sortByAttr from '../../utils/sortByAttr'

//! 
export default function ResultsViewProvider(props) {
  
  // config vars
  const { results, linkDelMutation, linkEditMutation, cacheData, settings, setTheSettings, setSoFill } = { ...props }
  
  // sorts info on getting from cache
  const linksInfo = () => sortByAttr('name', cacheData.links)
  const tagsInfo = () => sortByAttr('name', cacheData.tags)

  // props objects
  const displayProps = {
    results, cacheData, settings, setTheSettings, linkDelMutation, setSoFill
  }
  
  //*
  return (
    <>
      {/* //*RESULTS DISPLAYS
        based on the def of results displays either a default with all links displayed, or the info inside of the results var */}
      <section
        aria-labelledby='primary-heading'
        className='min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-first m-2'>
        {cacheData &&
          <>
          <div>Bookmarkr:</div>
          {(!results || results.length == 0) && <ResultsDef links={linksInfo()} tags={tagsInfo()} {...displayProps } />}
          </>}
        
        {results && <StackListTwoColResult { ...displayProps } />}
      </section>

      {/* //*TAG CLOUD
        hides on < large screen size */}
      <aside className='hidden lg:block lg:flex-shrink-0'>
        <div className='h-full relative flex flex-col w-96 bg-gray-100'>
          {cacheData && <TagCloud tags={tagsInfo(cacheData)} children={SelectTagButton} />}
        </div>
      </aside>
    </>

  )

}
