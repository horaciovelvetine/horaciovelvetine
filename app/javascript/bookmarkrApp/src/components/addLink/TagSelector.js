import React from 'react'

export default function TagSelector(props) {
  
  return (
    <div className="mt-2">

      <div role="tagList" className="mt-1">
        {props.tags.map((tag) => (
          props.children(tag))
        )}
      </div>
    </div>
  )
}
