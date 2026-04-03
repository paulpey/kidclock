import { useState, useCallback } from 'react';
import type { AppConfig } from '../types/config';
import { DEFAULT_CONFIG } from '../utils/defaults';

const STORAGE_KEY = 'kidclock-config';

function loadConfig(): AppConfig {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // ignore
  }
  return DEFAULT_CONFIG;
}

export function useConfig() {
  const [config, setConfigState] = useState<AppConfig>(loadConfig);

  const saveConfig = useCallback((newConfig: AppConfig) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newConfig));
    setConfigState(newConfig);
  }, []);

  return { config, saveConfig };
}
