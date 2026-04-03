import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DayScreen } from '../../src/components/child/DayScreen';
import { DEFAULT_CONFIG } from '../../src/utils/defaults';

const routines = DEFAULT_CONFIG.routines;

describe('DayScreen', () => {
  it('renders owl awake', () => {
    const { container } = render(
      <DayScreen currentRoutine={routines[0]} upcomingRoutines={routines.slice(1, 4)} time={{ hours: 8, minutes: 0, date: 3, month: 3, dayOfWeek: 4, isWeekend: false }} />
    );
    expect(container.querySelector('svg')).toBeTruthy();
  });

  it('displays current routine icon and label', () => {
    render(
      <DayScreen currentRoutine={routines[0]} upcomingRoutines={routines.slice(1, 4)} time={{ hours: 8, minutes: 0, date: 3, month: 3, dayOfWeek: 4, isWeekend: false }} />
    );
    expect(screen.getByText('Réveil')).toBeTruthy();
  });

  it('displays upcoming routines (max 4)', () => {
    render(
      <DayScreen currentRoutine={routines[0]} upcomingRoutines={routines.slice(1, 5)} time={{ hours: 8, minutes: 0, date: 3, month: 3, dayOfWeek: 4, isWeekend: false }} />
    );
    expect(screen.getByText('Ensuite')).toBeTruthy();
    expect(screen.getByText('Petit-déjeuner')).toBeTruthy();
  });

  it('has no visible buttons', () => {
    const { container } = render(
      <DayScreen currentRoutine={routines[0]} upcomingRoutines={routines.slice(1, 4)} time={{ hours: 8, minutes: 0, date: 3, month: 3, dayOfWeek: 4, isWeekend: false }} />
    );
    expect(container.querySelectorAll('button').length).toBe(0);
  });
});
