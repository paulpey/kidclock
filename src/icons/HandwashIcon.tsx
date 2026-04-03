interface IconProps { size?: number; }

export function HandwashIcon({ size = 64 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Faucet */}
      <rect x="24" y="6" width="16" height="6" rx="3" fill="#C0C0C0" />
      <rect x="30" y="12" width="4" height="10" rx="1" fill="#C0C0C0" />
      {/* Water drops */}
      <path d="M31 22 Q30 28 32 28 Q34 28 33 22" fill="#85B7EB" opacity="0.7" />
      <circle cx="28" cy="26" r="1.5" fill="#85B7EB" opacity="0.5" />
      <circle cx="36" cy="25" r="1" fill="#85B7EB" opacity="0.4" />
      {/* Hands */}
      <path d="M18 34 Q16 30 20 28 L24 30 L26 28 L28 30 L30 28 L32 30" stroke="#FDDCB5" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M46 34 Q48 30 44 28 L40 30 L38 28 L36 30 L34 28 L32 30" stroke="#FDDCB5" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Palms */}
      <path d="M18 34 Q16 42 24 44 L32 44 Q40 44 46 42 Q48 34 46 34" fill="#FDDCB5" />
      {/* Soap bubbles */}
      <circle cx="22" cy="38" r="3" fill="white" opacity="0.8" />
      <circle cx="32" cy="36" r="4" fill="white" opacity="0.7" />
      <circle cx="40" cy="38" r="2.5" fill="white" opacity="0.8" />
      <circle cx="26" cy="34" r="2" fill="white" opacity="0.6" />
      {/* Sink basin */}
      <path d="M10 48 Q10 56 32 56 Q54 56 54 48" stroke="#D0D0D0" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}
