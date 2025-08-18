import type { Dispatch, SetStateAction } from 'react';

/**
 * Interface representing settings for customizing clock and date display formatting.
 *
 * Provides state management for various date and time format options including:
 * - Weekday format (long, short, narrow)
 * - Month format (numeric, 2-digit, long, short, narrow)
 * - Day format (numeric, 2-digit)
 * - Hour format (numeric, 2-digit)
 * - Minute format (numeric, 2-digit)
 * - 12/24 hour format toggle
 *
 * @interface
 * @property {WeekdayFormat} weekday - Current weekday format setting
 * @property {Dispatch<SetStateAction<WeekdayFormat>>} setWeekday - Function to update weekday format
 * @property {MonthFormat} month - Current month format setting
 * @property {Dispatch<SetStateAction<MonthFormat>>} setMonth - Function to update month format
 * @property {DayFormat} day - Current day format setting
 * @property {Dispatch<SetStateAction<DayFormat>>} setDay - Function to update day format
 * @property {HourFormat} hour - Current hour format setting
 * @property {Dispatch<SetStateAction<HourFormat>>} setHour - Function to update hour format
 * @property {MinuteFormat} minute - Current minute format setting
 * @property {Dispatch<SetStateAction<MinuteFormat>>} setMinute - Function to update minute format
 * @property {boolean} hour12 - Boolean indicating if 12-hour format is enabled
 * @property {Dispatch<boolean>} setHour12 - Function to toggle between 12/24 hour format
 */

export interface ClockDisplaySettings {
	weekday: WeekdayFormat;
	setWeekday: Dispatch<SetStateAction<WeekdayFormat>>;
	month: MonthFormat;
	setMonth: Dispatch<SetStateAction<MonthFormat>>;
	day: DayFormat;
	setDay: Dispatch<SetStateAction<DayFormat>>;
	hour: HourFormat;
	setHour: Dispatch<SetStateAction<HourFormat>>;
	minute: MinuteFormat;
	setMinute: Dispatch<SetStateAction<MinuteFormat>>;
	hour12: boolean;
	setHour12: Dispatch<boolean>;
}

export type WeekdayFormat = 'long' | 'short' | 'narrow' | undefined;
export type MonthFormat =
	| 'long'
	| 'short'
	| 'narrow'
	| 'numeric'
	| '2-digit'
	| undefined;
export type DayFormat = 'numeric' | '2-digit' | undefined;
export type HourFormat = 'numeric' | '2-digit' | undefined;
export type MinuteFormat = 'numeric' | '2-digit' | undefined;
