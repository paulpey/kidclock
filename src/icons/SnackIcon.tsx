interface IconProps { size?: number; }

export function SnackIcon({ size = 64 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Apple body */}
      <path d="M20 28 Q12 28 12 40 Q12 54 32 54 Q52 54 52 40 Q52 28 44 28 Q38 28 32 32 Q26 28 20 28Z" fill="#E74C3C" />
      {/* Apple highlight */}
      <path d="M20 32 Q18 36 20 42" stroke="#F0A0A0" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Stem */}
      <line x1="32" y1="28" x2="34" y2="18" stroke="#8B6914" strokeWidth="2.5" strokeLinecap="round" />
      {/* Leaf */}
      <path d="M34 20 Q42 14 38 22" fill="#5DCAA5" />
    </svg>
  );
}
