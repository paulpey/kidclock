interface IconProps { size?: number; }

export function WalkIcon({ size = 64 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Tree */}
      <circle cx="48" cy="18" r="12" fill="#5DCAA5" />
      <rect x="46" y="28" width="4" height="12" rx="1" fill="#8B6914" />
      {/* Sun */}
      <circle cx="14" cy="14" r="6" fill="#FFD93D" />
      {/* Path/road */}
      <path d="M4 56 Q20 40 36 48 Q52 56 60 44" stroke="#D4C4A8" strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* Person walking */}
      <circle cx="28" cy="24" r="5" fill="#FDDCB5" />
      {/* Body */}
      <line x1="28" y1="29" x2="28" y2="40" stroke="#AFA9EC" strokeWidth="3" strokeLinecap="round" />
      {/* Arms swinging */}
      <line x1="28" y1="33" x2="22" y2="38" stroke="#AFA9EC" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="28" y1="33" x2="34" y2="30" stroke="#AFA9EC" strokeWidth="2.5" strokeLinecap="round" />
      {/* Legs walking */}
      <line x1="28" y1="40" x2="23" y2="50" stroke="#4a3f8a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="28" y1="40" x2="33" y2="50" stroke="#4a3f8a" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
