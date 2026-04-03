interface IconProps { size?: number; }

export function HomeworkIcon({ size = 64 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Notebook */}
      <rect x="12" y="8" width="40" height="48" rx="3" fill="#85B7EB" />
      <rect x="16" y="8" width="36" height="48" rx="3" fill="#EEF4FF" />
      {/* Spiral rings */}
      <circle cx="16" cy="16" r="2" fill="#6A9FD8" />
      <circle cx="16" cy="26" r="2" fill="#6A9FD8" />
      <circle cx="16" cy="36" r="2" fill="#6A9FD8" />
      <circle cx="16" cy="46" r="2" fill="#6A9FD8" />
      {/* Writing lines */}
      <line x1="22" y1="18" x2="46" y2="18" stroke="#C0D4F0" strokeWidth="1.5" />
      <line x1="22" y1="24" x2="44" y2="24" stroke="#C0D4F0" strokeWidth="1.5" />
      <line x1="22" y1="30" x2="40" y2="30" stroke="#C0D4F0" strokeWidth="1.5" />
      <line x1="22" y1="36" x2="42" y2="36" stroke="#C0D4F0" strokeWidth="1.5" />
      {/* Pencil */}
      <line x1="40" y1="44" x2="54" y2="14" stroke="#FFD93D" strokeWidth="3" strokeLinecap="round" />
      <line x1="54" y1="14" x2="56" y2="10" stroke="#FDDCB5" strokeWidth="3" strokeLinecap="round" />
      <polygon points="56,8 58,10 54,14" fill="#2C2C2A" />
    </svg>
  );
}
