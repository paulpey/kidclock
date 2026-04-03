import { useMemo } from 'react';
import type { AppConfig, Routine, TimeState } from '../types/config';
import { isTimeBetween, getNightProgress, timeToMinutes } from '../utils/time';

interface DayNightState {
  isNight: boolean;
  nightProgress: number;
  currentRoutine: Routine | null;
  upcomingRoutines: Routine[];
  dayConfig: { wakeTime: string; sleepTime: string };
}

export function useDayNight(config: AppConfig, time: TimeState): DayNightState {
  return useMemo(() => {
    const dayConfig = time.isWeekend ? config.weekend : config.weekday;
    const currentTimeStr = `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}`;

    const isNight = isTimeBetween(currentTimeStr, dayConfig.sleepTime, dayConfig.wakeTime);

    const nightProgress = isNight
      ? getNightProgress(currentTimeStr, dayConfig.sleepTime, dayConfig.wakeTime)
      : 0;

    // Sort routines by time
    const sortedRoutines = [...config.routines].sort(
      (a, b) => timeToMinutes(a.time) - timeToMinutes(b.time)
    );

    let currentRoutine: Routine | null = null;
    let upcomingRoutines: Routine[] = [];

    if (!isNight && sortedRoutines.length > 0) {
      const currentMinutes = timeToMinutes(currentTimeStr);

      // Current routine = last routine whose time <= now
      const passedRoutines = sortedRoutines.filter(
        r => timeToMinutes(r.time) <= currentMinutes
      );

      if (passedRoutines.length > 0) {
        currentRoutine = passedRoutines[passedRoutines.length - 1];
      } else {
        // Before any routine: show first one
        currentRoutine = sortedRoutines[0];
      }

      // Upcoming = routines after current, max 4
      const currentIndex = currentRoutine
        ? sortedRoutines.findIndex(r => r.id === currentRoutine!.id)
        : -1;
      upcomingRoutines = sortedRoutines.slice(currentIndex + 1, currentIndex + 5);
    }

    return { isNight, nightProgress, currentRoutine, upcomingRoutines, dayConfig };
  }, [config, time.hours, time.minutes, time.isWeekend]);
}
