import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PinEntry } from '../../src/components/parent/PinEntry';

describe('PinEntry', () => {
  it('displays a password input', () => {
    render(<PinEntry correctPin="1234" onSuccess={vi.fn()} onCancel={vi.fn()} />);
    const input = screen.getByPlaceholderText('____');
    expect(input).toBeTruthy();
    expect(input.getAttribute('type')).toBe('password');
  });

  it('calls onSuccess with correct PIN', () => {
    const onSuccess = vi.fn();
    render(<PinEntry correctPin="1234" onSuccess={onSuccess} onCancel={vi.fn()} />);
    const input = screen.getByPlaceholderText('____');
    fireEvent.change(input, { target: { value: '1234' } });
    fireEvent.click(screen.getByText('Valider'));
    expect(onSuccess).toHaveBeenCalled();
  });

  it('shows error on incorrect PIN', () => {
    render(<PinEntry correctPin="1234" onSuccess={vi.fn()} onCancel={vi.fn()} />);
    const input = screen.getByPlaceholderText('____');
    fireEvent.change(input, { target: { value: '0000' } });
    fireEvent.click(screen.getByText('Valider'));
    expect(screen.getByText('Code incorrect')).toBeTruthy();
  });

  it('calls onCancel on "Retour" click', () => {
    const onCancel = vi.fn();
    render(<PinEntry correctPin="1234" onSuccess={vi.fn()} onCancel={onCancel} />);
    fireEvent.click(screen.getByText('Retour'));
    expect(onCancel).toHaveBeenCalled();
  });

  it('submits on Enter key', () => {
    const onSuccess = vi.fn();
    render(<PinEntry correctPin="1234" onSuccess={onSuccess} onCancel={vi.fn()} />);
    const input = screen.getByPlaceholderText('____');
    fireEvent.change(input, { target: { value: '1234' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(onSuccess).toHaveBeenCalled();
  });
});
