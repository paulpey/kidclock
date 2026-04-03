import { useState, useRef, useCallback } from 'react';
import { useTime } from './hooks/useTime';
import { useConfig } from './hooks/useConfig';
import { useDayNight } from './hooks/useDayNight';
import { NightScreen } from './components/child/NightScreen';
import { DayScreen } from './components/child/DayScreen';
import { PinEntry } from './components/parent/PinEntry';
import { ParentPanel } from './components/parent/ParentPanel';

type Mode = 'child' | 'pin' | 'parent';

export default function App() {
  const [mode, setMode] = useState<Mode>('child');
  const [simulatedTime, setSimulatedTime] = useState<string | null>(null);
  const { config, saveConfig } = useConfig();
  const time = useTime(simulatedTime);
  const { isNight, nightProgress, currentRoutine, upcomingRoutines, dayConfig } = useDayNight(config, time);

  // Triple-tap detection
  const tapTimesRef = useRef<number[]>([]);
  const handleSecretTap = useCallback(() => {
    const now = Date.now();
    tapTimesRef.current.push(now);
    if (tapTimesRef.current.length > 3) {
      tapTimesRef.current = tapTimesRef.current.slice(-3);
    }
    if (tapTimesRef.current.length === 3) {
      const elapsed = tapTimesRef.current[2] - tapTimesRef.current[0];
      if (elapsed < 1200) {
        setMode('pin');
        tapTimesRef.current = [];
      }
    }
  }, []);

  if (mode === 'pin') {
    return (
      <PinEntry
        correctPin={config.pin}
        onSuccess={() => setMode('parent')}
        onCancel={() => setMode('child')}
      />
    );
  }

  if (mode === 'parent') {
    return (
      <ParentPanel
        config={config}
        onSave={(newConfig) => {
          saveConfig(newConfig);
          setSimulatedTime(null);
          setMode('child');
        }}
        onClose={() => {
          setSimulatedTime(null);
          setMode('child');
        }}
        simulatedTime={simulatedTime}
        onSimulate={setSimulatedTime}
        onPreview={(t) => {
          setSimulatedTime(t);
          setMode('child');
        }}
      />
    );
  }

  return (
    <div className="full-screen">
      {isNight ? (
        <NightScreen
          progress={nightProgress}
          sleepTime={dayConfig.sleepTime}
          wakeTime={dayConfig.wakeTime}
          time={time}
        />
      ) : (
        <DayScreen
          currentRoutine={currentRoutine}
          upcomingRoutines={upcomingRoutines}
          time={time}
        />
      )}

      {/* Simulation banner */}
      {simulatedTime && (
        <div
          className="sim-banner"
          onClick={() => {
            setSimulatedTime(null);
            setMode('parent');
          }}
        >
          <span>Simulation : {simulatedTime}</span>
          <span>Retour config</span>
        </div>
      )}

      {/* Secret tap zone */}
      <div
        className="tap-zone"
        onPointerDown={handleSecretTap}
      />
    </div>
  );
}
