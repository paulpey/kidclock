export function OwlSleeping() {
  return (
    <div className="owl-sleeping">
      <svg width="200" height="140" viewBox="0 0 200 140" fill="none">
        {/* Bed frame */}
        <rect x="20" y="60" width="160" height="60" rx="10" fill="#4a3f8a" opacity="0.5" />
        {/* Mattress */}
        <rect x="24" y="56" width="152" height="20" rx="8" fill="#6B5CA5" />
        {/* Blanket */}
        <path d="M30 64 L170 64 L170 110 Q170 116 164 116 L36 116 Q30 116 30 110 Z" fill="#7F77DD" />
        <path d="M30 64 L170 64 L170 72 Q140 80 100 76 Q60 72 30 80 Z" fill="#9F8FEF" opacity="0.5" />
        {/* Pillow */}
        <ellipse cx="56" cy="54" rx="28" ry="14" fill="white" opacity="0.9" />
        {/* Owl head on pillow */}
        <circle cx="56" cy="44" r="22" fill="#8B7355" />
        {/* Ears tufts */}
        <path d="M38 28 L42 38 L48 32Z" fill="#6B5335" />
        <path d="M74 28 L70 38 L64 32Z" fill="#6B5335" />
        {/* Face disc */}
        <ellipse cx="56" cy="46" rx="16" ry="14" fill="#D4C4A8" />
        {/* Closed eyes (arcs) */}
        <path d="M44 44 Q48 40 52 44" stroke="#4a3f8a" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M60 44 Q64 40 68 44" stroke="#4a3f8a" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Beak */}
        <path d="M54 50 L56 54 L58 50" fill="#E8A838" />
        {/* Night cap */}
        <path d="M34 36 Q36 10 70 20 L78 8" fill="#7F77DD" />
        <circle cx="78" cy="8" r="4" fill="#FFD93D" />
      </svg>
      {/* Zzz */}
      <div className="zzz">
        <span style={{ opacity: 0.8, fontSize: '24px', animation: 'float 3s ease-in-out infinite' }}>Z</span>
        <span style={{ opacity: 0.5, marginLeft: 8, fontSize: '20px', animation: 'float 3s ease-in-out infinite 0.5s' }}>z</span>
        <span style={{ opacity: 0.3, marginLeft: 16, fontSize: '16px', animation: 'float 3s ease-in-out infinite 1s' }}>z</span>
      </div>
    </div>
  );
}
