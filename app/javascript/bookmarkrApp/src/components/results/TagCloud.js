//React + Lib Imports
import React from 'react'

// (&sub) Components

export default function TagCloud(props) {
  const [tags, links] = [...props.cache]

  return (
    <div className="overflow-y-auto flex flex-col">
      <ul role="tagList" className="grid ">
        {tags.map((tag) => (
          props.children(tag))
        )}
      </ul>
    </div>

  )
}
