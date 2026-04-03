interface IconProps { size?: number; }

export function SkatingIcon({ size = 64 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Ice surface */}
      <ellipse cx="32" cy="56" rx="28" ry="4" fill="#C8E6FF" opacity="0.5" />
      {/* Boot */}
      <path d="M14 30 L14 44 L40 44 Q44 44 44 40 L44 36 L26 36 L26 30 Z" fill="#AFA9EC" />
      <rect x="14" y="28" width="14" height="6" rx="2" fill="#9690D6" />
      {/* Laces */}
      <line x1="18" y1="30" x2="24" y2="30" stroke="white" strokeWidth="1" />
      <line x1="18" y1="32" x2="24" y2="32" stroke="white" strokeWidth="1" />
      {/* Blade */}
      <rect x="12" y="44" width="34" height="3" rx="1.5" fill="#C0C0C0" />
      <path d="M10 47 Q10 44 14 44" stroke="#C0C0C0" strokeWidth="2" fill="none" />
      <path d="M48 47 Q48 44 44 44" stroke="#C0C0C0" strokeWidth="2" fill="none" />
      {/* Ice sparkles */}
      <circle cx="50" cy="52" r="1.5" fill="#85B7EB" opacity="0.6" />
      <circle cx="20" cy="54" r="1" fill="#85B7EB" opacity="0.5" />
      <circle cx="38" cy="52" r="1.5" fill="#85B7EB" opacity="0.7" />
      {/* Snowflake */}
      <text x="46" y="22" fontSize="16" fill="#85B7EB" opacity="0.6">*</text>
      <text x="8" y="18" fontSize="12" fill="#85B7EB" opacity="0.4">*</text>
    </svg>
  );
}
