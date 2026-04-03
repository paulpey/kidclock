interface IconProps { size?: number; }

export function PlayIcon({ size = 64 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Building blocks */}
      <rect x="10" y="30" width="16" height="16" rx="2" fill="#FF6B6B" />
      <rect x="20" y="18" width="16" height="16" rx="2" fill="#4ECDC4" />
      <rect x="30" y="30" width="16" height="16" rx="2" fill="#FFD93D" />
      {/* Ball */}
      <circle cx="50" cy="50" r="10" fill="#AFA9EC" />
      <path d="M44 46 Q50 42 56 46" stroke="white" strokeWidth="1.5" fill="none" />
      <path d="M44 54 Q50 58 56 54" stroke="white" strokeWidth="1.5" fill="none" />
      {/* Star decoration */}
      <path d="M14 12 L15 16 L19 16 L16 18 L17 22 L14 20 L11 22 L12 18 L9 16 L13 16Z" fill="#FFD93D" opacity="0.7" />
    </svg>
  );
}
