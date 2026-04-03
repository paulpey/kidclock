interface IconProps { size?: number; }

export function NapIcon({ size = 64 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Alarm clock body */}
      <circle cx="32" cy="34" r="20" fill="#FFD93D" />
      <circle cx="32" cy="34" r="17" fill="#FFF8E7" />
      {/* Clock face */}
      <circle cx="32" cy="34" r="1.5" fill="#4a3f8a" />
      {/* Clock hands */}
      <line x1="32" y1="34" x2="32" y2="22" stroke="#4a3f8a" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="34" x2="40" y2="34" stroke="#4a3f8a" strokeWidth="2" strokeLinecap="round" />
      {/* Hour marks */}
      <line x1="32" y1="18" x2="32" y2="20" stroke="#4a3f8a" strokeWidth="1.5" />
      <line x1="32" y1="48" x2="32" y2="50" stroke="#4a3f8a" strokeWidth="1.5" />
      <line x1="14" y1="34" x2="16" y2="34" stroke="#4a3f8a" strokeWidth="1.5" />
      <line x1="48" y1="34" x2="50" y2="34" stroke="#4a3f8a" strokeWidth="1.5" />
      {/* Bells */}
      <circle cx="18" cy="16" r="6" fill="#FFD93D" stroke="#E8C830" strokeWidth="1.5" />
      <circle cx="46" cy="16" r="6" fill="#FFD93D" stroke="#E8C830" strokeWidth="1.5" />
      {/* Hammer */}
      <rect x="30" y="8" width="4" height="6" rx="2" fill="#E8C830" />
      {/* Legs */}
      <line x1="20" y1="52" x2="16" y2="58" stroke="#E8C830" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="44" y1="52" x2="48" y2="58" stroke="#E8C830" strokeWidth="2.5" strokeLinecap="round" />
      {/* Zzz for nap */}
      <text x="50" y="12" fill="#AFA9EC" fontSize="8" fontWeight="bold" opacity="0.7">Z</text>
      <text x="54" y="8" fill="#AFA9EC" fontSize="6" fontWeight="bold" opacity="0.5">z</text>
    </svg>
  );
}
