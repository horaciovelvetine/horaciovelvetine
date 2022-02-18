import React from 'react'
import React, { useEffect } from 'react'

const baseUrl = 'http://127.0.0.1:3000/bookmarkr';

// Basic fetch no async, working for index bookmarkr grab
export default function fetchBookmarks() {
  return fetch(baseUrl).then((response) => res.json())
}
