import { describe, it, expect } from 'vitest';
import { timeToMinutes, minutesToTime, isTimeBetween, getNightProgress } from '../../src/utils/time';

describe('timeToMinutes', () => {
  it('converts 07:30 to 450', () => {
    expect(timeToMinutes('07:30')).toBe(450);
  });
  it('converts 00:00 to 0', () => {
    expect(timeToMinutes('00:00')).toBe(0);
  });
  it('converts 23:59 to 1439', () => {
    expect(timeToMinutes('23:59')).toBe(1439);
  });
});

describe('minutesToTime', () => {
  it('converts 450 to 07:30', () => {
    expect(minutesToTime(450)).toBe('07:30');
  });
  it('converts 0 to 00:00', () => {
    expect(minutesToTime(0)).toBe('00:00');
  });
});

describe('isTimeBetween (night detection)', () => {
  it('03:00 is night (between 20:30 and 07:00)', () => {
    expect(isTimeBetween('03:00', '20:30', '07:00')).toBe(true);
  });
  it('22:00 is night (after sleepTime)', () => {
    expect(isTimeBetween('22:00', '20:30', '07:00')).toBe(true);
  });
  it('10:00 is day', () => {
    expect(isTimeBetween('10:00', '20:30', '07:00')).toBe(false);
  });
  it('07:00 (exact wakeTime) is day', () => {
    expect(isTimeBetween('07:00', '20:30', '07:00')).toBe(false);
  });
});

describe('getNightProgress', () => {
  it('returns ~0 at sleepTime', () => {
    expect(getNightProgress('20:30', '20:30', '07:00')).toBeCloseTo(0, 1);
  });
  it('returns ~0.5 at midpoint', () => {
    // Night is 20:30 -> 07:00 = 630 min. Midpoint = 20:30 + 315min = 01:45
    const progress = getNightProgress('01:45', '20:30', '07:00');
    expect(progress).toBeCloseTo(0.5, 1);
  });
  it('returns > 0.9 near end of night', () => {
    expect(getNightProgress('06:30', '20:30', '07:00')).toBeGreaterThan(0.9);
  });
  it('returns 1 at wakeTime', () => {
    expect(getNightProgress('07:00', '20:30', '07:00')).toBeCloseTo(1, 1);
  });
});
