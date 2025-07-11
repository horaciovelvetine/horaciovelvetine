import { useState, useEffect, useMemo, useCallback } from 'react';
import type { ClockDisplaySettings } from '../../../types';

export function ClockDisplay({ weekday, month, day, hour, hour12, minute }: ClockDisplaySettings) {
  // Memoize the formatting options to prevent recreation on every render
  const formatOptions = useMemo(() => ({
    weekday,
    month,
    day,
    hour,
    minute,
    hour12,
  }), [weekday, month, day, hour, minute, hour12]);

  // Memoize the formatter function to avoid recreating it
  const formatTime = useCallback((date: Date) => {
    return date.toLocaleString('en-US', formatOptions).replace(/,/g, '');
  }, [formatOptions]);

  const [time, setTime] = useState(() => formatTime(new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [formatTime]);

  return <p className='text-nowrap font-extrabold'>{time}</p>;
}
