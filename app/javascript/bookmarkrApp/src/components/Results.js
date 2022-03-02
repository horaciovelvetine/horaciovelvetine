// All React & Lib
import React from 'react'

//(&sub-) Components
import CardResult from './results/CardResult'
import ListResult from './results/ListResult'
import TagCloud from './results/TagClouid'
import ContextsSelectorSidebar from './results/ContextsSelectorSidebar'

// Hooks, Utils & Misc
import fetchCache from '../requests/fetchCache'

export default function Results(props) {
  //? data is what the ID's should be checked against (maybe even up a parent in the bookmarkrApp??)
  const { isLoading, error, data } = useQuery('cashe', fetchCache);

  function checkData(data) {
    !data && puts('Data is falsey')
    data == undefined && puts('Data is undefined')
    puts(data)
    debugger
  }
  
  return (
    <div className='h-screen flex-1 flex overflow-hidden'>
      <ContextsSelectorSidebar contextsMenuSelections={props.contextsMenuSelections} dispatchContextMenu={props.dispatchContextMenu} />

      <main className='min-w-0 flex-1 border-t border-gray-200 lg:flex h-screen'>
        <section
          aria-labelledby='primary-heading'
          className='min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-first'>
          {isLoading && <>...Let me get that for you, just a second</>}
          {error && <>Hold on... that doesn't seem right</>}
          {/* //! Eventually this should be iterating over and returning results for each of resultsIds */}
          {!isLoading && <ListResult data={checkData(data)} />}
          {!isLoading && <CardResult data={checkData(data)} />}

          {/* //! TagCloud should just rely on data and render as it gets tags, on click of a tag mutates results */}
          {!isLoading && <TagCloud data={checkData(data)}/> }
          
        </section>
        
      </main>
    </div>
  )
}

//! Dont forget to add the tag cloud component to this return under with the conditional
//! React routing needs to happen, where each of the routes mutates (from parent) so that when resultIds changes each component (react router switch pages) displays the smae resutls. 