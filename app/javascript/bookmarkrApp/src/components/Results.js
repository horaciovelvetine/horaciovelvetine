// All React & Lib
import React from 'react'
import { useQuery } from 'react-query'

//(&sub-) Components
import ResultsViewProvider from './results/ResultsViewProvider'
import CardResult from './results/subComponents/CardResult'
import ListResult from './results/subComponents/ListResult'
import TagCloud from './results/TagCloud'
import SelectTagButton from './results/subComponents/SelectTagButton'
import ContextsSelectorSidebar from './results/ContextsSelectorSidebar'


// Hooks, Utils & Misc
import fetchCache from '../requests/fetchCache'

export default function Results(props) {
  
  
  const digUpCacheData = (data) => {
    return ([data.data.data.attributes.tags, data.data.data.attributes.links])
    
  }
  const { isLoading, error, data } = useQuery('cashe', fetchCache);
  const resultsIds = props.resultIds

  function findResultInfo(resultIds) {
    // should return an array of results objects w/ info
    if (resultsIds == undefined) {
      return null
    }

    debugger
  }
  return (
    <div className='h-screen flex-1 flex overflow-hidden'>
      <ContextsSelectorSidebar contextsMenuSelections={props.contextsMenuSelections} dispatchContextMenu={props.dispatchContextsMenu} />

      <main className='min-w-0 flex-1 border-t border-gray-200 lg:flex h-screen'>
        <section
          aria-labelledby='primary-heading'
          className='min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-first'>
          {isLoading && <>...Let me get that for you, just a second</>}
          {error && <>Hold on... that doesn't seem right</>}
          {!isLoading && <ResultsViewProvider children={[ListResult, CardResult]} cache={digUpCacheData(data)} results={findResultInfo(resultsIds)} />}
        </section>

        {/*=> //!Hides on screen size shrink */}
        <aside className='hidden lg:block lg:flex-shrink-0'>
          <div className='h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100 overflow-y-auto'>
            {!isLoading && <TagCloud cache={digUpCacheData(data)} children={SelectTagButton} />}
          </div>
        </aside>

      </main>
    </div>
  )
}
