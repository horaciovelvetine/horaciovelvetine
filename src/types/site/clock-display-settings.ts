import type { Dispatch, SetStateAction } from "react";

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

export type WeekdayFormat = 'long' | 'short' | 'narrow' | undefined
export type MonthFormat = 'long' | 'short' | 'narrow' | 'numeric' | '2-digit' | undefined
export type DayFormat = 'numeric' | '2-digit' | undefined
export type HourFormat = 'numeric' | '2-digit' | undefined
export type MinuteFormat = 'numeric' | '2-digit' | undefined