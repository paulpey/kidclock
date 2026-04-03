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
    <div className="pin-screen">
      <h2 className="pin-title">Mode Parent</h2>
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
        className="pin-input"
        placeholder="____"
        autoFocus
      />
      {error && <p className="pin-error">Code incorrect</p>}
      <div className="pin-buttons">
        <button
          onClick={onCancel}
          className="btn btn-ghost"
        >
          Retour
        </button>
        <button
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Valider
        </button>
      </div>
    </div>
  );
}
