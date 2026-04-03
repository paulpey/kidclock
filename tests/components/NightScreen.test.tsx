import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NightScreen } from '../../src/components/child/NightScreen';

describe('NightScreen', () => {
  it('renders owl sleeping', () => {
    const { container } = render(
      <NightScreen progress={0.5} sleepTime="20:30" wakeTime="07:00" time={{ hours: 3, minutes: 0, date: 3, month: 3, dayOfWeek: 4, isWeekend: false }} />
    );
    // Owl sleeping SVG should be present
    expect(container.querySelector('svg')).toBeTruthy();
  });

  it('displays "On dort encore..."', () => {
    render(<NightScreen progress={0.5} sleepTime="20:30" wakeTime="07:00" time={{ hours: 3, minutes: 0, date: 3, month: 3, dayOfWeek: 4, isWeekend: false }} />);
    expect(screen.getByText('On dort encore...')).toBeTruthy();
  });

  it('displays progress bar', () => {
    const { container } = render(
      <NightScreen progress={0.5} sleepTime="20:30" wakeTime="07:00" time={{ hours: 3, minutes: 0, date: 3, month: 3, dayOfWeek: 4, isWeekend: false }} />
    );
    // Check progress bar exists
    expect(container.querySelector('[style*="width"]')).toBeTruthy();
  });

  it('has no interactive elements', () => {
    const { container } = render(
      <NightScreen progress={0.5} sleepTime="20:30" wakeTime="07:00" time={{ hours: 3, minutes: 0, date: 3, month: 3, dayOfWeek: 4, isWeekend: false }} />
    );
    expect(container.querySelectorAll('button').length).toBe(0);
    expect(container.querySelectorAll('input').length).toBe(0);
  });

  it('does not display hour numbers in main area', () => {
    render(<NightScreen progress={0.5} sleepTime="20:30" wakeTime="07:00" time={{ hours: 3, minutes: 0, date: 3, month: 3, dayOfWeek: 4, isWeekend: false }} />);
    // Main text should not contain time digits (only progress bar has small times)
    const mainText = screen.getByText('On dort encore...');
    expect(mainText.textContent).not.toMatch(/\d{2}:\d{2}/);
  });
});
