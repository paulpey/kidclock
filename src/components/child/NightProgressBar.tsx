import { MoonIcon, SunIcon } from '../../icons';

interface Props {
  progress: number;
  sleepTime: string;
  wakeTime: string;
}

export function NightProgressBar({ progress, sleepTime, wakeTime }: Props) {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar-row">
        <div className="progress-icon">
          <MoonIcon size={28} />
          <span className="progress-time">{sleepTime}</span>
        </div>
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{
              width: `${progress * 100}%`,
              background: 'linear-gradient(90deg, #4a3f8a, #9F8FEF)',
            }}
          />
        </div>
        <div className="progress-icon">
          <SunIcon size={28} />
          <span className="progress-time">{wakeTime}</span>
        </div>
      </div>
    </div>
  );
}
