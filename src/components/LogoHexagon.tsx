// src/components/LogoHexagon.tsx
export default function LogoHexagon({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="50%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* hexagon outline */}
      <g filter="url(#glow)">
        <polygon
          points="32,4 56,16 56,48 32,60 8,48 8,16"
          stroke="url(#g1)"
          strokeWidth="2.5"
          fill="rgba(8,8,10,0.15)"
        />
      </g>

      {/* nodes */}
      <circle cx="32" cy="12" r="2.6" fill="#a78bfa" />
      <circle cx="52" cy="20" r="2.6" fill="#06b6d4" />
      <circle cx="52" cy="44" r="2.6" fill="#fb7185" />
      <circle cx="32" cy="52" r="2.6" fill="#fda4af" />
      <circle cx="12" cy="44" r="2.6" fill="#60a5fa" />
      <circle cx="12" cy="20" r="2.6" fill="#34d399" />

      {/* connecting lines */}
      <path d="M32 14 L50 22" stroke="#9ca3af" strokeOpacity="0.18" strokeWidth="1" />
      <path d="M50 26 L50 40" stroke="#9ca3af" strokeOpacity="0.18" strokeWidth="1" />
      <path d="M50 46 L34 50" stroke="#9ca3af" strokeOpacity="0.18" strokeWidth="1" />
      <path d="M30 50 L14 46" stroke="#9ca3af" strokeOpacity="0.18" strokeWidth="1" />
      <path d="M14 42 L14 24" stroke="#9ca3af" strokeOpacity="0.18" strokeWidth="1" />
      <path d="M14 20 L30 14" stroke="#9ca3af" strokeOpacity="0.18" strokeWidth="1" />
    </svg>
  );
}

