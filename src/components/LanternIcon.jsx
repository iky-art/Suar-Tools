export default function LanternIcon({ size = 64, lit = true, swinging = false, className = '' }) {
  return (
    <svg
      className={`lantern-icon ${swinging ? 'swinging' : ''} ${className}`}
      width={size}
      height={size * 1.4}
      viewBox="0 0 64 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="flameGlow" cx="0.5" cy="0.42" r="0.62">
          <stop offset="0%" stopColor="#fff3d6" />
          <stop offset="35%" stopColor="#ffb84d" />
          <stop offset="70%" stopColor="#ff8a3c" />
          <stop offset="100%" stopColor="#7a3f14" stopOpacity="0.3" />
        </radialGradient>
        <linearGradient id="brassBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a2f22" />
          <stop offset="100%" stopColor="#241a12" />
        </linearGradient>
        <linearGradient id="brassEdge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#c98f3c" />
          <stop offset="50%" stopColor="#e8b563" />
          <stop offset="100%" stopColor="#c98f3c" />
        </linearGradient>
      </defs>

      {/* gagang */}
      <path d="M24 6 Q32 -4 40 6" stroke="url(#brassEdge)" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <rect x="29" y="4" width="6" height="6" rx="1.5" fill="url(#brassEdge)" />

      {/* tutup atas */}
      <path d="M20 12 L44 12 L38 20 L26 20 Z" fill="url(#brassEdge)" />
      <rect x="26" y="20" width="12" height="3" fill="#2a1f14" />

      {/* badan lentera / kaca */}
      <rect x="18" y="23" width="28" height="42" rx="4" fill="url(#brassBody)" stroke="url(#brassEdge)" strokeWidth="2" />
      <rect x="21" y="26" width="22" height="36" rx="2.5" fill="#0c0f08" opacity="0.55" />

      {/* nyala api di dalam kaca */}
      <g className={lit ? 'flame-flicker' : ''} opacity={lit ? 1 : 0.25}>
        <ellipse cx="32" cy="46" rx="13" ry="17" fill="url(#flameGlow)" />
        <path
          d="M32 34 C36 40 38 45 34 50 C33 47 31 47 30 50 C27 45 28 40 32 34 Z"
          fill="#fff3d6"
        />
      </g>

      {/* jeruji vertikal (rangka lentera) */}
      <line x1="24" y1="23" x2="24" y2="65" stroke="url(#brassEdge)" strokeWidth="1.4" />
      <line x1="32" y1="23" x2="32" y2="65" stroke="url(#brassEdge)" strokeWidth="1.4" opacity="0.5" />
      <line x1="40" y1="23" x2="40" y2="65" stroke="url(#brassEdge)" strokeWidth="1.4" />

      {/* alas */}
      <path d="M15 65 L49 65 L44 74 L20 74 Z" fill="url(#brassEdge)" />
      <rect x="26" y="74" width="12" height="5" rx="1.5" fill="url(#brassEdge)" />

      {/* cahaya menyebar ke luar kaca */}
      {lit && <ellipse cx="32" cy="44" rx="20" ry="24" fill="#ff9a4d" opacity="0.12" />}
    </svg>
  )
}
