//React + Lib Imports
import React from 'react'

// (&sub) Components

export default function TagCloud(props) {
  const [tags, links] = [...props.cache]

  return (
    <>
      {tags.map((tag) => props.children(tag))}
    </>
  )
}
