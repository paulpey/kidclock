import type { Routine } from '../../types/config';
import { RoutineIcon } from './RoutineIcon';

interface Props {
  routines: Routine[];
}

export function UpcomingRoutines({ routines }: Props) {
  if (routines.length === 0) return null;

  return (
    <div className="flex items-center gap-4 opacity-55">
      <span className="text-[13px] text-[#4a3f8a] font-medium">Ensuite</span>
      <div className="flex gap-3">
        {routines.slice(0, 4).map((r) => (
          <div key={r.id} className="flex flex-col items-center">
            <div
              className="w-[56px] h-[56px] rounded-full flex items-center justify-center"
              style={{ backgroundColor: r.color + '25' }}
            >
              <RoutineIcon icon={r.icon} size={48} />
            </div>
            <span className="text-[11px] text-[#4a3f8a] mt-1 max-w-[60px] truncate text-center">
              {r.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
