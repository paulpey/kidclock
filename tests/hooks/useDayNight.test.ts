import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useDayNight } from '../../src/hooks/useDayNight';
import { DEFAULT_CONFIG } from '../../src/utils/defaults';
import { AppConfig, TimeState } from '../../src/types/config';

function makeTime(hours: number, minutes: number, dayOfWeek = 1): TimeState {
  return { hours, minutes, date: 3, month: 3, dayOfWeek, isWeekend: dayOfWeek === 0 || dayOfWeek === 6 };
}

describe('useDayNight - night detection', () => {
  it('03:00 is night', () => {
    const { result } = renderHook(() => useDayNight(DEFAULT_CONFIG, makeTime(3, 0)));
    expect(result.current.isNight).toBe(true);
  });

  it('07:00 is day (exact wakeTime)', () => {
    const { result } = renderHook(() => useDayNight(DEFAULT_CONFIG, makeTime(7, 0)));
    expect(result.current.isNight).toBe(false);
  });

  it('20:30 is night (exact sleepTime)', () => {
    const { result } = renderHook(() => useDayNight(DEFAULT_CONFIG, makeTime(20, 30)));
    expect(result.current.isNight).toBe(true);
  });

  it('20:29 is day', () => {
    const { result } = renderHook(() => useDayNight(DEFAULT_CONFIG, makeTime(20, 29)));
    expect(result.current.isNight).toBe(false);
  });

  it('12:00 is day', () => {
    const { result } = renderHook(() => useDayNight(DEFAULT_CONFIG, makeTime(12, 0)));
    expect(result.current.isNight).toBe(false);
  });
});

describe('useDayNight - night progress', () => {
  it('progress ~0 at sleepTime', () => {
    const { result } = renderHook(() => useDayNight(DEFAULT_CONFIG, makeTime(20, 30)));
    expect(result.current.nightProgress).toBeCloseTo(0, 1);
  });

  it('progress ~0.5 at midpoint (~01:45)', () => {
    const { result } = renderHook(() => useDayNight(DEFAULT_CONFIG, makeTime(1, 45)));
    expect(result.current.nightProgress).toBeCloseTo(0.5, 1);
  });

  it('progress > 0.9 near end (06:30)', () => {
    const { result } = renderHook(() => useDayNight(DEFAULT_CONFIG, makeTime(6, 30)));
    expect(result.current.nightProgress).toBeGreaterThan(0.9);
  });
});

describe('useDayNight - weekend', () => {
  it('Saturday 07:30 with weekendWakeTime=08:00 is night', () => {
    const { result } = renderHook(() => useDayNight(DEFAULT_CONFIG, makeTime(7, 30, 6)));
    expect(result.current.isNight).toBe(true);
  });

  it('Saturday 08:00 with weekendWakeTime=08:00 is day', () => {
    const { result } = renderHook(() => useDayNight(DEFAULT_CONFIG, makeTime(8, 0, 6)));
    expect(result.current.isNight).toBe(false);
  });

  it('Monday 07:30 with weekdayWakeTime=07:00 is day', () => {
    const { result } = renderHook(() => useDayNight(DEFAULT_CONFIG, makeTime(7, 30, 1)));
    expect(result.current.isNight).toBe(false);
  });
});

describe('useDayNight - current routine', () => {
  it('07:00 -> Réveil', () => {
    const { result } = renderHook(() => useDayNight(DEFAULT_CONFIG, makeTime(7, 0)));
    expect(result.current.currentRoutine?.label).toBe('Réveil');
  });

  it('07:20 -> Petit-déjeuner', () => {
    const { result } = renderHook(() => useDayNight(DEFAULT_CONFIG, makeTime(7, 20)));
    expect(result.current.currentRoutine?.label).toBe('Petit-déjeuner');
  });

  it('08:30 -> Départ école', () => {
    const { result } = renderHook(() => useDayNight(DEFAULT_CONFIG, makeTime(8, 30)));
    expect(result.current.currentRoutine?.label).toBe('Départ école');
  });

  it('16:45 -> Goûter', () => {
    const { result } = renderHook(() => useDayNight(DEFAULT_CONFIG, makeTime(16, 45)));
    expect(result.current.currentRoutine?.label).toBe('Goûter');
  });

  it('20:00 -> Histoire', () => {
    const { result } = renderHook(() => useDayNight(DEFAULT_CONFIG, makeTime(20, 0)));
    expect(result.current.currentRoutine?.label).toBe('Histoire');
  });

  it('06:50 (before first routine) -> first routine', () => {
    const { result } = renderHook(() => useDayNight(DEFAULT_CONFIG, makeTime(6, 50)));
    // 06:50 is night with default config (wakeTime=07:00), so no routine
    // But if we force day by using a config with wakeTime=06:00
    const earlyConfig: AppConfig = {
      ...DEFAULT_CONFIG,
      weekday: { wakeTime: '06:00', sleepTime: '20:30' },
    };
    const { result: result2 } = renderHook(() => useDayNight(earlyConfig, makeTime(6, 50)));
    expect(result2.current.currentRoutine?.label).toBe('Réveil');
  });

  it('no routines -> null', () => {
    const noRoutineConfig: AppConfig = { ...DEFAULT_CONFIG, routines: [] };
    const { result } = renderHook(() => useDayNight(noRoutineConfig, makeTime(10, 0)));
    expect(result.current.currentRoutine).toBeNull();
  });
});
