interface IconProps { size?: number; }

export function SportIcon({ size = 64 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Soccer ball */}
      <circle cx="32" cy="32" r="20" fill="white" stroke="#2C2C2A" strokeWidth="2" />
      <path d="M32 12 L28 22 L36 22 Z" fill="#2C2C2A" />
      <path d="M32 52 L28 42 L36 42 Z" fill="#2C2C2A" />
      <path d="M12 32 L22 28 L22 36 Z" fill="#2C2C2A" />
      <path d="M52 32 L42 28 L42 36 Z" fill="#2C2C2A" />
      <path d="M20 18 L26 24 L20 26 Z" fill="#2C2C2A" />
      <path d="M44 18 L38 24 L44 26 Z" fill="#2C2C2A" />
      <path d="M20 46 L26 40 L20 38 Z" fill="#2C2C2A" />
      <path d="M44 46 L38 40 L44 38 Z" fill="#2C2C2A" />
      {/* Motion lines */}
      <line x1="6" y1="20" x2="2" y2="18" stroke="#85B7EB" strokeWidth="2" strokeLinecap="round" />
      <line x1="6" y1="32" x2="2" y2="32" stroke="#85B7EB" strokeWidth="2" strokeLinecap="round" />
      <line x1="6" y1="44" x2="2" y2="46" stroke="#85B7EB" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
