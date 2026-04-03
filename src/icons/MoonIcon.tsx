interface IconProps {
  size?: number;
}

export function MoonIcon({ size = 64 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path d="M40 12 A20 20 0 1 0 40 52 A16 16 0 1 1 40 12Z" fill="#E8E0C8" />
      <circle cx="28" cy="24" r="1.5" fill="#D4C4A8" opacity="0.6" />
      <circle cx="22" cy="36" r="2" fill="#D4C4A8" opacity="0.5" />
      <circle cx="32" cy="42" r="1" fill="#D4C4A8" opacity="0.4" />
    </svg>
  );
}
