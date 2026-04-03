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
      id: crypto.randomUUID(),
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
    <div className="space-y-2">
      <h3 className="text-[#C8B6FF] font-semibold mb-3">Routines</h3>
      {config.routines.map((r, idx) => (
        <div key={r.id} className="flex items-center gap-2 bg-white/5 rounded-lg p-2 border border-white/10">
          <div className="flex flex-col gap-0.5">
            <button
              onClick={() => moveRoutine(r.id, -1)}
              disabled={idx === 0}
              className="text-white/40 text-xs hover:text-white disabled:opacity-20 leading-none"
            >
              ▲
            </button>
            <button
              onClick={() => moveRoutine(r.id, 1)}
              disabled={idx === config.routines.length - 1}
              className="text-white/40 text-xs hover:text-white disabled:opacity-20 leading-none"
            >
              ▼
            </button>
          </div>
          <div className="w-8 h-8 flex-shrink-0">
            <RoutineIcon icon={r.icon} size={32} />
          </div>
          <span className="text-white/80 text-sm flex-1 truncate">{r.label}</span>
          <input
            type="time"
            value={r.time}
            onChange={(e) => updateRoutine(r.id, { time: e.target.value })}
            className="bg-white/10 rounded px-2 py-1 text-white text-xs border border-white/20 outline-none w-24"
          />
          <button
            onClick={() => removeRoutine(r.id)}
            className="text-red-400/60 hover:text-red-400 text-sm px-2"
          >
            ✕
          </button>
        </div>
      ))}

      {adding ? (
        <div className="bg-white/5 rounded-lg p-3 border border-white/10 space-y-3">
          <div className="flex gap-2 flex-wrap">
            {ICON_OPTIONS.map((icon) => (
              <button
                key={icon}
                onClick={() => setNewIcon(icon)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  newIcon === icon ? 'bg-[#7F77DD]/40 ring-2 ring-[#9F8FEF]' : 'bg-white/5'
                }`}
                title={ICON_LABELS[icon]}
              >
                <RoutineIcon icon={icon} size={28} />
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Nom de la routine"
              value={newLabel}
              onChange={(e) => setNewLabel(e.target.value)}
              className="flex-1 bg-white/10 rounded px-3 py-1.5 text-white text-sm border border-white/20 outline-none placeholder:text-white/30"
              autoFocus
            />
            <input
              type="time"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
              className="bg-white/10 rounded px-2 py-1.5 text-white text-sm border border-white/20 outline-none w-28"
            />
          </div>
          <div className="flex gap-2">
            <button onClick={() => setAdding(false)} className="px-4 py-1.5 rounded bg-white/10 text-white/60 text-sm">Annuler</button>
            <button onClick={addRoutine} className="px-4 py-1.5 rounded bg-[#7F77DD] text-white text-sm">Ajouter</button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setAdding(true)}
          className="w-full py-2 rounded-lg border border-dashed border-white/20 text-white/40 text-sm hover:text-white/60 hover:border-white/40"
        >
          + Ajouter une routine
        </button>
      )}
    </div>
  );
}
