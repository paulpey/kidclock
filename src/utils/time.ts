export function timeToMinutes(time: string): number {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

export function minutesToTime(minutes: number): string {
  const h = Math.floor(minutes / 60) % 24;
  const m = minutes % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

/**
 * Returns true if `current` is in the night period (between sleepTime and wakeTime).
 * Handles midnight crossing.
 */
export function isTimeBetween(current: string, sleepTime: string, wakeTime: string): boolean {
  const cur = timeToMinutes(current);
  const sleep = timeToMinutes(sleepTime);
  const wake = timeToMinutes(wakeTime);

  if (sleep > wake) {
    // Night crosses midnight: e.g. sleep=20:30, wake=07:00
    return cur >= sleep || cur < wake;
  }
  // Night doesn't cross midnight (unusual but handled)
  return cur >= sleep && cur < wake;
}

/**
 * Returns night progress from 0 (sleepTime) to 1 (wakeTime).
 */
export function getNightProgress(current: string, sleepTime: string, wakeTime: string): number {
  const cur = timeToMinutes(current);
  const sleep = timeToMinutes(sleepTime);
  const wake = timeToMinutes(wakeTime);

  let totalNight: number;
  let elapsed: number;

  if (sleep > wake) {
    // crosses midnight
    totalNight = (24 * 60 - sleep) + wake;
    elapsed = cur >= sleep ? cur - sleep : cur + (24 * 60 - sleep);
  } else {
    totalNight = wake - sleep;
    elapsed = cur - sleep;
  }

  return Math.min(1, Math.max(0, elapsed / totalNight));
}
