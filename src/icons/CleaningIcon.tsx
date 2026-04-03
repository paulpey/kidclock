interface IconProps { size?: number; }

export function CleaningIcon({ size = 64 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Broom handle */}
      <line x1="32" y1="6" x2="32" y2="36" stroke="#D4A574" strokeWidth="3" strokeLinecap="round" />
      {/* Broom head */}
      <path d="M20 36 L44 36 L42 54 Q38 58 32 58 Q26 58 22 54 Z" fill="#FFD93D" />
      {/* Bristle lines */}
      <line x1="26" y1="38" x2="25" y2="54" stroke="#E8C830" strokeWidth="1.5" />
      <line x1="30" y1="38" x2="29" y2="56" stroke="#E8C830" strokeWidth="1.5" />
      <line x1="34" y1="38" x2="35" y2="56" stroke="#E8C830" strokeWidth="1.5" />
      <line x1="38" y1="38" x2="39" y2="54" stroke="#E8C830" strokeWidth="1.5" />
      {/* Sparkles */}
      <circle cx="48" cy="14" r="2" fill="#85B7EB" opacity="0.7" />
      <circle cx="14" cy="20" r="1.5" fill="#85B7EB" opacity="0.5" />
      <path d="M50 26 L52 24 M50 24 L52 26" stroke="#85B7EB" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 34 L12 32 M10 32 L12 34" stroke="#85B7EB" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
