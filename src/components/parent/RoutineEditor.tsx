import { useState } from 'react';
import type { AppConfig, Routine, RoutineIconType } from '../../types/config';
import { RoutineIcon } from '../child/RoutineIcon';

interface Props {
  config: AppConfig;
  onChange: (config: AppConfig) => void;
}

const ICON_OPTIONS: RoutineIconType[] = [
  'wake', 'breakfast', 'teeth', 'dress', 'school',
  'snack', 'bath', 'dinner', 'story', 'sleep',
  'play', 'homework', 'walk', 'sport', 'skating',
  'cleaning', 'tv', 'nap', 'handwash',
];

const ICON_LABELS: Record<RoutineIconType, string> = {
  wake: 'Réveil', breakfast: 'Déjeuner', teeth: 'Dents', dress: 'Habiller',
  school: 'École', snack: 'Goûter', bath: 'Bain', dinner: 'Dîner',
  story: 'Histoire', sleep: 'Dodo', play: 'Jeux', homework: 'Devoirs',
  walk: 'Balade', sport: 'Sport', skating: 'Patinage', cleaning: 'Rangement',
  tv: 'Télé', nap: 'Sieste', handwash: 'Mains',
};

export function RoutineEditor({ config, onChange }: Props) {
  const [adding, setAdding] = useState(false);
  const [newIcon, setNewIcon] = useState<RoutineIconType>('wake');
  const [newLabel, setNewLabel] = useState('');
  const [newTime, setNewTime] = useState('08:00');

  const updateRoutine = (id: string, updates: Partial<Routine>) => {
    onChange({
      ...config,
      routines: config.routines.map(r => r.id === id ? { ...r, ...updates } : r),
    });
  };

  const removeRoutine = (id: string) => {
    onChange({ ...config, routines: config.routines.filter(r => r.id !== id) });
  };

  const moveRoutine = (id: string, direction: -1 | 1) => {
    const idx = config.routines.findIndex(r => r.id === id);
    if (idx < 0) return;
    const newIdx = idx + direction;
    if (newIdx < 0 || newIdx >= config.routines.length) return;
    const newRoutines = [...config.routines];
    [newRoutines[idx], newRoutines[newIdx]] = [newRoutines[newIdx], newRoutines[idx]];
    onChange({ ...config, routines: newRoutines });
  };

  const addRoutine = () => {
    if (!newLabel.trim()) return;
    const iconColor: Record<RoutineIconType, string> = {
      wake: '#FFD93D', breakfast: '#FF8C42', teeth: '#5DCAA5', dress: '#85B7EB',
      school: '#AFA9EC', snack: '#F0997B', bath: '#85B7EB', dinner: '#FF8C42',
      story: '#ED93B1', sleep: '#7F77DD', play: '#FF6B6B', homework: '#85B7EB',
      walk: '#5DCAA5', sport: '#4ECDC4', skating: '#AFA9EC', cleaning: '#FFD93D',
      tv: '#ED93B1', nap: '#FFD93D', handwash: '#85B7EB',
    };
    const newRoutine: Routine = {
      id: Math.random().toString(36).slice(2) + Date.now().toString(36),
      icon: newIcon,
      label: newLabel.trim(),
      color: iconColor[newIcon],
      time: newTime,
    };
    onChange({ ...config, routines: [...config.routines, newRoutine] });
    setAdding(false);
    setNewLabel('');
    setNewTime('08:00');
  };

  return (
    <div>
      <h3 className="section-title">Routines</h3>
      {config.routines.map((r, idx) => (
        <div key={r.id} className="routine-row">
          <div className="routine-row-arrows">
            <button
              onClick={() => moveRoutine(r.id, -1)}
              disabled={idx === 0}
              className="arrow-btn"
            >
              ▲
            </button>
            <button
              onClick={() => moveRoutine(r.id, 1)}
              disabled={idx === config.routines.length - 1}
              className="arrow-btn"
            >
              ▼
            </button>
          </div>
          <div className="routine-row-icon">
            <RoutineIcon icon={r.icon} size={32} />
          </div>
          <span className="routine-row-label">{r.label}</span>
          <input
            type="time"
            value={r.time}
            onChange={(e) => updateRoutine(r.id, { time: e.target.value })}
            className="time-input routine-row-time"
          />
          <button
            onClick={() => removeRoutine(r.id)}
            className="delete-btn"
          >
            ✕
          </button>
        </div>
      ))}

      {adding ? (
        <div className="add-form">
          <div className="icon-picker">
            {ICON_OPTIONS.map((icon) => (
              <button
                key={icon}
                onClick={() => setNewIcon(icon)}
                className={`icon-option${newIcon === icon ? ' selected' : ''}`}
                title={ICON_LABELS[icon]}
              >
                <RoutineIcon icon={icon} size={28} />
              </button>
            ))}
          </div>
          <div className="add-form-row">
            <input
              type="text"
              placeholder="Nom de la routine"
              value={newLabel}
              onChange={(e) => setNewLabel(e.target.value)}
              className="text-input"
              autoFocus
            />
            <input
              type="time"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
              className="time-input"
            />
          </div>
          <div className="add-form-row">
            <button onClick={() => setAdding(false)} className="btn btn-ghost">Annuler</button>
            <button onClick={addRoutine} className="btn btn-primary">Ajouter</button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setAdding(true)}
          className="add-routine-btn"
        >
          + Ajouter une routine
        </button>
      )}
    </div>
  );
}
