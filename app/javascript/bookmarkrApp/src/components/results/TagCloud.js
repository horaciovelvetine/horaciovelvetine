//React + Lib Imports
import React from 'react'

// (&sub) Components

export default function TagCloud(props) {
  

  return (
    <div className="overflow-y-auto flex flex-col">
      <ul role="tagList" className="grid ">
        {props.tags.map((tag) => (
          props.children(tag))
        )}
      </ul>
    </div>

  )
}
