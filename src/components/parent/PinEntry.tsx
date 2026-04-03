import { useState, useRef } from 'react';

interface Props {
  correctPin: string;
  onSuccess: () => void;
  onCancel: () => void;
}

export function PinEntry({ correctPin, onSuccess, onCancel }: Props) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (pin === correctPin) {
      onSuccess();
    } else {
      setError(true);
      setPin('');
      inputRef.current?.focus();
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#1a1a3e] gap-6">
      <h2 className="text-2xl font-semibold text-[#C8B6FF]">Mode Parent</h2>
      <input
        ref={inputRef}
        type="password"
        inputMode="numeric"
        maxLength={4}
        value={pin}
        onChange={(e) => {
          setError(false);
          setPin(e.target.value.replace(/\D/g, '').slice(0, 4));
        }}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        className="w-40 text-center text-2xl py-3 rounded-xl bg-white/10 text-white border border-white/20 outline-none focus:border-[#9F8FEF]"
        placeholder="____"
        autoFocus
      />
      {error && <p className="text-red-400 text-sm">Code incorrect</p>}
      <div className="flex gap-4">
        <button
          onClick={onCancel}
          className="px-6 py-2 rounded-lg bg-white/10 text-[#C8B6FF] text-sm hover:bg-white/20"
        >
          Retour
        </button>
        <button
          onClick={handleSubmit}
          className="px-6 py-2 rounded-lg bg-[#7F77DD] text-white text-sm hover:bg-[#9F8FEF]"
        >
          Valider
        </button>
      </div>
    </div>
  );
}
