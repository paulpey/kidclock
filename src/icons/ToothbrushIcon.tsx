interface IconProps { size?: number; }

export function ToothbrushIcon({ size = 64 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Toothbrush handle */}
      <rect x="8" y="28" width="32" height="8" rx="4" fill="#5DCAA5" />
      {/* Brush head */}
      <rect x="38" y="26" width="12" height="12" rx="3" fill="#FFFFFF" stroke="#5DCAA5" strokeWidth="1.5" />
      {/* Bristles */}
      <line x1="40" y1="30" x2="40" y2="34" stroke="#5DCAA5" strokeWidth="1" />
      <line x1="43" y1="30" x2="43" y2="34" stroke="#5DCAA5" strokeWidth="1" />
      <line x1="46" y1="30" x2="46" y2="34" stroke="#5DCAA5" strokeWidth="1" />
      {/* Toothpaste */}
      <path d="M42 24 Q44 20 46 24" fill="#87CEEB" />
      {/* Tooth */}
      <path d="M56 18 Q56 12 52 12 Q50 12 50 16 Q50 12 48 12 Q44 12 44 18 Q44 28 50 28 Q56 28 56 18Z" fill="white" stroke="#E0E0E0" strokeWidth="1" />
      {/* Tooth smile */}
      <circle cx="48" cy="18" r="1" fill="#4a3f8a" />
      <circle cx="52" cy="18" r="1" fill="#4a3f8a" />
      <path d="M48 22 Q50 24 52 22" stroke="#4a3f8a" strokeWidth="0.8" strokeLinecap="round" fill="none" />
    </svg>
  );
}
