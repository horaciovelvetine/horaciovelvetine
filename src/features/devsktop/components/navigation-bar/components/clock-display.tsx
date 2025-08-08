import { useCallback, useEffect, useMemo, useState } from 'react';
import type { ClockDisplaySettings } from '../../../../../types';

/**
 * Clock display in upper-right hand included in the { @see NavigationBar }, updates every second to maintain the current time.
 *
 * @param {string} [props.weekday] - Format weekday display - ('long', 'short')
 * @param {string} [props.month] - Format month display - ('long', 'short', 'numeric')
 * @param {string} [props.day] - Format day display - ('numeric', '2-digit')
 * @param {string} [props.hour] - Format hour display - ('numeric', '2-digit')
 * @param {boolean} [props.hour12] - Whether to use 12-hour format (true) or 24-hour format (false)
 * @param {string} [props.minute] - Format for minute display - ('numeric', '2-digit')
 */
export function ClockDisplay({
	weekday,
	month,
	day,
	hour,
	hour12,
	minute,
}: ClockDisplaySettings) {
	// Memoize the formatting options to prevent recreation on every render
	const formatOptions = useMemo(
		() => ({
			weekday,
			month,
			day,
			hour,
			minute,
			hour12,
		}),
		[weekday, month, day, hour, minute, hour12]
	);

	// Memoize the formatter function to avoid recreating it
	const formatTime = useCallback(
		(date: Date) => {
			return date.toLocaleString('en-US', formatOptions).replace(/,/g, '');
		},
		[formatOptions]
	);

	const [time, setTime] = useState(() => formatTime(new Date()));

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(formatTime(new Date()));
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, [formatTime]);

	return <p className='text-nowrap font-extrabold tracking-wide'>{time}</p>;
}
