export type RoutineIconType =
  | 'wake' | 'breakfast' | 'teeth' | 'dress' | 'school'
  | 'snack' | 'bath' | 'dinner' | 'story' | 'sleep';

export interface Routine {
  id: string;
  icon: RoutineIconType;
  label: string;
  color: string;
  time: string; // "HH:MM" format 24h
}

export interface DayConfig {
  wakeTime: string; // "HH:MM"
  sleepTime: string; // "HH:MM"
}

export interface AppConfig {
  weekday: DayConfig;
  weekend: DayConfig;
  pin: string; // 4 digits
  routines: Routine[];
}

export interface TimeState {
  hours: number;
  minutes: number;
  dayOfWeek: number; // 0=Sunday, 6=Saturday
  isWeekend: boolean;
}
