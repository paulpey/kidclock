export function OwlAwake() {
  return (
    <div className="owl-awake">
      <svg width="140" height="180" viewBox="0 0 140 180" fill="none">
        {/* Body */}
        <ellipse cx="70" cy="110" rx="40" ry="50" fill="#8B7355" />
        {/* Belly */}
        <ellipse cx="70" cy="120" rx="25" ry="35" fill="#D4C4A8" />
        {/* Head */}
        <circle cx="70" cy="56" r="32" fill="#8B7355" />
        {/* Ear tufts */}
        <path d="M42 30 L48 46 L56 36Z" fill="#6B5335" />
        <path d="M98 30 L92 46 L84 36Z" fill="#6B5335" />
        {/* Face disc */}
        <ellipse cx="70" cy="60" rx="24" ry="22" fill="#D4C4A8" />
        {/* Eyes - big open */}
        <circle cx="58" cy="56" r="10" fill="#FFF8E7" />
        <circle cx="82" cy="56" r="10" fill="#FFF8E7" />
        <circle cx="58" cy="56" r="6" fill="#2C2C2A" />
        <circle cx="82" cy="56" r="6" fill="#2C2C2A" />
        {/* Eye reflections */}
        <circle cx="55" cy="53" r="2" fill="white" />
        <circle cx="79" cy="53" r="2" fill="white" />
        {/* Beak */}
        <path d="M66 66 L70 74 L74 66" fill="#E8A838" />
        {/* Wings */}
        <path d="M30 90 Q20 110 30 140 Q35 130 42 120" fill="#6B5335" />
        <path d="M110 90 Q120 110 110 140 Q105 130 98 120" fill="#6B5335" />
        {/* Feet */}
        <path d="M52 158 L48 168 M52 158 L52 168 M52 158 L56 168" stroke="#E8A838" strokeWidth="3" strokeLinecap="round" />
        <path d="M88 158 L84 168 M88 158 L88 168 M88 158 L92 168" stroke="#E8A838" strokeWidth="3" strokeLinecap="round" />
        {/* Belly pattern */}
        <path d="M55 100 Q70 108 85 100" stroke="#C4B498" strokeWidth="1.5" fill="none" />
        <path d="M52 110 Q70 118 88 110" stroke="#C4B498" strokeWidth="1.5" fill="none" />
        <path d="M54 120 Q70 128 86 120" stroke="#C4B498" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  );
}
