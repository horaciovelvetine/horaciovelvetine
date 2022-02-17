import React from 'react'
import React, { useEffect } from 'react'

const baseUrl = 'http://127.0.0.1:3000/bookmarkr';

// Basic fetch no async, working for index bookmarkr grab
export default function basicFetchOutline() {
  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((json) => {
        const results = json.data
      });
  }, []);
  
  return (
    results
  )
}
