import { useState } from 'react';
import type { AppConfig } from '../../types/config';
import { TimeConfig } from './TimeConfig';
import { RoutineEditor } from './RoutineEditor';
import { SimulatorBar } from './SimulatorBar';

interface Props {
  config: AppConfig;
  onSave: (config: AppConfig) => void;
  onClose: () => void;
  simulatedTime: string | null;
  onSimulate: (time: string | null) => void;
  onPreview: (time: string) => void;
}

export function ParentPanel({ config, onSave, onClose, simulatedTime, onSimulate, onPreview }: Props) {
  const [draft, setDraft] = useState<AppConfig>(config);

  return (
    <div className="w-full h-full bg-[#0d0d2b] overflow-y-auto">
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#C8B6FF]">Configuration</h1>
        </div>

        <TimeConfig config={draft} onChange={setDraft} />
        <RoutineEditor config={draft} onChange={setDraft} />
        <SimulatorBar
          simulatedTime={simulatedTime}
          onSimulate={onSimulate}
          onPreview={onPreview}
        />

        <div className="flex gap-4 pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl bg-white/10 text-white/60 font-medium hover:bg-white/20"
          >
            Fermer
          </button>
          <button
            onClick={() => onSave(draft)}
            className="flex-1 py-3 rounded-xl bg-[#7F77DD] text-white font-medium hover:bg-[#9F8FEF]"
          >
            Sauvegarder
          </button>
        </div>
      </div>
    </div>
  );
}
