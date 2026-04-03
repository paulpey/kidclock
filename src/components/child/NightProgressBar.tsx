import { MoonIcon, SunIcon } from '../../icons';

interface Props {
  progress: number;
  sleepTime: string;
  wakeTime: string;
}

export function NightProgressBar({ progress, sleepTime, wakeTime }: Props) {
  return (
    <div className="w-full px-8 pb-6">
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-center">
          <MoonIcon size={28} />
          <span className="text-[10px] text-[#C8B6FF] opacity-60 mt-1">{sleepTime}</span>
        </div>
        <div className="flex-1 h-3 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{
              width: `${progress * 100}%`,
              background: 'linear-gradient(90deg, #4a3f8a, #9F8FEF)',
            }}
          />
        </div>
        <div className="flex flex-col items-center">
          <SunIcon size={28} />
          <span className="text-[10px] text-[#C8B6FF] opacity-60 mt-1">{wakeTime}</span>
        </div>
      </div>
    </div>
  );
}
