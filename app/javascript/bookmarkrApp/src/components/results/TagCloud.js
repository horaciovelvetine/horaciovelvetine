//React + Lib Imports
import React from 'react'

// (&sub) Components

export default function TagCloud(props) {
  

  return (
    <div className="mt-2">
      <h3 className="">Tags</h3>
      <hr></hr>

      <div role="tagList" className="mt-1">
        {props.tags.map((tag) => (
          props.children(tag))
        )}
      </div>
    </div>

  )
}
