import type { Routine } from '../../types/config';
import { RoutineIcon } from './RoutineIcon';

interface Props {
  routine: Routine;
}

export function CurrentRoutine({ routine }: Props) {
  return (
    <div className="flex flex-col items-center animate-[scaleIn_0.4s_ease-out]">
      <div
        className="w-[100px] h-[100px] rounded-full flex items-center justify-center"
        style={{ backgroundColor: routine.color + '30' }}
      >
        <RoutineIcon icon={routine.icon} size={90} />
      </div>
      <span className="mt-3 text-[22px] font-semibold text-[#4a3f8a]">
        {routine.label}
      </span>
      <span className="text-[13px] text-[#888780] mt-1">
        {routine.time}
      </span>
    </div>
  );
}
