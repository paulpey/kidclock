interface IconProps { size?: number; }

export function SchoolBagIcon({ size = 64 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Main bag */}
      <rect x="12" y="18" width="40" height="36" rx="6" fill="#AFA9EC" />
      {/* Top handle */}
      <path d="M24 18 Q24 8 32 8 Q40 8 40 18" stroke="#8F87D6" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Front pocket */}
      <rect x="18" y="32" width="28" height="16" rx="4" fill="#9690D6" />
      {/* Buckle */}
      <rect x="28" y="28" width="8" height="6" rx="2" fill="#FFD93D" />
      {/* Tag */}
      <rect x="44" y="22" width="6" height="8" rx="1" fill="#FFD93D" />
    </svg>
  );
}
