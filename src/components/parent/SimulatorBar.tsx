interface Props {
  simulatedTime: string | null;
  onSimulate: (time: string | null) => void;
}

export function SimulatorBar({ simulatedTime, onSimulate }: Props) {
  return (
    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
      <h3 className="text-[#C8B6FF] font-semibold mb-3">Simulateur</h3>
      <p className="text-xs text-white/40 mb-3">
        Choisissez une heure pour previsualiser. Fermez le panel pour voir le resultat.
      </p>
      <div className="flex items-center gap-3">
        <input
          type="time"
          value={simulatedTime || ''}
          onChange={(e) => onSimulate(e.target.value || null)}
          className="bg-white/10 rounded px-3 py-1.5 text-white border border-white/20 outline-none"
        />
        {simulatedTime && (
          <button
            onClick={() => onSimulate(null)}
            className="px-4 py-1.5 rounded bg-white/10 text-white/60 text-sm hover:text-white"
          >
            Reset
          </button>
        )}
      </div>
      {simulatedTime && (
        <p className="text-xs text-[#FFD93D] mt-2">
          Simulation active : {simulatedTime}
        </p>
      )}
    </div>
  );
}
