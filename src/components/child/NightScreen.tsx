import { useMemo } from 'react';
import type { TimeState } from '../../types/config';
import { OwlSleeping } from './OwlSleeping';
import { NightProgressBar } from './NightProgressBar';
import { TimeDisplay } from './TimeDisplay';

interface Props {
  progress: number;
  sleepTime: string;
  wakeTime: string;
  time: TimeState;
}

function Star({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <div
      className="star"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animation: `twinkle ${2 + delay * 3}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

export function NightScreen({ progress, sleepTime, wakeTime, time }: Props) {
  const stars = useMemo(() =>
    Array.from({ length: 28 }, () => ({
      x: Math.random() * 90 + 5,
      y: Math.random() * 45 + 2,
      delay: Math.random() * 2,
    })),
  []);

  // Sky lightens 30 min before wake
  const isApproachingDawn = progress > 0.9;
  const bgTop = isApproachingDawn ? '#2a2a5e' : '#0d0d2b';
  const bgBottom = isApproachingDawn ? '#4a3f8a' : '#1a1a3e';

  return (
    <div
      className="night-screen"
      style={{ background: `linear-gradient(to bottom, ${bgTop}, ${bgBottom})` }}
    >
      {/* Stars */}
      {stars.map((s, i) => (
        <Star key={i} x={s.x} y={s.y} delay={s.delay} />
      ))}

      {/* Time display */}
      <TimeDisplay
        hours={time.hours} minutes={time.minutes}
        date={time.date} month={time.month}
        dayOfWeek={time.dayOfWeek} variant="night"
      />

      {/* Moon */}
      <div className="moon-decoration">
        <svg width="50" height="50" viewBox="0 0 64 64" fill="none">
          <path d="M40 12 A20 20 0 1 0 40 52 A16 16 0 1 1 40 12Z" fill="#E8E0C8" />
        </svg>
      </div>

      {/* Center content */}
      <div className="night-center">
        <OwlSleeping />
        <p className="night-text">On dort encore...</p>
        <p className="night-subtext">Chut, le hibou fait dodo</p>
      </div>

      {/* Progress bar */}
      <NightProgressBar progress={progress} sleepTime={sleepTime} wakeTime={wakeTime} />
    </div>
  );
}
