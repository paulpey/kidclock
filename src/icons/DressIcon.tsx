interface IconProps { size?: number; }

export function DressIcon({ size = 64 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* T-shirt */}
      <path d="M18 12 L14 12 L8 20 L14 24 L14 38 L50 38 L50 24 L56 20 L50 12 L46 12 L42 16 L22 16 Z" fill="#85B7EB" />
      {/* Collar */}
      <path d="M22 16 Q32 22 42 16" stroke="#6A9FD8" strokeWidth="1.5" fill="none" />
      {/* Buttons */}
      <circle cx="32" cy="22" r="1.5" fill="#FFFFFF" />
      <circle cx="32" cy="28" r="1.5" fill="#FFFFFF" />
      <circle cx="32" cy="34" r="1.5" fill="#FFFFFF" />
      {/* Shoes */}
      <path d="M16 46 L16 52 Q16 56 22 56 L28 56 Q30 56 30 54 L30 50 L20 46 Z" fill="#8B6914" />
      <path d="M34 46 L34 50 Q34 56 38 56 L46 56 Q50 56 50 52 L50 46 L40 46 Z" fill="#8B6914" />
    </svg>
  );
}
