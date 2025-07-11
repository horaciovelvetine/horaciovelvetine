import { useState } from "react"
import type { DayFormat, HourFormat, MinuteFormat, MonthFormat, WeekdayFormat } from "../types/site/clock-display-settings";

export function useClockDisplaySettings() {
  const [weekday, setWeekday] = useState<WeekdayFormat>('short');
  const [month, setMonth] = useState<MonthFormat>('short');
  const [day, setDay] = useState<DayFormat>('numeric');
  const [hour, setHour] = useState<HourFormat>('numeric');
  const [minute, setMinute] = useState<MinuteFormat>('numeric');
  const [hour12, setHour12] = useState(true);

  return {
    weekday, setWeekday, month, setMonth, day, setDay, hour, setHour, minute, setMinute, hour12, setHour12
  }
}