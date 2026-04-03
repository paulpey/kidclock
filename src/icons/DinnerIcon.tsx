interface IconProps { size?: number; }

export function DinnerIcon({ size = 64 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Plate */}
      <ellipse cx="32" cy="36" rx="22" ry="18" fill="#F0F0F0" />
      <ellipse cx="32" cy="36" rx="16" ry="13" fill="#FFFFFF" />
      {/* Food - veggies */}
      <circle cx="26" cy="34" r="4" fill="#5DCAA5" />
      <circle cx="30" cy="30" r="3" fill="#5DCAA5" />
      {/* Food - meat */}
      <ellipse cx="38" cy="34" rx="5" ry="4" fill="#FF8C42" />
      {/* Food - mash */}
      <path d="M28 38 Q32 44 38 40" fill="#FFD93D" />
      {/* Fork */}
      <line x1="6" y1="20" x2="6" y2="52" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" />
      <line x1="4" y1="20" x2="4" y2="28" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="20" x2="6" y2="28" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="20" x2="8" y2="28" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
      {/* Knife */}
      <line x1="58" y1="20" x2="58" y2="52" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" />
      <path d="M56 20 L58 20 L60 28 L58 30 L56 28 Z" fill="#D0D0D0" />
    </svg>
  );
}
