import type { Routine, TimeState } from '../../types/config';
import { OwlAwake } from './OwlAwake';
import { CurrentRoutine } from './CurrentRoutine';
import { UpcomingRoutines } from './UpcomingRoutines';
import { TimeDisplay } from './TimeDisplay';

interface Props {
  currentRoutine: Routine | null;
  upcomingRoutines: Routine[];
  time: TimeState;
}

export function DayScreen({ currentRoutine, upcomingRoutines, time }: Props) {
  return (
    <div
      className="w-full h-full flex items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #FFF8E7, #FFE8C8)' }}
    >
      {/* Time display */}
      <TimeDisplay
        hours={time.hours} minutes={time.minutes}
        date={time.date} month={time.month}
        dayOfWeek={time.dayOfWeek} variant="day"
      />

      {/* Sun decoration */}
      <div className="absolute top-[-20px] right-[-20px] opacity-20">
        <svg width="160" height="160" viewBox="0 0 64 64" fill="none">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line
              key={angle}
              x1="32" y1="4" x2="32" y2="12"
              stroke="#FFD93D" strokeWidth="2" strokeLinecap="round"
              transform={`rotate(${angle} 32 32)`}
            />
          ))}
          <circle cx="32" cy="32" r="16" fill="#FFD93D" />
        </svg>
      </div>

      {/* Layout: owl left, routines right */}
      <div className="flex items-center gap-12 px-8 max-w-4xl w-full">
        {/* Owl */}
        <div className="flex-shrink-0">
          <OwlAwake />
        </div>

        {/* Routines */}
        <div className="flex flex-col items-center gap-8 flex-1">
          {currentRoutine && <CurrentRoutine routine={currentRoutine} />}
          <UpcomingRoutines routines={upcomingRoutines} />
        </div>
      </div>
    </div>
  );
}
