import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { RoutineEditor } from '../../src/components/parent/RoutineEditor';
import { DEFAULT_CONFIG } from '../../src/utils/defaults';

describe('RoutineEditor', () => {
  it('displays all routines', () => {
    render(<RoutineEditor config={DEFAULT_CONFIG} onChange={vi.fn()} />);
    expect(screen.getByText('Réveil')).toBeTruthy();
    expect(screen.getByText('Petit-déjeuner')).toBeTruthy();
    expect(screen.getByText('Coucher')).toBeTruthy();
  });

  it('each routine has a time input', () => {
    const { container } = render(<RoutineEditor config={DEFAULT_CONFIG} onChange={vi.fn()} />);
    const timeInputs = container.querySelectorAll('input[type="time"]');
    expect(timeInputs.length).toBe(DEFAULT_CONFIG.routines.length);
  });

  it('modifying a routine time calls onChange', () => {
    const onChange = vi.fn();
    const { container } = render(<RoutineEditor config={DEFAULT_CONFIG} onChange={onChange} />);
    const timeInputs = container.querySelectorAll('input[type="time"]');
    fireEvent.change(timeInputs[0], { target: { value: '06:30' } });
    expect(onChange).toHaveBeenCalled();
  });

  it('deleting a routine calls onChange with fewer routines', () => {
    const onChange = vi.fn();
    render(<RoutineEditor config={DEFAULT_CONFIG} onChange={onChange} />);
    const deleteButtons = screen.getAllByText('✕');
    fireEvent.click(deleteButtons[0]);
    expect(onChange).toHaveBeenCalled();
    const newConfig = onChange.mock.calls[0][0];
    expect(newConfig.routines.length).toBe(DEFAULT_CONFIG.routines.length - 1);
  });

  it('adding a routine works', () => {
    const onChange = vi.fn();
    render(<RoutineEditor config={DEFAULT_CONFIG} onChange={onChange} />);
    fireEvent.click(screen.getByText('+ Ajouter une routine'));
    const nameInput = screen.getByPlaceholderText('Nom de la routine');
    fireEvent.change(nameInput, { target: { value: 'Test routine' } });
    fireEvent.click(screen.getByText('Ajouter'));
    expect(onChange).toHaveBeenCalled();
    const newConfig = onChange.mock.calls[0][0];
    expect(newConfig.routines.length).toBe(DEFAULT_CONFIG.routines.length + 1);
  });
});
