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
    <div className="parent-panel">
      <div className="parent-content">
        <div>
          <h1 className="parent-title">Configuration</h1>
        </div>

        <TimeConfig config={draft} onChange={setDraft} />
        <RoutineEditor config={draft} onChange={setDraft} />
        <SimulatorBar
          simulatedTime={simulatedTime}
          onSimulate={onSimulate}
          onPreview={onPreview}
        />

        <div className="parent-footer">
          <button
            onClick={onClose}
            className="footer-btn footer-btn-close"
          >
            Fermer
          </button>
          <button
            onClick={() => onSave(draft)}
            className="footer-btn footer-btn-save"
          >
            Sauvegarder
          </button>
        </div>
      </div>
    </div>
  );
}
