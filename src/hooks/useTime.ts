import { useState, useEffect } from 'react';
import type { TimeState } from '../types/config';

function getTimeState(): TimeState {
  const now = new Date();
  const dayOfWeek = now.getDay();
  return {
    hours: now.getHours(),
    minutes: now.getMinutes(),
    dayOfWeek,
    isWeekend: dayOfWeek === 0 || dayOfWeek === 6,
  };
}

export function useTime(simulatedTime?: string | null): TimeState {
  const [time, setTime] = useState<TimeState>(getTimeState);

  useEffect(() => {
    if (simulatedTime) return;
    const interval = setInterval(() => {
      setTime(getTimeState());
    }, 60_000);
    return () => clearInterval(interval);
  }, [simulatedTime]);

  if (simulatedTime) {
    const [h, m] = simulatedTime.split(':').map(Number);
    return { ...time, hours: h, minutes: m };
  }

  return time;
}
