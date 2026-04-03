import { useState } from 'react';

interface Props {
  simulatedTime: string | null;
  onSimulate: (time: string | null) => void;
  onPreview: (time: string) => void;
}

export function SimulatorBar({ simulatedTime, onSimulate, onPreview }: Props) {
  const [inputValue, setInputValue] = useState(simulatedTime || '12:00');

  return (
    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
      <h3 className="text-[#C8B6FF] font-semibold mb-3">Simulateur</h3>
      <p className="text-xs text-white/40 mb-3">
        Choisissez une heure et cliquez Voir pour previsualiser l'ecran enfant.
      </p>
      <div className="flex items-center gap-3">
        <input
          type="time"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="bg-white/10 rounded px-3 py-1.5 text-white border border-white/20 outline-none"
        />
        <button
          onClick={() => {
            if (inputValue) onPreview(inputValue);
          }}
          className="px-5 py-1.5 rounded bg-[#7F77DD] text-white text-sm font-medium hover:bg-[#9F8FEF]"
        >
          Voir
        </button>
        {simulatedTime && (
          <button
            onClick={() => {
              onSimulate(null);
              setInputValue('12:00');
            }}
            className="px-4 py-1.5 rounded bg-white/10 text-white/60 text-sm hover:text-white"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
