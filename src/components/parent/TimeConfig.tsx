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
    <div className="config-card">
      <h3 className="section-title">{title}</h3>
      <div className="config-field">
        <label className="config-field">
          <span>Réveil</span>
          <input
            type="time"
            value={wakeTime}
            onChange={(e) => onWakeChange(e.target.value)}
            className="time-input"
          />
        </label>
        <label className="config-field">
          <span>Coucher</span>
          <input
            type="time"
            value={sleepTime}
            onChange={(e) => onSleepChange(e.target.value)}
            className="time-input"
          />
        </label>
      </div>
    </div>
  );
}

export function TimeConfig({ config, onChange }: Props) {
  return (
    <div className="config-row">
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
