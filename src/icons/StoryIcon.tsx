interface IconProps { size?: number; }

export function StoryIcon({ size = 64 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Book spine */}
      <rect x="30" y="12" width="4" height="44" rx="1" fill="#D4768A" />
      {/* Left page */}
      <path d="M30 12 Q10 12 8 14 L8 54 Q10 56 30 56 Z" fill="#FFEEF2" />
      {/* Right page */}
      <path d="M34 12 Q54 12 56 14 L56 54 Q54 56 34 56 Z" fill="#FFF5F7" />
      {/* Text lines on left */}
      <line x1="14" y1="24" x2="26" y2="24" stroke="#E0C0CA" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="30" x2="24" y2="30" stroke="#E0C0CA" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="36" x2="26" y2="36" stroke="#E0C0CA" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="42" x2="22" y2="42" stroke="#E0C0CA" strokeWidth="1.5" strokeLinecap="round" />
      {/* Star on right page */}
      <path d="M45 28 L47 34 L53 34 L48 38 L50 44 L45 40 L40 44 L42 38 L37 34 L43 34 Z" fill="#FFD93D" />
    </svg>
  );
}
