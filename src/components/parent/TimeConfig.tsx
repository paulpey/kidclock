import type { AppConfig } from '../../types/config';

interface Props {
  config: AppConfig;
  onChange: (config: AppConfig) => void;
}

function TimeCard({ title, wakeTime, sleepTime, onWakeChange, onSleepChange }: {
  title: string;
  wakeTime: string;
  sleepTime: string;
  onWakeChange: (t: string) => void;
  onSleepChange: (t: string) => void;
}) {
  return (
    <div className="flex-1 bg-white/5 rounded-xl p-4 border border-white/10">
      <h3 className="text-[#C8B6FF] font-semibold mb-3">{title}</h3>
      <div className="flex flex-col gap-3">
        <label className="flex items-center justify-between text-sm text-white/70">
          <span>Réveil</span>
          <input
            type="time"
            value={wakeTime}
            onChange={(e) => onWakeChange(e.target.value)}
            className="bg-white/10 rounded px-2 py-1 text-white border border-white/20 outline-none"
          />
        </label>
        <label className="flex items-center justify-between text-sm text-white/70">
          <span>Coucher</span>
          <input
            type="time"
            value={sleepTime}
            onChange={(e) => onSleepChange(e.target.value)}
            className="bg-white/10 rounded px-2 py-1 text-white border border-white/20 outline-none"
          />
        </label>
      </div>
    </div>
  );
}

export function TimeConfig({ config, onChange }: Props) {
  return (
    <div className="flex gap-4">
      <TimeCard
        title="Semaine"
        wakeTime={config.weekday.wakeTime}
        sleepTime={config.weekday.sleepTime}
        onWakeChange={(t) => onChange({ ...config, weekday: { ...config.weekday, wakeTime: t } })}
        onSleepChange={(t) => onChange({ ...config, weekday: { ...config.weekday, sleepTime: t } })}
      />
      <TimeCard
        title="Week-end"
        wakeTime={config.weekend.wakeTime}
        sleepTime={config.weekend.sleepTime}
        onWakeChange={(t) => onChange({ ...config, weekend: { ...config.weekend, wakeTime: t } })}
        onSleepChange={(t) => onChange({ ...config, weekend: { ...config.weekend, sleepTime: t } })}
      />
    </div>
  );
}
