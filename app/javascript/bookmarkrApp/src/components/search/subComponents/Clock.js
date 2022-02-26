import React from 'react';
import { useState, useEffect } from 'react';

export default function Clock() {
  const [now, setNow] = useState(() => new Date().toTimeString().slice(0, 8));
  useEffect(() => {
    const interval = setTimeout(() => {
      setNow(new Date().toTimeString().slice(0, 8));
    }, 1000);
    return function cleanup() {
      clearInterval(interval);
    };
  }, [now]);

  return <div className='text-sm font-medium text-gray-700'>{now.slice(0, 5)}</div>;
}