//* React + Lib Imports
import React from 'react'
import sortByAttr from '../../../utils/sortByAttr'


export default function TagCloud(props) {

  const tags = props.tags

  return (
    <div className="mt-2">
      <h3 className="">Tags</h3>
      <hr></hr>

      <div role="tagList" className="mt-1">
        {tags.map((tag) => (
          props.children(tag))
        )}
      </div>
    </div>

  )
}
