interface IconProps { size?: number; }

export function BathIcon({ size = 64 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Tub */}
      <path d="M6 30 L6 32 Q6 50 16 50 L48 50 Q58 50 58 32 L58 30 Z" fill="#D0D0D0" />
      {/* Water */}
      <path d="M10 32 Q10 46 18 46 L46 46 Q54 46 54 32 Z" fill="#85B7EB" />
      {/* Rim */}
      <rect x="4" y="28" width="56" height="4" rx="2" fill="#E0E0E0" />
      {/* Bubbles */}
      <circle cx="18" cy="24" r="4" fill="white" opacity="0.8" />
      <circle cx="28" cy="22" r="3" fill="white" opacity="0.7" />
      <circle cx="22" cy="18" r="2.5" fill="white" opacity="0.6" />
      <circle cx="36" cy="24" r="3.5" fill="white" opacity="0.75" />
      <circle cx="44" cy="22" r="2" fill="white" opacity="0.6" />
      {/* Duck */}
      <ellipse cx="42" cy="36" rx="5" ry="4" fill="#FFD93D" />
      <circle cx="46" cy="33" r="3" fill="#FFD93D" />
      <circle cx="47" cy="32" r="1" fill="#2C2C2A" />
      <path d="M48 34 L52 34 L48 35Z" fill="#E8A838" />
      {/* Faucet */}
      <path d="M56 16 L56 28" stroke="#C0C0C0" strokeWidth="3" strokeLinecap="round" />
      <path d="M50 16 L56 16" stroke="#C0C0C0" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
