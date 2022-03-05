// All React & Lib
import React from 'react'
import { useQuery } from 'react-query'

//(&sub-) Components
import ResultsViewProvider from './results/ResultsViewProvider'
import CardResult from './results/subComponents/CardResult'
import ListResult from './results/subComponents/ListResult'
import TagCloud from './results/TagCloud'
import SelectTagButton from './results/subComponents/SelectTagButton'
import ApplicationSelectorSidebar from './results/ApplicationSelectorSidebar'
import getResultsObjectInfo from '../hooks/utils/getResultsObjectInfo'

// Hooks, Utils & Misc
import fetchCache from '../hooks/requests/fetchCache'
let nest = (data) => data.data.data.attributes

export default function Results(props) {

  // gets all links and assoc. objects to search against
  const { isLoading, error, data } = useQuery('cashe', fetchCache);

  //Get deeply nested and needed info
  const tagsInfo = (data) => {
    return nest(data).tags.sort((a, b) => (a.name > b.name) ? 1 : -1)
  }
  const linksInfo = (data) => {
    // on call should return ALL links from fetch
    return nest(data).links
  }

  return (
    <div className='h-screen flex-1 flex overflow-hidden'>
      <ApplicationSelectorSidebar applicationMenuSelections={props.applicationMenuSelections} dispatchApplicationMenu={props.dispatchApplicationMenu} />
      <main className='min-w-0 flex-1 border-t border-gray-300 lg:flex h-screen'>
        <section
          aria-labelledby='primary-heading'
          className='min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-first m-2'>
          {isLoading && <>...Let me get that for you, just a second</>}
          {error && <>Hold on... that doesn't seem right</>}
          {!isLoading && <ResultsViewProvider children={[ListResult, CardResult]} results={getResultsObjectInfo(props.resultIds.results, data)} />}
        </section>

        {/*=> //!Hides on screen size shrink */}
        <aside className='hidden lg:block lg:flex-shrink-0'>
          <div className='h-full relative flex flex-col w-96 bg-gray-100'>
            {!isLoading && <TagCloud tags={tagsInfo(data)} children={SelectTagButton} />}
          </div>
        </aside>

      </main>
    </div>
  )
}
