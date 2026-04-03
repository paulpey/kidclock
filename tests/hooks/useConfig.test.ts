import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useConfig } from '../../src/hooks/useConfig';
import { DEFAULT_CONFIG } from '../../src/utils/defaults';

const mockStorage: Record<string, string> = {};

beforeEach(() => {
  Object.keys(mockStorage).forEach(k => delete mockStorage[k]);
  vi.stubGlobal('localStorage', {
    getItem: (key: string) => mockStorage[key] ?? null,
    setItem: (key: string, value: string) => { mockStorage[key] = value; },
    removeItem: (key: string) => { delete mockStorage[key]; },
    clear: () => { Object.keys(mockStorage).forEach(k => delete mockStorage[k]); },
    length: 0,
    key: () => null,
  });
});

describe('useConfig', () => {
  it('returns default config when nothing in localStorage', () => {
    const { result } = renderHook(() => useConfig());
    expect(result.current.config).toEqual(DEFAULT_CONFIG);
  });

  it('saves config to localStorage', () => {
    const { result } = renderHook(() => useConfig());
    const newConfig = { ...DEFAULT_CONFIG, pin: '9999' };
    act(() => {
      result.current.saveConfig(newConfig);
    });
    expect(result.current.config.pin).toBe('9999');
    expect(JSON.parse(mockStorage['kidclock-config']).pin).toBe('9999');
  });

  it('loads config from localStorage', () => {
    const saved = { ...DEFAULT_CONFIG, pin: '5678' };
    mockStorage['kidclock-config'] = JSON.stringify(saved);
    const { result } = renderHook(() => useConfig());
    expect(result.current.config.pin).toBe('5678');
  });
});
