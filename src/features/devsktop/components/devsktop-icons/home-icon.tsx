import type { IconProps } from "../../../../types";

export function HomeIcon({ size = 'size-128', classes = ' ' }: IconProps) {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${size} ${classes}`}
    >
      {/* Background Shape */}
      <rect
        width="256"
        height="256"
        rx="64"
        ry="64"
        fill="url(#homeBackgroundGradient)"
      />

      {/* House body - simple silhouette with rounded bottom corners */}
      <path
        d="M70 145 L186 145 L186 210 Q186 220 176 220 L80 220 Q70 220 70 210 Z"
        fill="url(#houseGradient)"
      />

      {/* Pyramid Roof - Left Face (darker) */}
      <path
        d="M55 145 L70 145 L128 75 Z"
        fill="url(#roofLeftGradient)"
      />

      {/* Pyramid Roof - Right Face (lighter) */}
      <path
        d="M186 145 L201 145 L128 75 Z"
        fill="url(#roofRightGradient)"
      />

      {/* Pyramid Roof - Front Face (main surface) */}
      <path
        d="M70 145 L128 75 L186 145 Z"
        fill="url(#roofFrontGradient)"
      />

      {/* Door */}
      <rect
        x="116"
        y="180"
        width="24"
        height="40"
        rx="4"
        ry="4"
        fill="url(#doorGradient)"
      />

      {/* Door handle */}
      <circle
        cx="134"
        cy="200"
        r="2"
        fill="#D1D5DB"
      />

      {/* Chimney */}
      <rect
        x="150"
        y="95"
        width="16"
        height="35"
        rx="3"
        ry="3"
        fill="url(#chimneyGradient)"
      />

      {/* Chimney top */}
      <rect
        x="147"
        y="95"
        width="22"
        height="6"
        rx="2"
        ry="2"
        fill="url(#chimneyTopGradient)"
      />

      {/* Gradients */}
      <defs>
        <linearGradient id="homeBackgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8C00" />
          <stop offset="100%" stopColor="#FF6B00" />
        </linearGradient>

        <linearGradient id="houseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F8F8F8" />
        </linearGradient>

        <linearGradient id="roofFrontGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E53E3E" />
          <stop offset="100%" stopColor="#C53030" />
        </linearGradient>

        <linearGradient id="roofLeftGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9B2C2C" />
          <stop offset="100%" stopColor="#742A2A" />
        </linearGradient>

        <linearGradient id="roofRightGradient" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FC8181" />
          <stop offset="100%" stopColor="#E53E3E" />
        </linearGradient>

        <linearGradient id="doorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#654321" />
        </linearGradient>

        <linearGradient id="chimneyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0A0A0" />
          <stop offset="100%" stopColor="#808080" />
        </linearGradient>

        <linearGradient id="chimneyTopGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B0B0B0" />
          <stop offset="100%" stopColor="#909090" />
        </linearGradient>
      </defs>
    </svg>
  )
}