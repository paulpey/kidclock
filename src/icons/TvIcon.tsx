interface IconProps { size?: number; }

export function TvIcon({ size = 64 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* TV body */}
      <rect x="6" y="14" width="52" height="34" rx="4" fill="#4a3f8a" />
      {/* Screen */}
      <rect x="10" y="18" width="44" height="26" rx="2" fill="#85B7EB" />
      {/* Screen content - simple scene */}
      <circle cx="32" cy="26" r="5" fill="#FFD93D" />
      <path d="M14 38 Q22 28 32 34 Q42 28 50 38 L50 44 L14 44 Z" fill="#5DCAA5" />
      {/* TV stand */}
      <rect x="24" y="48" width="16" height="3" rx="1" fill="#4a3f8a" />
      <rect x="20" y="51" width="24" height="3" rx="1" fill="#6B5CA5" />
      {/* Remote control */}
      <rect x="52" y="46" width="6" height="14" rx="3" fill="#ED93B1" />
      <circle cx="55" cy="50" r="1.5" fill="#D4768A" />
      <rect x="53.5" y="54" width="3" height="1.5" rx="0.5" fill="#D4768A" />
    </svg>
  );
}
