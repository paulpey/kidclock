interface IconProps {
  size?: number;
}

export function SunIcon({ size = 64 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line
          key={angle}
          x1="32" y1="6" x2="32" y2="12"
          stroke="#FFD93D"
          strokeWidth="3"
          strokeLinecap="round"
          transform={`rotate(${angle} 32 32)`}
        />
      ))}
      <circle cx="32" cy="32" r="14" fill="#FFD93D" />
      <circle cx="27" cy="29" r="2" fill="#4a3f8a" />
      <circle cx="37" cy="29" r="2" fill="#4a3f8a" />
      <path d="M26 36 Q32 42 38 36" stroke="#4a3f8a" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}
