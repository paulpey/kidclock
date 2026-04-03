interface IconProps { size?: number; }

export function BreakfastIcon({ size = 64 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Bowl */}
      <path d="M8 30 Q8 48 32 48 Q56 48 56 30 Z" fill="#FF8C42" />
      <ellipse cx="32" cy="30" rx="24" ry="6" fill="#FFB074" />
      {/* Cereals */}
      <circle cx="24" cy="28" r="3" fill="#FFD93D" />
      <circle cx="32" cy="26" r="3" fill="#FFD93D" />
      <circle cx="38" cy="29" r="2.5" fill="#FFD93D" />
      {/* Spoon */}
      <line x1="44" y1="24" x2="54" y2="10" stroke="#C0C0C0" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="54" cy="9" rx="3" ry="2" fill="#D0D0D0" transform="rotate(-30 54 9)" />
      {/* Juice glass */}
      <rect x="4" y="14" width="10" height="16" rx="2" fill="#FFD93D" opacity="0.9" />
      <rect x="5" y="15" width="8" height="10" rx="1" fill="#FFA500" />
    </svg>
  );
}
