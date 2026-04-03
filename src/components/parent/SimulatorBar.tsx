import { useState } from 'react';

interface Props {
  simulatedTime: string | null;
  onSimulate: (time: string | null) => void;
  onPreview: (time: string) => void;
}

export function SimulatorBar({ simulatedTime, onSimulate, onPreview }: Props) {
  const [inputValue, setInputValue] = useState(simulatedTime || '12:00');

  return (
    <div className="simulator-card">
      <h3 className="section-title">Simulateur</h3>
      <p className="simulator-hint">
        Choisissez une heure et cliquez Voir pour previsualiser l'ecran enfant.
      </p>
      <div className="simulator-row">
        <input
          type="time"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="time-input"
        />
        <button
          onClick={() => {
            if (inputValue) onPreview(inputValue);
          }}
          className="btn btn-primary"
        >
          Voir
        </button>
        {simulatedTime && (
          <button
            onClick={() => {
              onSimulate(null);
              setInputValue('12:00');
            }}
            className="btn btn-ghost"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
