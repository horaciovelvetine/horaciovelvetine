import { useState } from 'react';
import type {
	WeekdayFormat,
	MonthFormat,
	DayFormat,
	HourFormat,
	MinuteFormat,
	ClockDisplaySettings,
} from '../../types/site/clock-display-settings';

/**
 * Custom hook that manages display settings for clock/date formatting
 *
 * Provides state management for various date and time format options including:
 * - Weekday format (long, short, narrow)
 * - Month format (numeric, 2-digit, long, short, narrow)
 * - Day format (numeric, 2-digit)
 * - Hour format (numeric, 2-digit)
 * - Minute format (numeric, 2-digit)
 * - 12/24 hour format toggle
 *
 * @returns {ClockDisplaySettings} containing:
 *   - weekday: Current weekday format setting
 *   - setWeekday: Function to update weekday format
 *   - month: Current month format setting
 *   - setMonth: Function to update month format
 *   - day: Current day format setting
 *   - setDay: Function to update day format
 *   - hour: Current hour format setting
 *   - setHour: Function to update hour format
 *   - minute: Current minute format setting
 *   - setMinute: Function to update minute format
 *   - hour12: Boolean indicating if 12-hour format is enabled
 *   - setHour12: Function to toggle between 12/24 hour format
 */

export function useClockDisplaySettings(): ClockDisplaySettings {
	const [weekday, setWeekday] = useState<WeekdayFormat>('short');
	const [month, setMonth] = useState<MonthFormat>('short');
	const [day, setDay] = useState<DayFormat>('numeric');
	const [hour, setHour] = useState<HourFormat>('numeric');
	const [minute, setMinute] = useState<MinuteFormat>('numeric');
	const [hour12, setHour12] = useState(true);

	return {
		weekday,
		setWeekday,
		month,
		setMonth,
		day,
		setDay,
		hour,
		setHour,
		minute,
		setMinute,
		hour12,
		setHour12,
	};
}
