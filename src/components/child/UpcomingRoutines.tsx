import type { Routine } from '../../types/config';
import { RoutineIcon } from './RoutineIcon';

interface Props {
  routines: Routine[];
}

export function UpcomingRoutines({ routines }: Props) {
  if (routines.length === 0) return null;

  return (
    <div className="upcoming-container">
      <span className="upcoming-label">Ensuite</span>
      <div className="upcoming-list">
        {routines.slice(0, 4).map((r) => (
          <div key={r.id} className="upcoming-item">
            <div
              className="upcoming-circle"
              style={{ backgroundColor: r.color + '25' }}
            >
              <RoutineIcon icon={r.icon} size={48} />
            </div>
            <span className="upcoming-name">
              {r.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
