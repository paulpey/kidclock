import type { Routine } from '../../types/config';
import { RoutineIcon } from './RoutineIcon';

interface Props {
  routine: Routine;
}

export function CurrentRoutine({ routine }: Props) {
  return (
    <div className="current-routine">
      <div
        className="routine-circle"
        style={{ backgroundColor: routine.color + '30' }}
      >
        <RoutineIcon icon={routine.icon} size={90} />
      </div>
      <span className="routine-label">
        {routine.label}
      </span>
      <span className="routine-time">
        {routine.time}
      </span>
    </div>
  );
}
