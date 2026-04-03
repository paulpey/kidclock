interface IconProps { size?: number; }

export function SleepIcon({ size = 64 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Bed frame */}
      <rect x="6" y="32" width="52" height="20" rx="4" fill="#7F77DD" />
      {/* Pillow */}
      <rect x="8" y="30" width="16" height="10" rx="5" fill="white" />
      {/* Blanket */}
      <path d="M8 36 L56 36 L56 50 Q56 52 54 52 L10 52 Q8 52 8 50 Z" fill="#9F8FEF" />
      {/* Head */}
      <circle cx="18" cy="28" r="8" fill="#FDDCB5" />
      {/* Closed eyes */}
      <path d="M14 27 Q16 25 18 27" stroke="#4a3f8a" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M20 27 Q22 25 24 27" stroke="#4a3f8a" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      {/* Stars */}
      <path d="M42 12 L43 16 L47 16 L44 18 L45 22 L42 20 L39 22 L40 18 L37 16 L41 16Z" fill="#FFD93D" opacity="0.8" />
      <path d="M52 18 L53 20 L55 20 L53.5 21.5 L54 24 L52 22.5 L50 24 L50.5 21.5 L49 20 L51 20Z" fill="#FFD93D" opacity="0.5" />
      {/* Zzz */}
      <text x="34" y="14" fill="#C8B6FF" fontSize="10" fontWeight="bold" opacity="0.8">Z</text>
      <text x="38" y="10" fill="#C8B6FF" fontSize="8" fontWeight="bold" opacity="0.5">z</text>
      <text x="42" y="7" fill="#C8B6FF" fontSize="6" fontWeight="bold" opacity="0.3">z</text>
    </svg>
  );
}
